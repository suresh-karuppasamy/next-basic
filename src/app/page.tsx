import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <header className="bg-gray-900 text-white p-4 fixed top-0 w-full z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Fixed Header</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="bg-gray-200 w-64 min-h-full p-4 shadow-md">
          <ul className="space-y-4">
            <li><a href="#" className="block p-2 hover:bg-gray-300 rounded">Dashboard</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-300 rounded">Profile</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-300 rounded">Settings</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-300 rounded">Help</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-left mt-6">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        Footer Content
      </footer>
    </div>
  );
}
