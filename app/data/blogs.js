export const blogs = [
  {
    id: 6,
    slug: "nodejs-vps-webhook-auto-deployment-github-discord",
    title: "VPS Webhook Auto Deployment for Node.js with GitHub & Discord",
    excerpt: "A complete step-by-step guide to building a lightweight, automated CI/CD deployment pipeline for Node.js applications on an Ubuntu VPS using GitHub Webhooks, HMAC-SHA256 signature verification, PM2, Nginx, and Discord notifications.",
    category: "DevOps & Cloud",
    tags: ["Node.js", "VPS", "DevOps", "CI/CD", "GitHub Webhooks", "Discord", "Nginx", "PM2"],
    date: "Sep 24, 2024",
    readTime: "10 min read",
    author: {
      name: "Imtiaz Hasan",
      role: "Full Stack Developer",
      avatar: "/images/hero_photo.webp"
    },
    gradient: "from-emerald-500 to-green-700",
    coverImage: "/images/blogs/nodejs-vps-webhook-deployment.jpg",
    thumbnail: "/images/blogs/nodejs-vps-webhook-deployment.jpg",
    githubRepo: "https://github.com/imtiazhasanBD/nodejs-vps-webhook-auto-deployment",
    content: `
Deploying Node.js applications to a Linux VPS often involves repetitive manual steps: SSHing into the server, pulling the latest git commits, running npm installs, compiling builds, and restarting process managers.

While hosted CI/CD tools like GitHub Actions are popular, running a **self-hosted webhook-driven deployment pipeline directly on your Ubuntu VPS** provides a lightweight, blazingly fast, and completely free deployment pipeline with zero runner minute limits.

In this guide, we walk through the architecture and implementation of an automated deployment system that triggers whenever you push to your \`main\` branch, validates security via HMAC-SHA256 signatures, gracefully reloads PM2, and posts rich real-time deployment status embeds to Discord.

### The Deployment Pipeline Flow
When you push code to GitHub:
- **Git Push:** A commit is pushed to the \`main\` branch.
- **Webhook Dispatch:** GitHub dispatches an HTTPS POST request with an HMAC-SHA256 signature to your VPS.
- **Nginx Reverse Proxy:** Nginx receives the request on port 443 with SSL and forwards it to the local webhook service.
- **Signature Verification:** The Node.js webhook handler computes the HMAC hash and verifies authenticity using \`crypto.timingSafeEqual\`.
- **Automated Script Execution:** \`deploy.sh\` pulls code via \`git fetch\` and \`git reset --hard\`, executes \`npm ci\`, and triggers build tasks.
- **PM2 Reload:** PM2 reloads the application with zero downtime.
- **Discord Notification:** A detailed embed with deployment status, commit author, commit message, and execution duration is sent to your Discord channel.

| Step | Component | Role / Purpose |
| :--- | :--- | :--- |
| **1. Trigger** | GitHub Webhook | Detects pushes to \`main\` & sends payload |
| **2. Ingress** | Nginx Reverse Proxy | SSL Termination & routing to port 3000/4000 |
| **3. Security** | Node.js Webhook Server | HMAC-SHA256 verification of \`x-hub-signature-256\` |
| **4. Build & Run** | Bash Script + PM2 | Clean dependency install, build, & zero-downtime reload |
| **5. Monitoring** | Discord Webhook | Real-time success or failure notifications |

### 1. Preparing the Ubuntu VPS
First, update system packages and install Git, Nginx, and curl:

\`\`\`bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx curl
\`\`\`

Install Node.js (v22.x LTS) and global PM2:

\`\`\`bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
\`\`\`

Verify installations:

\`\`\`bash
node -v
npm -v
git --version
nginx -v
pm2 -v
\`\`\`

### 2. Setting Up the Node.js Application
Create a dedicated application directory under \`/var/www\` with appropriate user ownership:

\`\`\`bash
sudo mkdir -p /var/www
sudo chown -R $USER:$USER /var/www

cd /var/www
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git myapp
cd myapp

npm ci
npm run build # (if applicable)
\`\`\`

Launch the application under PM2 and configure it to restore on server reboots:

\`\`\`bash
pm2 start npm --name myapp -- start
pm2 save
pm2 startup # Run the output command provided by PM2
\`\`\`

### 3. Writing the Production Deployment Script
Create an automated deployment script in \`/var/www/myapp/scripts/deploy.sh\`:

\`\`\`bash
#!/bin/bash
set -Eeuo pipefail

APP_DIR="/var/www/myapp"
BRANCH="main"
APP_NAME="myapp"

cd "$APP_DIR"
echo "==> Deployment started"

# Fetch latest code and force working tree to match remote
echo "==> Fetching latest code"
git fetch origin "$BRANCH"

echo "==> Resetting working tree to origin/$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> Installing dependencies"
npm ci

# Run build if a build script exists in package.json
if npm run | grep -q " build"; then
    echo "==> Building application"
    npm run build
fi

echo "==> Reloading PM2 application with zero downtime"
pm2 reload "$APP_NAME" --update-env

echo "==> Deployment completed successfully"
\`\`\`

Make the script executable:

\`\`\`bash
chmod +x /var/www/myapp/scripts/deploy.sh
\`\`\`

#### Why \`git fetch\` and \`git reset --hard\`?
Using \`git reset --hard origin/main\` guarantees that the deployment server exactly mirrors the remote repository state. It eliminates merge conflicts and discarded dirty files that can break automatic deployments.

### 4. The Secure Webhook Receiver (Node.js & Express)
The webhook server listens for incoming GitHub requests and securely verifies the payload signature before executing \`deploy.sh\`:

\`\`\`javascript
const express = require('express');
const crypto = require('crypto');
const { execFile } = require('child_process');
const axios = require('axios');

const app = express();
app.use(express.raw({ type: 'application/json' }));

const SECRET = process.env.GITHUB_WEBHOOK_SECRET;
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL;

function verifySignature(req) {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) return false;

  const hmac = crypto.createHmac('sha256', SECRET);
  const digest = 'sha256=' + hmac.update(req.body).digest('hex');

  const checksum = Buffer.from(digest, 'utf8');
  const expected = Buffer.from(signature, 'utf8');

  return checksum.length === expected.length && crypto.timingSafeEqual(checksum, expected);
}

app.post('/github-webhook', (req, res) => {
  if (!verifySignature(req)) {
    return res.status(401).send('Invalid signature');
  }

  const payload = JSON.parse(req.body.toString());

  // Only deploy on push to main branch
  if (payload.ref === 'refs/heads/main') {
    res.status(202).send('Deployment initiated');

    execFile('/var/www/myapp/scripts/deploy.sh', async (error, stdout, stderr) => {
      const isSuccess = !error;
      const message = isSuccess ? '✅ Deployment Succeeded' : '❌ Deployment Failed';

      // Send status embed to Discord
      if (DISCORD_WEBHOOK) {
        await axios.post(DISCORD_WEBHOOK, {
          embeds: [{
            title: message,
            color: isSuccess ? 0x62A92B : 0xE53E3E,
            fields: [
              { name: 'Repository', value: payload.repository.full_name, inline: true },
              { name: 'Committer', value: payload.pusher.name, inline: true },
              { name: 'Commit', value: payload.head_commit.message }
            ],
            timestamp: new Date().toISOString()
          }]
        });
      }
    });
  } else {
    res.status(200).send('Ignored: not main branch');
  }
});

app.listen(3333, () => console.log('Webhook server running on port 3333'));
\`\`\`

### 5. Storing Secrets Securely
Keep your webhook secrets in an environment file protected with restricted permissions:

\`\`\`bash
sudo nano /etc/github-webhook.env
\`\`\`

Add your secrets:

\`\`\`env
GITHUB_WEBHOOK_SECRET=your_long_random_hex_secret_here
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_ID/YOUR_TOKEN
\`\`\`

Restrict permissions so only root or authorized users can read it:

\`\`\`bash
sudo chmod 600 /etc/github-webhook.env
\`\`\`

### 6. Nginx Reverse Proxy Configuration
Configure Nginx to route traffic to both your web application and the webhook endpoint:

\`\`\`nginx
# /etc/nginx/sites-available/myapp.conf
server {
    server_name myapp.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Webhook endpoint routed to internal listener
    location /github-webhook {
        proxy_pass http://localhost:3333/github-webhook;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
\`\`\`

Enable the site and obtain a free Let's Encrypt SSL certificate:

\`\`\`bash
sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d myapp.yourdomain.com
\`\`\`

### 7. Configuring GitHub & Discord Webhooks
1. **GitHub Settings:** In your GitHub repo, go to **Settings > Webhooks > Add webhook**.
   - **Payload URL:** \`https://myapp.yourdomain.com/github-webhook\`
   - **Content type:** \`application/json\`
   - **Secret:** Enter the secret configured in \`/etc/github-webhook.env\`
   - **Which events:** Select "Just the push event"
2. **Discord Channel:** In Discord channel settings, create a new webhook integration and copy the URL into your environment file.

### 8. Testing the Full Pipeline
Now, make any code change locally and push to GitHub:

\`\`\`bash
git add .
git commit -m "feat: improve realtime user status indicator"
git push origin main
\`\`\`

Within seconds:
1. GitHub dispatches the webhook payload to your VPS.
2. The Node.js webhook server validates the HMAC signature.
3. \`deploy.sh\` pulls, builds, and instructs PM2 to perform a zero-downtime reload.
4. Discord chimes with a rich green embed notification confirming deployment success!

### Conclusion
By implementing this webhook auto-deployment architecture, you get an ultra-fast, robust CI/CD pipeline on your own Linux VPS without depending on third-party runner minutes or complex setups.

Check out the full repository and deployment scripts on [GitHub: nodejs-vps-webhook-auto-deployment](https://github.com/imtiazhasanBD/nodejs-vps-webhook-auto-deployment).
    `
  },
  {
    id: 1,
    slug: "building-realtime-video-apps-webrtc-agora-mediasoup",
    title: "Building Scalable Real-Time Video & Voice Apps: WebRTC vs Agora vs Mediasoup",
    excerpt: "A deep dive into real-time media architectures, comparing raw WebRTC peer-to-peer connections, Agora/ZEGOCLOUD cloud SDKs, and custom SFU servers like Mediasoup for high-scale applications.",
    category: "WebRTC & Real-Time",
    tags: ["WebRTC", "Agora", "ZEGOCLOUD", "Mediasoup", "Node.js", "Video Streaming"],
    date: "Sep 08, 2024",
    readTime: "7 min read",
    author: {
      name: "Imtiaz Hasan",
      role: "Full Stack Developer",
      avatar: "/images/hero_photo.webp"
    },
    gradient: "from-blue-600 to-cyan-500",
    coverImage: "/images/blogs/webrtc-stream.jpg",
    thumbnail: "/images/blogs/webrtc-stream.jpg",
    content: `
Real-time audio and video communications have evolved from a niche capability into a core requirement for modern applications—from telehealth and remote education to live streaming and collaborative workspaces.

When engineering real-time features, developers face a crucial architectural decision: **Should you build directly on WebRTC mesh, leverage third-party PaaS like Agora or ZEGOCLOUD, or operate a self-hosted Selective Forwarding Unit (SFU) such as Mediasoup?**

### 1. Peer-to-Peer WebRTC: The Foundation
WebRTC enables direct browser-to-browser media streaming via RTP/RTCP after exchanging SDP (Session Description Protocol) offer/answers through a signaling server (typically powered by WebSockets).

\`\`\`javascript
// Initializing a standard RTCPeerConnection
const peerConnection = new RTCPeerConnection({
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    {
      urls: 'turn:turn.yourdomain.com:3478',
      username: 'user',
      credential: 'password'
    }
  ]
});

// Adding local media tracks to peer connection
localStream.getTracks().forEach((track) => {
  peerConnection.addTrack(track, localStream);
});
\`\`\`

#### When to use P2P:
- 1-on-1 audio/video calls.
- Low-budget projects where server media relay bandwidth costs must be minimal.
- Absolute end-to-end privacy requirements without intermediary servers.

### 2. Agora & ZEGOCLOUD: Enterprise Cloud PaaS
For multi-party video conferencing, global latency optimization, and rapid production time-to-market, platforms like **Agora** and **ZEGOCLOUD** provide dedicated Software-Defined Real-Time Networks (SD-RTN).

- **Global Edge Acceleration:** Traffic automatically routes through optimal edge nodes worldwide.
- **Adaptive Bitrate & Packet Loss Resilience:** Capable of handling up to 70-80% packet loss without dropping calls.
- **Rich Client SDKs:** Ready-made SDKs for React, Next.js, Flutter, Android, and iOS with active speaker detection, virtual backgrounds, and screen sharing.

\`\`\`javascript
import AgoraRTC from "agora-rtc-sdk-ng";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
await client.join(APP_ID, CHANNEL_NAME, TOKEN, UID);

const [localAudioTrack, localVideoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
await client.publish([localAudioTrack, localVideoTrack]);
\`\`\`

### 3. Mediasoup: The Power of a Custom SFU
When you need full control over media pipelines, custom recording, ML computer vision processing, or want to avoid per-minute PaaS costs at large scale, **Mediasoup** is an unmatched choice. Written in C++ as a Node.js native addon, it acts as a high-performance Selective Forwarding Unit (SFU).

Unlike an MCU (Multipoint Control Unit) that decodes, mixes, and re-encodes video streams (which demands heavy CPU usage), an SFU acts as an intelligent router—receiving streams once and selectively forwarding them to peers based on available bandwidth (simulcast / SVC).

| Metric / Feature | Native WebRTC (Mesh) | Agora / ZEGOCLOUD | Mediasoup SFU |
| :--- | :--- | :--- | :--- |
| **Max Participants** | 3 - 5 users | 1,000+ users | 100+ per room |
| **Bandwidth (Client)** | Scales exponentially (N-1) | Low (Client sends 1 stream) | Low (Client sends 1 stream) |
| **Server Overhead** | Only Signaling server | None (Managed Cloud) | High (VPS / Dedicated Server) |
| **Cost Model** | Free / STUN-TURN servers | Per-minute usage | Fixed server infrastructure |
| **Custom Control** | High | Low - Moderate | Maximum |

### Key Takeaways & Recommendations
- For **1-to-1 video chats**, standard WebRTC with a lightweight Node.js/Socket.io signaling server is straightforward and economical.
- For **fast MVP launches or mission-critical global webinars**, integrate Agora or ZEGOCLOUD to offload infrastructure burdens.
- For **privacy-first enterprise platforms or proprietary AI video processing**, host a Mediasoup SFU on a high-bandwidth Linux VPS with Docker.
    `
  },
  {
    id: 2,
    slug: "mastering-nestjs-enterprise-microservices-rest-apis",
    title: "Mastering Nest.js: Building Enterprise-Grade Scalable Microservices & REST APIs",
    excerpt: "Discover why Nest.js has become the gold standard for enterprise Node.js development, leveraging TypeScript, Dependency Injection, Guards, Interceptors, and microservice transports.",
    category: "Backend & Nest.js",
    tags: ["Nest.js", "TypeScript", "Node.js", "Microservices", "PostgreSQL", "Prisma"],
    date: "Aug 24, 2024",
    readTime: "8 min read",
    author: {
      name: "Imtiaz Hasan",
      role: "Full Stack Developer",
      avatar: "/images/hero_photo.webp"
    },
    gradient: "from-red-500 to-pink-600",
    coverImage: "/images/blogs/nestjs-microservices.jpg",
    thumbnail: "/images/blogs/nestjs-microservices.jpg",
    content: `
Building backend services with Node.js and Express often starts quickly, but as codebases grow, they can easily turn into messy, untyped architectures with inconsistent patterns.

Enter **Nest.js**—a progressive Node.js framework built with TypeScript that brings architectural discipline inspired by Angular, while preserving complete flexibility with underlying engines like Express or Fastify.

### Why Nest.js Stands Out
1. **First-Class TypeScript Support:** Strong typing ensures compile-time safety and prevents runtime bugs.
2. **Dependency Injection (IoC Container):** Inversion of control allows clean decoupling of controllers, services, and repositories.
3. **Modular Architecture:** Organize complex applications into self-contained domain modules (\`AuthModule\`, \`UsersModule\`, \`PaymentModule\`).
4. **Declarative Decorators:** Streamlined handling of HTTP routes, parameters, validation, and serialization.

### Constructing a Production Service with Validation & Prisma
Below is a typical pattern combining Nest.js Controller, Service, and Class-Validator DTOs:

\`\`\`typescript
// create-user.dto.ts
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  fullName: string;
}

// users.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
\`\`\`

### Microservices with Redis & RabbitMQ
One of Nest.js's biggest strengths is its abstraction layer for microservices. Moving from an HTTP monolith to a message-driven distributed architecture requires minimal code rewrites:

\`\`\`typescript
// main.ts (Microservice Listener)
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });
  await app.listen();
}
bootstrap();
\`\`\`

### Best Practices for Nest.js in Production
- **Use Global Exception Filters:** Ensure unified JSON error responses across your entire API.
- **Implement Custom Guards:** Protect routes based on JWT signatures, RBAC (Role-Based Access Control), or API keys.
- **Leverage Swagger / OpenAPI Auto-generation:** Use \`@nestjs/swagger\` decorators to keep live interactive API documentation in sync with your DTOs.
    `
  },
  {
    id: 3,
    slug: "deploying-fullstack-apps-linux-vps-docker-nginx-cicd",
    title: "Complete Guide to Deploying Full-Stack Apps to a Linux VPS with Docker, Nginx & CI/CD",
    excerpt: "Learn how to take your Next.js and Nest.js applications from localhost to production on an affordable Linux VPS using Docker Compose, Nginx reverse proxy, SSL, and automated GitHub Actions CI/CD.",
    category: "DevOps & Cloud",
    tags: ["DevOps", "VPS", "Docker", "Nginx", "CI/CD", "Linux", "SSL"],
    date: "Aug 12, 2024",
    readTime: "9 min read",
    author: {
      name: "Imtiaz Hasan",
      role: "Full Stack Developer",
      avatar: "/images/hero_photo.webp"
    },
    gradient: "from-emerald-500 to-teal-700",
    coverImage: "/images/blogs/devops-vps.jpg",
    thumbnail: "/images/blogs/devops-vps.jpg",
    content: `
Serverless platforms like Vercel and Netlify are great for frontend projects, but as your stack expands to include Nest.js backends, MongoDB/PostgreSQL databases, Redis queues, and WebRTC streaming servers, costs can escalate quickly.

Deploying on your own **Linux VPS (DigitalOcean, Linode, Hetzner, or AWS EC2)** offers total control, high performance, and massive cost savings. Here is the step-by-step production blueprint.

### 1. Containerization with Docker & Docker Compose
Docker isolates your application dependencies and guarantees identical behavior between local development and production servers.

\`\`\`yaml
# docker-compose.prod.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    restart: always
    environment:
      - NODE_ENV=production
    ports:
      - "3000:3000"

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    restart: always
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/appdb
      - REDIS_HOST=redis
    depends_on:
      - db
      - redis
    ports:
      - "4000:4000"

  db:
    image: postgres:15-alpine
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: appdb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

### 2. Nginx as Reverse Proxy & SSL Termination
Nginx acts as the front gateway to route public traffic, handle WebSocket upgrades, compress assets with Gzip, and terminate TLS/SSL certificates via Let's Encrypt Certbot.

\`\`\`nginx
# /etc/nginx/sites-available/app.conf
server {
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
\`\`\`

### 3. Automated CI/CD with GitHub Actions
Whenever code is merged to the \`main\` branch, GitHub Actions builds and validates the project, SSHs into the VPS, pulls the latest images, and restarts containers with zero downtime:

\`\`\`yaml
# .github/workflows/deploy.yml
name: Production Deployment

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: SSH to VPS & Deploy
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.VPS_HOST }}
          username: \${{ secrets.VPS_USER }}
          key: \${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /opt/apps/my-production-app
            git pull origin main
            docker compose -f docker-compose.prod.yml up -d --build
            docker system prune -f
\`\`\`

### Production Hardening Checklist
- **SSH Key Authentication Only:** Disable password logins and change the default SSH port (e.g. 2222).
- **Configure UFW Firewall:** Only permit ports 22 (SSH), 80 (HTTP), and 443 (HTTPS).
- **Automated DB Backups:** Set up a cron job to snapshot PostgreSQL/MongoDB data to AWS S3 nightly.
- **Monitoring & Logs:** Use tools like Prometheus, Grafana, or lightweight options like Dozzle and Portainer.
    `
  },
  {
    id: 4,
    slug: "supercharging-workflows-n8n-automation-webhooks",
    title: "Supercharging Developer Workflows & Backend Tasks with n8n Automation & Webhooks",
    excerpt: "How to use n8n—the powerful open-source workflow automation platform—to automate user onboarding, trigger notification pipelines, orchestrate AI agents, and bridge third-party APIs effortlessly.",
    category: "Automation & n8n",
    tags: ["n8n", "Automation", "Webhooks", "Node.js", "AI Workflows", "DevOps"],
    date: "Jul 29, 2024",
    readTime: "6 min read",
    author: {
      name: "Imtiaz Hasan",
      role: "Full Stack Developer",
      avatar: "/images/hero_photo.webp"
    },
    gradient: "from-amber-500 to-orange-600",
    coverImage: "/images/blogs/n8n-automation.jpg",
    thumbnail: "/images/blogs/n8n-automation.jpg",
    content: `
As full-stack developers, we often write repetitive boilerplate code to handle recurring tasks: sending notifications to Slack, processing email verification, synchronizing CRM records, or creating reporting digests.

**n8n** is a fair-code, self-hostable workflow automation tool that lets you connect disparate services and complex business logic using an intuitive node-based visual interface combined with custom JavaScript/Python scripting.

### Why Host n8n Over Zapier or Make?
- **Self-Hosted & Cost-Free Execution:** Run millions of tasks on your own VPS with no per-action pricing limits.
- **Direct Database & Internal Network Access:** Safely connect to private MongoDB, PostgreSQL, and internal Redis instances inside your Docker network.
- **Custom Code Nodes:** Write arbitrary Node.js scripts directly within workflow steps.
- **Native AI & LLM Integrations:** Easily chain OpenAI, Anthropic, or Ollama models with vector stores like Pinecone or Qdrant.

### Real-World Use Case: Automated Customer Support & AI Triage
Here's how a production n8n automation pipeline operates in our stack:

1. **Webhook Node:** Listens for \`POST /api/support-ticket\` emitted by our Next.js/Nest.js frontend application.
2. **Data Transformation (Code Node):** Sanitizes and formats ticket parameters using JavaScript.
3. **OpenAI Agent Node:** Analyzes ticket urgency, categorizes issue type, and generates a recommended reply.
4. **Conditional IF Node:**
   - If priority is **Urgent**: Triggers a notification in the on-call Discord/Telegram channel and sends an SMS via Twilio.
   - If priority is **Normal**: Creates an issue in Jira/GitHub and stores ticket metadata in PostgreSQL.
5. **Customer Confirmation:** Dispatches a branded email via SendGrid with a unique ticket tracking URL.

\`\`\`javascript
// Custom JavaScript function inside an n8n Code Node
for (const item of $input.all()) {
  const { subject, body, customerEmail } = item.json;
  
  // Calculate priority score based on keywords
  const isUrgent = /(urgent|crash|broken|down|refund)/i.test(subject + " " + body);
  
  item.json.priority = isUrgent ? "HIGH" : "NORMAL";
  item.json.processedAt = new Date().toISOString();
  item.json.sanitizedEmail = customerEmail.trim().toLowerCase();
}

return $input.all();
\`\`\`

### Integrating n8n with Nest.js / Next.js
Triggering an n8n workflow from your backend is as simple as firing an authenticated HTTP request:

\`\`\`typescript
import axios from 'axios';

export async function triggerN8nWorkflow(payload: Record<string, any>) {
  try {
    await axios.post(process.env.N8N_WEBHOOK_URL, payload, {
      headers: {
        'X-N8N-API-KEY': process.env.N8N_SECRET_KEY,
      },
      timeout: 5000,
    });
  } catch (error) {
    console.error('Failed to trigger n8n automation:', error.message);
  }
}
\`\`\`

### Conclusion
Embracing tools like n8n frees software engineers from writing mundane glue code, enabling you to focus on core product architecture, performance optimization, and superior user experiences.
    `
  },
  {
    id: 5,
    slug: "high-concurrency-websockets-socketio-nestjs",
    title: "Building High-Concurrency Real-Time Systems with WebSockets, Socket.io & Redis",
    excerpt: "Architecting bidirectional, low-latency communication systems for chat, live status updates, and collaborative workspaces using Nest.js Gateways, Socket.io, and Redis Pub/Sub.",
    category: "Real-Time & WebSockets",
    tags: ["WebSockets", "Socket.io", "Nest.js", "Redis", "Full Stack", "System Design"],
    date: "Jul 15, 2024",
    readTime: "7 min read",
    author: {
      name: "Imtiaz Hasan",
      role: "Full Stack Developer",
      avatar: "/images/hero_photo.webp"
    },
    gradient: "from-purple-600 to-indigo-700",
    coverImage: "/images/blogs/websockets-redis.jpg",
    thumbnail: "/images/blogs/websockets-redis.jpg",
    content: `
HTTP is request-response driven; the client asks and the server answers. But when building real-time dashboards, chat systems, gaming, or multi-cursor document editing, the server must push data to clients instantly without wasteful polling.

**WebSockets** provide a persistent, full-duplex TCP connection over a single socket, reducing HTTP overhead to almost zero after the initial handshake.

### Building a Gateway with Nest.js & Socket.io
Nest.js simplifies WebSocket server management using the \`@WebSocketGateway()\` decorator:

\`\`\`typescript
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/chat',
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(\`Client connected: \${client.id}\`);
  }

  handleDisconnect(client: Socket) {
    console.log(\`Client disconnected: \${client.id}\`);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: string; message: string; sender: string },
  ) {
    // Broadcast message to everyone in the room
    this.server.to(data.roomId).emit('newMessage', {
      sender: data.sender,
      message: data.message,
      timestamp: new Date(),
    });
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() roomId: string,
  ) {
    client.join(roomId);
    client.emit('joined', \`Successfully joined room: \${roomId}\`);
  }
}
\`\`\`

### Scaling Across Multiple Servers with Redis Pub/Sub
When scaling beyond a single server instance, clients connected to Server A cannot receive messages broadcast from Server B.

To solve this, we attach the **Socket.io Redis Streams / Pub/Sub Adapter**:

\`\`\`typescript
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(): Promise<void> {
    const pubClient = createClient({ url: 'redis://localhost:6379' });
    const subClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect()]);
    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.adapterConstructor);
    return server;
  }
}
\`\`\`

With Redis Pub/Sub, any message emitted on any instance is published to the Redis channel, instantly notifying all other application instances to broadcast to their local connected clients!

### Key Takeaways
- Always authenticate WebSocket handshakes using JWTs inside \`canActivate\` guards.
- Implement heartbeat pings and auto-reconnection logic on the client.
- Use Redis adapters to ensure horizontal scalability across multiple VPS containers behind Nginx load balancers.
    `
  }
];

export const blogCategories = [
  "All",
  "WebRTC & Real-Time",
  "Backend & Nest.js",
  "DevOps & Cloud",
  "Automation & n8n",
  "Real-Time & WebSockets",
];
