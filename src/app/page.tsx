import { ProfileSection } from "@/components/profile-section";
import { ShowcaseGrid } from "@/components/showcase-grid";

export default function Home() {
	return (
		<main className="text-foreground relative mx-auto min-h-screen w-full max-w-[1400px] p-8 md:p-16">
			<div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
				<ProfileSection />
				<ShowcaseGrid />
			</div>
		</main>
	);
}
