import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faRedditAlien, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 sm:mt-20 lg:px-8 lg:mt-48">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest updates?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              If there's anything you'd like us to know, feel free to reach out to us on any of our socials. We're always looking to improve our platform and your feedback is appreciated. Let use know what you like, don't like, and would like to see in the future :)
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://x.com/home"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <FontAwesomeIcon icon={faXTwitter} size="xl" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.reddit.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Reddit </span>

               <FontAwesomeIcon icon={faRedditAlien} size="xl" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Discord </span>

                <FontAwesomeIcon icon={faDiscord} size="xl" />              
              </a>
           
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>

                <FontAwesomeIcon icon={faGithub} size="xl" /> 
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Marketing </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Graphic Design
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    App Development
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Web Development
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Our Team </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> FAQs </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Contact </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Live Chat </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Postmark 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

