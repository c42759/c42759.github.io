"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const sections = [
  { id: 'home', href: '/', label: '', icon: true },
  { id: 'professional-path', href: '/professional-path', label: 'Professional Path', icon: false },
  { id: 'educational-path', href: '/educational-path', label: 'Educational Path', icon: false },
  { id: 'setup', href: '/setup', label: 'My Setup', icon: false },
  { id: 'blog', href: '/blog', label: 'Blog', icon: false },
  { id: 'gaming', href: '/gaming', label: 'Gamer Life', icon: false },
];

export default function StickyMenu() {
  const pathname = usePathname();

  return (
    <div className="sticky top-4 z-50 flex justify-center w-full px-4 mb-8 pointer-events-none transition-all duration-300">
      <nav className="pointer-events-auto bg-white/80 dark:bg-[#1a1c1e]/80 backdrop-blur-md border border-black/10 dark:border-cv-dark/50 shadow-lg rounded-full px-2 py-2 flex flex-wrap justify-center items-center gap-1 sm:gap-2">
        {sections.map((section) => {
          // If the pathname starts with the section's href, it is active
          // Note: for home ('/'), it should only be active if pathname is exactly '/'
          const isActive = section.href === '/'
            ? pathname === '/'
            : pathname.startsWith(section.href);

          return (
            <Link
              key={section.id}
              href={section.href}
              className={`
                px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center justify-center
                ${isActive
                  ? 'bg-cv-orange text-white'
                  : 'text-gray-600 dark:text-cv-light hover:bg-gray-100 dark:hover:bg-white/10'
                }
              `}
            >
              {section.icon ? (
                <svg className="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              ) : null}
              <span className={section.icon ? "hidden sm:block" : ""}>{section.label}</span>
            </Link>
          );
        })}
        <div className="w-px h-6 bg-gray-300 dark:bg-cv-dark mx-1"></div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
