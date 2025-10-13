import {
	RiGithubFill,
} from "react-icons/ri";
import type { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
	{
		url: "https://github.com/Naritsumi/EstudiaTAI-app",
		icon: RiGithubFill,
		label: "Github",
	},
	{
		url: "https://buymeacoffee.com/tech_racoon",
		icon: "./icons/coffee-logo.webp",
		label: "Buy me a coffe",
	},
	{
		url: "https://ko-fi.com/tech_racoon",
		icon: "./icons/kofi-logo.webp",
		label: "Ko-fi",
	},
];
