// import GetStatus from "../components/get-status";
//
// export default function StatusPage() {
//   return (
//     <main className="min-h-screen p-8 max-w-4xl mx-auto">
//       <header className="text-center mb-12">
//         <h1 className="text-3xl font-bold mb-4">Status Page</h1>
//       </header>
//
//       <div className="space-y-8">
//         <section>
//           <h2 className="text-xl font-semibold mb-4">Server</h2>
//           <GetStatus />
//         </section>
//       </div>
//     </main>
//   );
// }

// TODO: fetch status of services from api
// TODO: map components, i.e., text, icon, etc. to respective status

import Link from "next/link";
import Image from "next/image";

import { Icon } from "@iconify/react";
import { Footer } from "@monorepo/ui/components/footer";
import postmark from "../../../public/postmark.svg";
import { Button } from "@monorepo/ui/components/button";

export default function StatusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 md:py-8 xl:py-12">
        <div className="container px-4 flex items-center gap-4 md:gap-6 lg:gap-10">
          <div className="flex items-center gap-4">
            <Link href="/" prefetch={true}>
              <Image
                src={postmark}
                width="40"
                height="40"
                alt="Logo"
                className="rounded-lg"
                style={{ aspectRatio: "40/40", objectFit: "cover" }}
              />
            </Link>
          </div>
          <nav className="ml-auto space-x-4 md:space-x-6">
            <Link
              href="#"
              className="font-medium text-sm tracking-wide hover:underline"
              prefetch={false}
            >
              <Button className="group rounded-full">
                Subscribe for updates
                <Icon
                  icon="solar:arrow-right-linear"
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5 w-20 h-auto"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-8 lg:py-4">
        <div className="container px-4">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Current Status</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Below you&#39;ll find a live update on that status of each of
                our services.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-8">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  Database
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    as of 2 minutes ago
                  </span>
                </h3>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-outline"
                    className="w-4 h-auto text-green-500"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    Operational
                  </span>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  Authentication
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    as of 2 minutes ago
                  </span>
                </h3>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-outline"
                    className="w-4 h-auto text-green-500"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    Operational
                  </span>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  API
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    as of 5 minutes ago
                  </span>
                </h3>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:danger-circle-outline"
                    className="w-4 h-auto text-yellow-500"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    Degraded Performance
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We are currently investigating issues with increased latency
                  for API requests. Users may experience slower response times
                  than usual.
                </p>
              </div>
              <div className="space-y-8">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  Client
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    as of 10 minutes ago
                  </span>
                </h3>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:close-circle-outline"
                    className="w-4 h-auto text-red-500"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    Partial Outage
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team is working to resolve the issue, and we will provide
                  updates as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
