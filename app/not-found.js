import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* Image Section */}
      <div className="max-w-sm mb-6">
        <Image
          src="/images/404-page.svg"
          alt="Not Found"
          width={300}
          height={300}
          priority
        />
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      {/* Home Button */}
      <Link href="/">
        <span className="inline-block bg-customGreen hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer">
          Go Back Home
        </span>
      </Link>
    </div>
  );
}
