import Image from "next/image";
import { ThemeSwitcher } from "./theme-switcher";
import { GithubIcon } from "lucide-react";

interface ProfileSectionProps {
	name: string;
	username?: string;
	title: string;
	bio: React.ReactNode;
	avatarUrl: string;
}

export function ProfileSection({
	name,
	username,
	title,
	bio,
	avatarUrl,
}: ProfileSectionProps) {
	return (
		<div className="mb-12 w-full xl:w-[50%] xl:sticky xl:top-16 xl:self-start xl:pr-8">
			<div className="border-border neo-brutalism relative h-36 w-36 overflow-hidden rounded-full border-2 xl:h-[184px] xl:w-[184px]">
				<Image
					className="h-full w-full object-cover"
					style={{ objectPosition: "center 35%" }}
					src={avatarUrl}
					alt={`${name} profile picture`}
					width={184}
					height={184}
					priority
				/>
			</div>

			<div className="mt-8">
				<h2 className="font-heading text-3xl font-black sm:text-[44px]">{name}</h2>
				{username && (
					<a
						href="https://github.com/AleAlvo"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center mt-1 gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
						<GithubIcon className="h-4 w-4" />
						<span className="font-heading text-sm">{username}</span>
					</a>
				)}
				<h3 className="font-heading text-xl font-bold mt-3">{title}</h3>
				<div className="font-heading mt-6 text-sm space-y-4 sm:text-base">
					{typeof bio === "string" ? <p>{bio}</p> : bio}
				</div>
			</div>

			<ThemeSwitcher />
		</div>
	);
}
