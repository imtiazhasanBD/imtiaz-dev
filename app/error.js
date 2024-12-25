"use client"
import Link from "next/link";
import Image from "next/image";

const error = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <div className="max-w-sm">
        <Image
          src="/images/error.png"
          alt="Error"
          width={300}
          height={300}
        />
      </div>
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mt-6">
        {statusCode ? `Error ${statusCode}` : "An error occurred"}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6">
        {statusCode === 404
          ? "The page you're looking for doesn't exist."
          : "Something went wrong. Please try again later."}
      </p>
      <Link href="/">
        <span className="inline-block bg-customGreen hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer">
          Go Back Home
        </span>
      </Link>
    </div>
  );
};

error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default error;
