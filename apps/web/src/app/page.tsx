import GetTest from "./components/get-test";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Monorepo Showcase</h1>
        <p className="text-muted-foreground">
          This demo shows the integration between different packages in our
          monorepo: UI components, API connectivity, and shared types.
        </p>
      </header>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">API Integration Demo</h2>
          <GetTest />
        </section>
      </div>
    </main>
  );
}
