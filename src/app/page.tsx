import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
			<h1 className="text-4xl font-bold mb-8 neo-brutalism p-6">
				Next.js Portfolio with Neobrutalism Style
			</h1>

			<div className="grid grid-cols-2 gap-4">
				<Button variant="default">Default Button</Button>
				<Button variant="destructive">Destructive Button</Button>
				<Button variant="outline">Outline Button</Button>
				<Button variant="secondary">Secondary Button</Button>
				<Button variant="ghost">Ghost Button</Button>
				<Button variant="link">Link Button</Button>
			</div>

			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4 neo-brutalism p-4">Button Sizes</h2>
				<div className="flex flex-col gap-4">
					<Button size="sm">Small Button</Button>
					<Button size="default">Default Size Button</Button>
					<Button size="lg">Large Button</Button>
				</div>
			</div>
		</main>
	);
}
