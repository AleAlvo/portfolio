import Link from "next/link";
import ProjectsList from "./components/ProjectsList";

export const metadata = {
	title: "My Projects | Portfolio",
	description: "View my portfolio projects",
};

export default function ProjectsPage() {
	return (
		<main className="flex min-h-screen flex-col items-center p-8 md:p-24">
			<div className="w-full max-w-5xl">
				<div className="mb-8">
					<Link href="/" className="text-blue-500 hover:text-blue-700">
						← Back to Home
					</Link>
					<h1 className="text-4xl font-bold mt-4">My Projects</h1>
					<p className="text-xl mt-2 text-gray-600 dark:text-gray-400">
						A showcase of my development work
					</p>
				</div>

				{/* Client component that handles data fetching */}
				<ProjectsList />
			</div>
		</main>
	);
}
