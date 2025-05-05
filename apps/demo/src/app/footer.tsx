import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bottom-6 absolute flex items-center justify-center text-sm">
            &copy; {new Date().getFullYear()} by&nbsp;<a href="https://github.com/Team-Menyala" target="_blank" className="hover:bg-gray-200/70 px-2 py-1 rounded-xs font-normal transition-colors"><Image className="w-5 h-5 -mt-0.5 rounded-full brightness-125 inline-block mr-2 pointer-events-none" src="https://avatars.githubusercontent.com/u/202051192?s=32" alt="Icon" width={20} height={20} />Team Menyala</a>
        </footer>
    )
}