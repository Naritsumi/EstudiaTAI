import type { IconType } from "react-icons";

export interface DeviceScreenshots {
	iphone: string[];
}

export interface Feature {
	title: string;
	description: string;
	icon: IconType;
}

export interface FAQ {
	question: string;
	answer: string;
}

export interface StoreLinks {
	fdroid: string;
	coffe: string;
	kofi: string;
	direct: string;
	ios: string

}

export interface SocialLink {
	url: string;
	icon: IconType | string;
	label: string;
}

export interface AppLogo {
	src: string;
}

export interface Review {
	author: string;
	rating: number;
	text: string;
	avatar?: string;
}

export interface AppData {
	title: string;
	description: string;
	screenshots: DeviceScreenshots;
	features: Feature[];
	faqs: FAQ[];
	storeLinks: StoreLinks;
	socialLinks: SocialLink[];
	logo: AppLogo;
	reviews: Review[];
}

export interface WithImages {
	images: DeviceScreenshots;
}

export interface WithItems<T> {
	items: T[];
}

export interface StoreButtonProps {
	store: "fdroid" | "coffe" | "kofi" | "direct";
	href: string;
	label: string;
	storeName: string;
}

export interface AppHeroProps {
	title: string;
	description: string;
	storeLinks: StoreLinks;
	logo: AppLogo;
}

export interface BreadcrumbsProps {
	items: {
		label: string;
		href?: string;
	}[];
}

export interface DeviceToggleProps {
	activeDevice: "iphone" | "ipad";
	onToggle: (device: "iphone" | "ipad") => void;
}

export interface GithubCornerProps {
	href: string;
}

export interface FeaturesProps extends WithItems<Feature> {}
export interface FAQProps extends WithItems<FAQ> {}
export interface ReviewsProps extends WithItems<Review> {}
export interface SocialLinksProps extends WithItems<SocialLink> {}

export type ScreenshotsProps = WithImages;
export type LightboxProps = WithImages;

export function areImagesEqual<T extends WithImages>(
	prevProps: T,
	nextProps: T,
): boolean {
	return (
		prevProps.images.iphone === nextProps.images.iphone &&
		prevProps.images.ipad === nextProps.images.ipad
	);
}
