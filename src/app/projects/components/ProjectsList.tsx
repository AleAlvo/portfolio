"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";

// Type definition for Project
type Project = {
	id: string;
	title: string;
	description: string;
	image_url: string | null;
	live_url: string | null;
	source_url: string | null;
	technologies: string[];
	featured: boolean;
	created_at: string;
};

// Function to fetch projects from Supabase
async function fetchProjects() {
	const { data, error } = await supabase
		.from("projects")
		.select("*")
		.order("created_at", { ascending: false });

	if (error) {
		throw new Error(`Error fetching projects: ${error.message}`);
	}

	return data as Project[];
}

export default function ProjectsList() {
	const [filter, setFilter] = useState<"all" | "featured">("all");

	// Using React Query to fetch and cache data
	const {
		data: projects,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["projects"],
		queryFn: fetchProjects,
	});

	// Filter projects based on the current filter state
	const filteredProjects = projects
		? filter === "featured"
			? projects.filter((project) => project.featured)
			: projects
		: [];

	if (isLoading) {
		return (
			<div className="w-full py-20 text-center">
				<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
				<p className="mt-4">Loading projects...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full py-20 text-center text-red-500">
				<p>Error loading projects. Please try again later.</p>
				<p className="text-sm mt-2">
					{error instanceof Error ? error.message : "Unknown error"}
				</p>
			</div>
		);
	}

	return (
		<div>
			<div className="flex justify-between items-center mb-8">
				<div className="space-x-2">
					<button
						onClick={() => setFilter("all")}
						className={`px-4 py-2 rounded-md ${
							filter === "all"
								? "bg-blue-500 text-white"
								: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
						}`}>
						All Projects
					</button>
					<button
						onClick={() => setFilter("featured")}
						className={`px-4 py-2 rounded-md ${
							filter === "featured"
								? "bg-blue-500 text-white"
								: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
						}`}>
						Featured
					</button>
				</div>

				<p className="text-sm text-gray-500">
					Showing {filteredProjects.length} projects
				</p>
			</div>

			{filteredProjects.length === 0 ? (
				<div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-lg">
					<p>No projects found.</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							{project.image_url ? (
								<div className="h-48 bg-gray-200 dark:bg-gray-800">
									<img
										src={project.image_url}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
								</div>
							) : (
								<div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
									<span className="text-gray-500 dark:text-gray-400">No image</span>
								</div>
							)}

							<div className="p-4">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold">{project.title}</h3>
									{project.featured && (
										<span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
											Featured
										</span>
									)}
								</div>

								<p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-2 mt-4">
									{project.live_url && (
										<a
											href={project.live_url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:text-blue-700 text-sm font-medium">
											Live Demo
										</a>
									)}

									{project.source_url && (
										<a
											href={project.source_url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:text-blue-700 text-sm font-medium">
											Source Code
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
