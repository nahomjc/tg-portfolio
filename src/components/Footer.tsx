import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link
            href="https://linkedin.com/in/tigist-fiseha"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href="https://instagram.com/tigistfiseha"
            className="text-gray-400 hover:text-white"
          >
            Instagram
          </Link>
          <Link
            href="https://facebook.com/tigistfiseha"
            className="text-gray-400 hover:text-white"
          >
            Facebook
          </Link>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Tigist Fiseha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
