import type { IButton } from './Button.types';

export const buttonData: IButton = {
	buttonText: 'Click',
	buttonLink: '',
	linkOpenNewTab: true,
	colorScheme: 'primary'
};

export const buttonEmptyData: IButton = {
	buttonText: '',
	buttonLink: '',
	linkOpenNewTab: false,
	colorScheme: 'secondary'
};
