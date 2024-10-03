import React from 'react'
import { ArrowUpRight } from "@phosphor-icons/react"
import postmark from "../assets/wordmark.svg"

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/">
            <img src={postmark} width="48px" alt="logo" />            
          </a>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex justify-center items-center gap-8 text-sm">
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="/about"> About </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="/roadmap"> Roadmap </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="/changelog"> Changelog </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="/blog"> Blog </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-between">
            <div className="sm:flex sm:gap-4">
              <a
                className="flex rounded-lg bg-blue-600 px-2.5 py-2.5 gap-2 text-sm font-medium text-white shadow"
                href="/auth"
              >
                Get Started
                <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="block md:hidden px-2">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
