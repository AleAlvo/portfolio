import { ThemeSwitcher } from "./theme-switcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";

export function ProfileSection() {
	const name = "Alexandre Álvaro";
	const title = "full stack Developer // front end specialist";
	const avatarUrl = "/images/me.jpg";

	return (
		<div className="mb-12 w-full xl:w-[50%] xl:sticky xl:top-16 xl:self-start xl:pr-8">
			<div className="flex flex-col sm:flex-row items-start justify-between mb-8">
				<Avatar
					src={avatarUrl}
					alt={`${name} profile picture`}
					size={250}
					className="neo-brutalism"
				/>
				<div className="flex flex-row sm:flex-col gap-2 mt-4 sm:mt-0">
					<ThemeSwitcher />
					<IconButton
						href="https://github.com/AleAlvo"
						ariaLabel="GitHub profile"
						icon={<FontAwesomeIcon icon={faGithub} size="2x" />}
					/>
				</div>
			</div>

			<div className="mt-4">
				<h2 className="font-bold text-3xl sm:text-[44px]">{name}</h2>
				<h3 className="text-xl font-heading mt-2">{title}</h3>

				<div className="mt-6">
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="about-website" className="mb-3">
							<AccordionTrigger>
								This website is not your typical portfolio
							</AccordionTrigger>
							<AccordionContent>
								Instead of showcasing entire past projects, it&apos;s a playground of
								focused demos highlighting how I tackle core frontend challenges — from
								data fetching with React Query, to performance optimization, to UI
								filtering and state management techniques. Think of it as a peek into my
								developer toolbox.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="about-me" className="mb-3">
							<AccordionTrigger>
								I am a frontend-specialized full stack developer
							</AccordionTrigger>
							<AccordionContent>
								I&apos;m Alexandre Álvaro, a frontend-focused full stack developer with a
								background as rich and versatile as my skill set — architecture, aviation,
								and now software development. I&apos;ve worked on dashboards, asset
								tracking tools, and zone creators for factory systems, always with an eye
								on clean code, solid UX, and scalable architecture. I mostly work with
								React, TypeScript, Redux, Chakra UI, Node.js, and MongoDB, often within
								Agile teams.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="about-focus">
							<AccordionTrigger>My focus?</AccordionTrigger>
							<AccordionContent>
								Becoming a master of the frontend craft — from elegant component design to
								advanced data handling. I&apos;m all about building reliable,
								user-friendly interfaces and constantly sharpening my edge as a dev.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
