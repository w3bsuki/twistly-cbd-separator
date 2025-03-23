import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Twistly</h3>
            <p className="text-gray-400">Premium CBD products designed to enhance your wellbeing and improve your quality of life.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/health" className="text-gray-400 hover:text-white transition-colors">Health & Wellness</Link></li>
              <li><Link href="/sport" className="text-gray-400 hover:text-white transition-colors">Sport & Recovery</Link></li>
              <li><Link href="/beauty" className="text-gray-400 hover:text-white transition-colors">Beauty & Skincare</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: info@twistly.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Twistly CBD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 