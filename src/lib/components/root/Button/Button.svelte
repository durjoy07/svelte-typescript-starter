<script lang="ts">
	import type { IButton } from './Button.types';
	export let buttonDetails: IButton;
	let { buttonLink, buttonText, colorScheme, linkOpenNewTab } = buttonDetails || {};
</script>

<a
	data-testid="rootButton"
	href={buttonLink}
	target={linkOpenNewTab ? '_blank' : ''}
	class={`py-[12px] px-[24px] rounded-3xl text-center text-base font-primary ${
		colorScheme == 'secondary'
			? 'text-primary-dark bg-gray-light'
			: 'bg-primary-dark text-white-light'
	}`}>{buttonText}</a
>
