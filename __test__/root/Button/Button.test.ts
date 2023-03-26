import '@testing-library/jest-dom';
import { expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from '../../../src/lib/components/root/Button/Button.svelte';
import { buttonData, buttonEmptyData } from '../../../src/lib/components/root/Button/Button.mock';
import type { IButton } from '$src/lib/components/root/Button/Button.types';

describe('Test the root button', () => {
	let data: IButton, emptyData: IButton;

	beforeEach(async () => {
		data = buttonData;
		emptyData = buttonEmptyData;
	});

	test('Test the button with props', () => {
		render(Button, { props: { buttonDetails: { ...data } } });
		const button = screen.getByTestId('rootButton');
		expect(button).toHaveTextContent('Click');
		expect(button).toHaveAttribute('target', '_blank');
		expect(button).toHaveAttribute('href', '');
	});

	test('Test the button without any props', () => {
		render(Button, { props: { buttonDetails: { ...emptyData } } });
		const button = screen.getByTestId('rootButton');
		expect(button).toHaveTextContent('');
		expect(button).toHaveAttribute('target', '');
		expect(button).toHaveAttribute('href', '');
	});

	test('Test the button with href link', () => {
		render(Button, {
			props: {
				buttonDetails: {
					...emptyData,
					buttonText: 'Google',
					buttonLink: 'https://www.google.com'
				}
			}
		});
		const button = screen.getByTestId('rootButton');
		expect(button).toHaveTextContent('Google');
		expect(button).toHaveAttribute('href', 'https://www.google.com');
	});
});
