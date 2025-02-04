import { sitemap } from "../sitemap";

export function Footer() {
  return (
    <footer className="py-4 xl:container md:px-4 md:py-0">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={sitemap.links.personal}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            enkyuan
          </a>
          . Source code available on{" "}
          <a
            href={sitemap.links.repo}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
