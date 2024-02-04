<script lang="ts">
	import Button from '$lib/Components/Button.svelte';
</script>

<div class="w-full h-dvh flex justify-center items-center">
	<dev class="container flex flex-col gap-4 w-min h-min p-6 rounded-xl">
		<div class="flex flex-col items-center">
			<img class="rounded-full h-auto w-[6rem] " src="./images/avatar-jessica.jpeg" alt="" />
			<h3 class="text-center">Jessica Randall</h3>
			<p class="text-primary-green font-bold mb-4 text-center">London, United Kingdom</p>
			<p class="text-neutral-white text-center">"Front-end developer and avid reader."</p>
		</div>
		<Button buttonTxt="GitHub" />
		<Button buttonTxt="Frontend Mentor" />
		<Button buttonTxt="LinkedIn" />
		<Button buttonTxt="Twitter" />
		<Button buttonTxt="Instagram" />
	</dev>
</div>
<style>
	.container {
		background-color: var(--neutral-dark-grey);
		width: min(90vw, 300px);
	}
</style>
