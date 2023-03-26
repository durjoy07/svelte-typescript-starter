import type { StoryObj } from '@storybook/svelte';
import { buttonData } from './Button.mock';

import ButtonComponent from './Button.svelte';

const meta = {
	title: 'Root/Button',
	component: ButtonComponent
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
	args: { buttonDetails: buttonData }
};
