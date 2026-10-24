import os
import subprocess
import sys

def generate_resume():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, ".."))
    
    output_pdf_public = os.path.join(project_root, "public", "Imtiaz-Hasan-CV-Resume.pdf")
    output_pdf_public_restored = os.path.join(project_root, "public", "Imtiaz_Hasan_Full_Stack_Developer_Resume_Projects_Restored.pdf")
    output_pdf_downloads = os.path.expanduser("~/Downloads/Imtiaz_Hasan_Full_Stack_Developer_Resume_Projects_Restored.pdf")
    temp_html = os.path.join(script_dir, "resume_template.html")

    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MD. IMTIAZ HASAN - Full Stack Developer Resume</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  @page {
    size: A4;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    overflow: hidden;
    padding: 28px 40px 18px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Header */
  .header {
    text-align: center;
    border-bottom: 2px solid #1e3a8a;
    padding-bottom: 10px;
  }

  .header h1 {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #1e3a8a;
    margin-bottom: 3px;
    line-height: 1.1;
  }

  .header .subtitle {
    font-size: 12.6px;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: #0f172a;
    margin-bottom: 5px;
  }

  .header .subtitle .sub-loc {
    font-weight: 600;
    color: #475569;
  }

  .header-contacts {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 10.6px;
    color: #475569;
  }

  .contact-line {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
  }

  .contact-line a {
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 500;
  }

  .contact-line a:hover {
    text-decoration: underline;
  }

  .pipe {
    color: #94a3b8;
  }

  /* Section Styles */
  .section {
    display: flex;
    flex-direction: column;
  }

  .section-title {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #1e3a8a;
    border-bottom: 1.5px solid #bfdbfe;
    padding-bottom: 3px;
    margin-bottom: 7px;
  }

  /* Summary */
  .summary-text {
    font-size: 10.6px;
    color: #334155;
    line-height: 1.55;
    text-align: justify;
  }

  /* Skills */
  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 10.4px;
    color: #334155;
    line-height: 1.48;
  }

  .skills-list strong {
    color: #0f172a;
  }

  /* Experience & Projects */
  .entry {
    margin-bottom: 8.5px;
  }

  .entry:last-child {
    margin-bottom: 0;
  }

  .entry-title {
    font-size: 11.8px;
    font-weight: 700;
    color: #0f172a;
  }

  .entry-meta {
    font-size: 10.2px;
    font-style: italic;
    color: #475569;
    margin-bottom: 3px;
  }

  .project-tech {
    font-size: 10.2px;
    font-style: italic;
    color: #64748b;
    margin-bottom: 3px;
  }

  .bullets {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .bullets li {
    font-size: 10.4px;
    color: #334155;
    line-height: 1.45;
    position: relative;
    padding-left: 13px;
  }

  .bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    top: -1px;
    color: #1e3a8a;
    font-size: 11px;
    font-weight: bold;
  }

  /* Education Box */
  .education-box {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 1px 0;
  }

  .edu-item {
    display: flex;
    flex-direction: column;
    gap: 1.5px;
  }

  .edu-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .edu-deg {
    font-size: 11.2px;
    font-weight: 700;
    color: #0f172a;
  }

  .edu-year {
    font-size: 10.4px;
    font-weight: 600;
    color: #334155;
  }

  .edu-inst {
    font-size: 10.2px;
    color: #475569;
  }

  /* Footer */
  .footer {
    text-align: right;
    font-size: 8.8px;
    color: #94a3b8;
    padding-top: 4px;
  }
</style>
</head>
<body>

  <!-- Header -->
  <header class="header">
    <h1>Md. Imtiaz Hasan</h1>
    <div class="subtitle">FULL STACK DEVELOPER <span class="pipe">|</span> <span class="sub-loc">Dhaka, Bangladesh</span></div>
    <div class="header-contacts">
      <div class="contact-line">
        <a href="mailto:imtiazbd.dev@gmail.com">imtiazbd.dev@gmail.com</a>
        <span class="pipe">|</span>
        <a href="tel:+8801782638383">+880 1782 638383</a>
        <span class="pipe">|</span>
        <a href="https://github.com/imtiazhasanBD" target="_blank">GitHub</a>
        <span class="pipe">|</span>
        <a href="https://linkedin.com/in/imtiazhasanbd" target="_blank">LinkedIn</a>
      </div>
    </div>
  </header>

  <!-- Professional Summary -->
  <section class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      Full Stack Developer with 3+ years of experience specializing in building modern web applications, scalable backend APIs, multi-tenant SaaS platforms, and real-time communication systems. Hands-on expertise with React, Next.js, Node.js, NestJS, PostgreSQL, Prisma ORM, and MongoDB. Proven track record with Docker containerization, Linux VPS deployment, Nginx, and PM2.
    </p>
  </section>

  <!-- Technical Skills -->
  <section class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-list">
      <div><strong>Frontend &amp; UI:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, shadcn/ui, Material UI, motion.dev</div>
      <div><strong>State &amp; Data Fetching:</strong> TanStack Query (React Query), Redux Toolkit, RTK Query, Zustand</div>
      <div><strong>Backend:</strong> Node.js, Express.js, NestJS, Apollo GraphQL, REST APIs, JWT, WebSockets</div>
      <div><strong>Databases &amp; ORM:</strong> PostgreSQL, MongoDB, Redis, Prisma ORM, Mongoose</div>
      <div><strong>Real-Time &amp; DevOps:</strong> Agora RTC, Socket.io, Docker, Linux, Nginx, PM2, VPS Deployment</div>
      <div><strong>Tools &amp; Integrations:</strong> Git, GitHub, AWS S3, Stripe, SSLCommerz, n8n, Meta APIs, Postman</div>
    </div>
  </section>

  <!-- Professional Experience -->
  <section class="section">
    <div class="section-title">Professional Experience</div>

    <div class="entry">
      <div class="entry-title">Full Stack Developer</div>
      <div class="entry-meta">Nexrox Digital | Dec 2025 – Present | Full-time</div>
      <ul class="bullets">
        <li>Engineer full-stack web applications and microservices using Next.js, NestJS, PostgreSQL, Prisma ORM, and WebSockets.</li>
        <li>Build real-time audio/video streaming features for ChatFeel and develop core multi-tenant modules for StallForest SaaS.</li>
        <li>Manage Linux VPS environments, Docker containerization, Nginx reverse proxy configuration, SSL, and automated CI/CD pipelines.</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-title">Frontend Developer</div>
      <div class="entry-meta">QuantumEdgeSoftware | Dec 2024 – Dec 2025 | Full-time</div>
      <ul class="bullets">
        <li>Develop high-performance, responsive web applications utilizing Next.js, React, TypeScript, and Tailwind CSS.</li>
        <li>Build reusable component libraries, interactive UI layouts, and integrate RESTful APIs with Axios and error handling.</li>
        <li>Work on application performance optimization, Core Web Vitals, cross-browser compatibility, and client-side state flow.</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-title">Freelance Frontend Designer</div>
      <div class="entry-meta">Freelance | 2023 – 2024 | Freelance</div>
      <ul class="bullets">
        <li>Designed and developed responsive, clean user interfaces and landing pages tailored to specific client project requirements.</li>
        <li>Created modern, user-friendly websites with flexible grid systems that adapt seamlessly across mobile, tablet, and desktop.</li>
        <li>Collaborated directly with clients to translate business goals into intuitive designs, ensuring fast load times and clean code.</li>
      </ul>
    </div>
  </section>

  <!-- Selected Projects -->
  <section class="section">
    <div class="section-title">Selected Projects</div>

    <div class="entry">
      <div class="entry-title">StallForest — Multi-Tenant SaaS eCommerce Platform</div>
      <div class="project-tech">Next.js 16 · React 19 · NestJS · Apollo GraphQL · Prisma ORM · PostgreSQL · Redis · AWS S3</div>
      <ul class="bullets">
        <li>Architected multi-tenant SaaS backend with dual Prisma schemas (platform &amp; tenant) and Apollo GraphQL APIs.</li>
        <li>Built merchant dashboard &amp; storefronts using Next.js 16, React 19, TanStack Query, and drag-and-drop store builder.</li>
        <li>Integrated Redis caching, real-time WebSocket order alerts, AWS S3 image storage, and automated PM2 deployments.</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-title">Meetalk — Real-Time Audio &amp; Video Streaming Platform</div>
      <div class="project-tech">NestJS · Agora RTC · Socket.io · Redis Adapter · Prisma ORM · PostgreSQL · AWS S3</div>
      <ul class="bullets">
        <li>Engineered real-time audio/video streaming backend with multi-seat management, speaker controls, and PK battles.</li>
        <li>Integrated Agora RTC token authentication, distributed Socket.io with Redis adapter, and live chat messaging.</li>
        <li>Built virtual gifting economy, coin transactions, wallet balances, and Firebase Cloud Messaging (FCM) alerts.</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-title">DentSoft — Multi-Tenant Dental Clinic Management SaaS</div>
      <div class="project-tech">Next.js · NestJS · PostgreSQL · Prisma ORM · WebSockets · WhatsApp · Meta APIs</div>
      <ul class="bullets">
        <li>Engineered a multi-tenant dental clinic SaaS platform with tenant data isolation, appointment booking, and clinical records.</li>
        <li>Integrated automated WhatsApp messaging for appointment confirmations, visit reminders, and invoice delivery via Baileys.</li>
        <li>Implemented Facebook Messenger webhooks for live patient communication and automated Google Business Profile review sync.</li>
      </ul>
    </div>
  </section>

  <!-- Education -->
  <section class="section">
    <div class="section-title">Education</div>
    <div class="education-box">
      <div class="edu-item">
        <div class="edu-header">
          <span class="edu-deg">BSc in Computer Science and Engineering</span>
          <span class="edu-year">2024–Present</span>
        </div>
        <div class="edu-inst">Bangladesh University</div>
      </div>
      <div class="edu-item">
        <div class="edu-header">
          <span class="edu-deg">Diploma in Electrical Engineering</span>
          <span class="edu-year">2014–2018</span>
        </div>
        <div class="edu-inst">Ahsanullah Institute of Technical and Vocational Education and Training (AITVET)</div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    Md. Imtiaz Hasan | Resume
  </footer>

</body>
</html>
"""

    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"Generated HTML template at {temp_html}")

    # Compile to public/Imtiaz-Hasan-CV-Resume.pdf
    print(f"Compiling PDF to {output_pdf_public}...")
    subprocess.run([
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        f"--print-to-pdf={output_pdf_public}",
        f"file://{temp_html}"
    ], check=True)

    # Compile to public/Imtiaz_Hasan_Full_Stack_Developer_Resume_Projects_Restored.pdf
    print(f"Compiling PDF to {output_pdf_public_restored}...")
    subprocess.run([
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        f"--print-to-pdf={output_pdf_public_restored}",
        f"file://{temp_html}"
    ], check=True)

    # Compile to Downloads/Imtiaz_Hasan_Full_Stack_Developer_Resume_Projects_Restored.pdf if directory exists
    downloads_dir = os.path.dirname(output_pdf_downloads)
    if os.path.exists(downloads_dir):
        print(f"Compiling PDF to {output_pdf_downloads}...")
        subprocess.run([
            "google-chrome",
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--no-pdf-header-footer",
            f"--print-to-pdf={output_pdf_downloads}",
            f"file://{temp_html}"
        ], check=True)

    print("Done! All PDFs generated successfully.")

if __name__ == "__main__":
    generate_resume()
