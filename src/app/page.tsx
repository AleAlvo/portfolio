export default async function Home() {
	// Note: In Next.js 15, you can use server components to fetch data directly
	// This is a simplified example that would normally use React Query on the client

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					My Next.js Portfolio with Supabase
				</p>
			</div>

			<div className="relative flex flex-col place-items-center">
				<h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
				<p className="text-xl mb-4">
					This is a Next.js 15 project with Supabase integration
				</p>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
				<a
					href="/projects"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
					<h2 className="mb-3 text-2xl font-semibold">
						Projects{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							→
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						View my portfolio projects
					</p>
				</a>

				<a
					href="/about"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
					<h2 className="mb-3 text-2xl font-semibold">
						About{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							→
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Learn more about me and my skills
					</p>
				</a>

				<a
					href="/contact"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
					<h2 className="mb-3 text-2xl font-semibold">
						Contact{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							→
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">Get in touch with me</p>
				</a>
			</div>
		</main>
	);
}
