import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  const routes = [
    { name: "Batching Demo", path: "/batching" },
    { name: "useEffect Demo", path: "/use-effect" },
    { name: "useState", path: "/use-state" },
    { name: "useRef", path: "/use-ref" },
    { name: "API", path: "/api" },
    { name: "useMemo", path: "/use-memo" },
    { name: "useCallback", path: "/use-callback" },
    { name: "React.Memo", path: "/react-memo" },
    { name: "useLayoutEffect", path: "/use-layout-effect" },
    
  ];

  return (
    <>
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
          <div className="w-full mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
              {routes.map((route) => (
                <li
                  key={route.path}
                  className="text-black dark:text-white text-sm cursor-pointer"
                >
                  •{" "}
                  <Link href={route.path} className="hover:underline">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
