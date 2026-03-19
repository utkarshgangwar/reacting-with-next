import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const routes = [
    { name: "Batching Demo", path: "/batching" },
    // { name: "useEffect Demo", path: "/use-effect" },
    // { name: "Forms", path: "/forms" },
    // { name: "Auth Example", path: "/auth" },
    // { name: "API Demo", path: "/api-demo" },
    // { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Little bit reacting with NEXT.JS
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Click on any route to navigate{" "}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="rounded-2xl border border-zinc-200 p-4 transition hover:shadow-md hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {route.name}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {route.path}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
