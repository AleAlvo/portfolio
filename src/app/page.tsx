import { ProfileSection } from "@/components/profile-section";
import { ShowcaseGrid } from "@/components/showcase-grid";

export default function Home() {
	return (
		<main className="text-foreground relative mx-auto min-h-screen w-full max-w-[1400px] p-8 md:p-16">
			<div className="flex flex-col xl:flex-row">
				<ProfileSection
					name="Alexandre Álvaro"
					username="AleAlvo"
					title="Full-stack Developer / Front-end specialist"
					bio={
						<>
							<p>
								This website is not your typical portfolio. Instead of showcasing entire
								past projects, it&apos;s a playground of focused demos highlighting how I
								tackle core frontend challenges — from data fetching with React Query, to
								performance optimization, to UI filtering and state management techniques.
								Think of it as a peek into my developer toolbox.
							</p>
							<p>
								I&apos;m Alexandre Álvaro, a frontend-focused full stack developer with a
								background as rich and versatile as my skill set — architecture, aviation,
								and now software development. I&apos;ve worked on dashboards, asset
								tracking tools, and zone creators for factory systems, always with an eye
								on clean code, solid UX, and scalable architecture. I mostly work with
								React, TypeScript, Redux, Chakra UI, Node.js, and MongoDB, often within
								Agile teams.
							</p>
							<p>
								My focus? Becoming a master of the frontend craft — from elegant component
								design to advanced data handling. I&apos;m all about building reliable,
								user-friendly interfaces and constantly sharpening my edge as a dev.
							</p>
						</>
					}
					avatarUrl="/images/me.jpeg"
				/>

				<ShowcaseGrid />
			</div>
		</main>
	);
}
