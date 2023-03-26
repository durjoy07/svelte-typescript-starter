export type colorSchemeType = 'primary' | 'secondary';

export interface IButton {
	buttonText: string;
	buttonLink: string;
	linkOpenNewTab?: boolean;
	colorScheme?: colorSchemeType;
}
