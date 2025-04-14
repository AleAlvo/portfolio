import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
			<h1 className="text-4xl font-bold mb-8 neo-brutalism p-6 font-heading">
				Next.js Portfolio with Neobrutalism Style
			</h1>

			{/* Font Showcase Section */}
			<div className="w-full mb-12">
				<h2 className="text-2xl font-bold mb-6 neo-brutalism p-4 font-heading">
					Lexend Mega Font Showcase
				</h2>

				{/* Lexend Mega Examples */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Headings */}
					<div className="space-y-4">
						<Heading as="h3" size="2xl" className="mb-2">
							Lexend Mega for Headings
						</Heading>
						<Heading as="h4" size="xl">
							Large Heading Example
						</Heading>
						<Heading as="h5" size="lg">
							Medium Heading Example
						</Heading>
						<Heading as="h6" size="md">
							Small Heading Example
						</Heading>
					</div>

					{/* Text Examples */}
					<div>
						<h3 className="text-2xl font-bold mb-4 font-heading">Lexend Mega for Text</h3>
						<p className="text-lg font-heading mb-4">
							This is Lexend Mega at regular text size. It provides excellent readability
							with a unique character.
						</p>
						<p className="text-sm font-heading mb-4">
							This is Lexend Mega at a smaller size, still maintaining great readability
							while adding personality to your interface.
						</p>
						<div className="bg-junior-dark p-4 rounded-md neo-brutalism">
							<p className="font-heading text-xl text-white">
								Lexend Mega on colored background
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Button Variants Section - with Lexend Mega */}
			<div className="w-full">
				<h2 className="text-2xl font-bold mb-4 neo-brutalism p-4 font-heading">
					Button Variants
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<Button variant="default">Default (Primary) Button</Button>
					<Button variant="secondary">SECONDARY BUTTON</Button>
					<Button variant="tertiary">Tertiary Button</Button>
					<Button variant="destructive">DESTRUCTIVE BUTTON</Button>
					<Button variant="ghost">Ghost Button</Button>
					<Button variant="info">Info Button</Button>
					<Button variant="success">Success Button</Button>
				</div>
			</div>

			{/* Button Sizes Section */}
			<div className="w-full">
				<h2 className="text-2xl font-bold mb-4 neo-brutalism p-4 font-heading">
					Button Sizes
				</h2>
				<div className="flex flex-col gap-4">
					<Button size="sm">Small Button</Button>
					<Button size="default">Default Size Button</Button>
					<Button size="lg">Large Button</Button>
				</div>
			</div>

			{/* Skill Level Color Schemes */}
			<div className="w-full">
				<h2 className="text-2xl font-bold mb-6 neo-brutalism p-4 font-heading">
					Skill Level Color Schemes
				</h2>

				{/* Junior Level */}
				<div className="mb-8">
					<h3 className="text-xl font-bold mb-3 bg-junior p-2 rounded-md text-black font-heading">
						Junior Level
					</h3>
					<div className="grid grid-cols-3 gap-4">
						<div className="h-20 bg-junior rounded-md flex items-center justify-center text-black font-bold font-heading">
							Primary
						</div>
						<div className="h-20 bg-junior-dark rounded-md flex items-center justify-center text-white font-bold font-heading">
							Dark
						</div>
						<div className="h-20 bg-junior-darker rounded-md flex items-center justify-center text-white font-bold font-heading">
							Darker
						</div>
					</div>
				</div>

				{/* Mid Level */}
				<div className="mb-8">
					<h3 className="text-xl font-bold mb-3 bg-mid p-2 rounded-md text-black font-heading">
						Mid Level
					</h3>
					<div className="grid grid-cols-3 gap-4">
						<div className="h-20 bg-mid rounded-md flex items-center justify-center text-black font-bold font-heading">
							Primary
						</div>
						<div className="h-20 bg-mid-dark rounded-md flex items-center justify-center text-black font-bold font-heading">
							Dark
						</div>
						<div className="h-20 bg-mid-darker rounded-md flex items-center justify-center text-white font-bold font-heading">
							Darker
						</div>
					</div>
				</div>

				{/* Senior Level */}
				<div className="mb-8">
					<h3 className="text-xl font-bold mb-3 bg-senior p-2 rounded-md text-black font-heading">
						Senior Level
					</h3>
					<div className="grid grid-cols-3 gap-4">
						<div className="h-20 bg-senior rounded-md flex items-center justify-center text-black font-bold font-heading">
							Primary
						</div>
						<div className="h-20 bg-senior-dark rounded-md flex items-center justify-center text-white font-bold font-heading">
							Dark
						</div>
						<div className="h-20 bg-senior-darker rounded-md flex items-center justify-center text-white font-bold font-heading">
							Darker
						</div>
					</div>
				</div>
			</div>

			{/* System Colors */}
			<div className="w-full">
				<h2 className="text-2xl font-bold mb-6 neo-brutalism p-4 font-heading">
					System Colors
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					<div className="h-20 bg-success rounded-md flex items-center justify-center text-success-foreground font-bold font-heading">
						Success
					</div>
					<div className="h-20 bg-warning rounded-md flex items-center justify-center text-warning-foreground font-bold font-heading">
						Warning
					</div>
					<div className="h-20 bg-error rounded-md flex items-center justify-center text-error-foreground font-bold font-heading">
						Error
					</div>
					<div className="h-20 bg-info rounded-md flex items-center justify-center text-info-foreground font-bold font-heading">
						Info
					</div>
				</div>
			</div>
		</main>
	);
}
