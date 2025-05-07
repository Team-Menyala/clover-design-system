import Link from "@/components/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center flex-col min-h-[100svh] p-8 gap-3 sm:p-20 sm:py-8">
            <h1 className="text-4xl font-bold">Page is missing.</h1>
            <p className="space-y-1">Wanna check <Link href="/"><code className="underline text-blue-800 hover:bg-gray-100 hover:text-blue-700 transition-colors">home page</code></Link> instead?</p>
        </div>
    )
}