<script>
	import SvelteLogo from '$lib/images/svelte-logo.svg';
	import LemonLogo from '$lib/images/lemon.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<p class="text-3xl font-bold text-white">
		Welcome to <span class="text-[#FCD308]">Lemon Hive </span>SvelteKit Starter
	</p>
	<picture class="py-10">
		<source srcset={LemonLogo} type="image/png" />
		<img src={LemonLogo} alt="lemon hive" />
	</picture>
	<picture>
		<source srcset={SvelteLogo} type="image/svg" />
		<img src={SvelteLogo} alt="svelte logo" />
	</picture>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	:global(html) {
		background-color: #203346;
	}
</style>
