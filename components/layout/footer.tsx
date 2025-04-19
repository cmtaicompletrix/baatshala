import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; 2025 बात Shala. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-gray-600 hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-gray-600 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 