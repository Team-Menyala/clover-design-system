import { Button } from "@team-menyala/clover/src/button";
import Footer from "../components/footer";
import Link from "@/components/link";
import Loaded from "@/components/loading";

export default function Home() {
  return (
    <>
      <Loaded />
      <div className="flex items-center justify-center flex-col min-h-[100svh] p-8 gap-16 sm:p-20 sm:py-8">
        <main className="flex flex-col gap-12 items-center text-center max-w-screen-md">
          <div className="flex flex-col gap-3 items-center">
            <svg className="-mt-8 w-12 h-12 clover-spin" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 10C16 8.81331 16.3519 7.65328 17.0112 6.66658C17.6705 5.67989 18.6075 4.91085 19.7039 4.45673C20.8003 4.0026 22.0067 3.88378 23.1705 4.11529C24.3344 4.3468 25.4035 4.91825 26.2426 5.75736C27.0818 6.59648 27.6532 7.66557 27.8847 8.82946C28.1162 9.99335 27.9974 11.1997 27.5433 12.2961C27.0892 13.3925 26.3201 14.3295 25.3334 14.9888C24.3467 15.6481 23.1867 16 22 16M16 10C16 8.81331 15.6481 7.65328 14.9888 6.66658C14.3295 5.67989 13.3925 4.91085 12.2961 4.45673C11.1997 4.0026 9.99335 3.88378 8.82946 4.11529C7.66557 4.3468 6.59648 4.91825 5.75736 5.75736C4.91825 6.59648 4.3468 7.66557 4.11529 8.82946C3.88378 9.99335 4.0026 11.1997 4.45673 12.2961C4.91085 13.3925 5.67989 14.3295 6.66658 14.9888C7.65328 15.6481 8.81331 16 10 16M16 10V12M22 16C23.1867 16 24.3467 16.3519 25.3334 17.0112C26.3201 17.6705 27.0892 18.6075 27.5433 19.7039C27.9974 20.8003 28.1162 22.0067 27.8847 23.1705C27.6532 24.3344 27.0818 25.4035 26.2426 26.2426C25.4035 27.0818 24.3344 27.6532 23.1705 27.8847C22.0067 28.1162 20.8003 27.9974 19.7039 27.5433C18.6075 27.0892 17.6705 26.3201 17.0112 25.3334C16.3519 24.3467 16 23.1867 16 22M22 16H20M10 16C8.81331 16 7.65328 16.3519 6.66658 17.0112C5.67989 17.6705 4.91085 18.6075 4.45673 19.7039C4.0026 20.8003 3.88378 22.0067 4.11529 23.1705C4.3468 24.3344 4.91825 25.4035 5.75736 26.2426C6.59648 27.0818 7.66557 27.6532 8.82946 27.8847C9.99335 28.1162 11.1997 27.9974 12.2961 27.5433C13.3925 27.0892 14.3295 26.3201 14.9888 25.3334C15.6481 24.3467 16 23.1867 16 22M10 16H12M16 22V20" stroke="#2DCF8E" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="#2DCF8E" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <h1 className="text-4xl font-bold">Clover Design System</h1>
            <p className="space-y-1">
              Design system used by <code>@Team-Menyala</code><br />
              Built on <a href="https://github.com/facebook/react" target="_blank"><code className="underline text-blue-800 hover:bg-gray-100 hover:text-blue-700 transition-colors">react</code></a>, based on <a href="https://github.com/shadcn-ui/ui" target="_blank"><code className="underline text-blue-800 hover:bg-gray-100 hover:text-blue-700 transition-colors">@shadcn/ui</code></a>
              <br /><span className="text-sm">Note: Still WIP, might be missing some components.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/typography"><Button variant="default">Typography</Button></Link>
            <Link href="/colors"><Button variant="default">Colors</Button></Link>
            <Link href="/buttons"><Button variant="default">Buttons</Button></Link>
            <Button variant="default" disabled>Ideas</Button>
            <Button variant="default" disabled>Prototype</Button>
            <Button variant="default" disabled>Welcome</Button>
            <Button variant="default" disabled>Project</Button>
            <Button variant="default" disabled>Design</Button>
            <Button variant="default" disabled>Ideas</Button>
            <Button variant="default" disabled>Prototype</Button>
            <Button variant="default" disabled>Welcome</Button>
            <Button variant="default" disabled>Project</Button>
            <Button variant="default" disabled>Design</Button>
            <Button variant="default" disabled>Ideas</Button>
            <Button variant="default" disabled>Prototype</Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
