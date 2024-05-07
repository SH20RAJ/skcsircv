import Link from "next/link";
import React from "react";

export default function Nav({props}) {
  return (
    <>
      <header
      {...props}
        className="bg-gray-100 dark:bg-gray-800 py-4 shadow-sm"
        data-id={1}
      >
        <div
          className="container mx-auto px-4 md:px-6 flex items-center justify-between"
          data-id={2}
        >
          <Link
            className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50"
            data-id={3}
            href="/"
            rel="ugc"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>

            <span data-id={5}>Portfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6" data-id={6}>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={7}
              href="/"
              rel="ugc"
            >
              Home
            </Link>
            
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={9}
              href="/research-details"
              rel="ugc"
            >
              Research Details
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={10}
              href="/publications"
              rel="ugc"
            >
              Publications
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={11}
              href="/conference-paper"
              rel="ugc"
            >
              Conference Paper
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={12}
              href="/books"
              rel="ugc"
            >
              Books/Book Chapter
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={13}
              href="/projects"
              rel="ugc"
            >
              Projects
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={14}
              href="/students"
              rel="ugc"
            >
              Students
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              data-id={15}
              href="/workshop"
              rel="ugc"
            >
              Workshop/Conference
            </Link>
          </nav>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"
            data-id={16}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              data-id={17}
            >
              <line x1={4} x2={20} y1={12} y2={12} />
              <line x1={4} x2={20} y1={6} y2={6} />
              <line x1={4} x2={20} y1={18} y2={18} />
            </svg>
            <span className="sr-only" data-id={18}>
              Toggle navigation
            </span>
          </button>
        </div>
      </header>
    </>
  );
}
