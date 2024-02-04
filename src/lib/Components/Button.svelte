<script lang="ts">
	export let buttonTxt: string;
</script>

<button
	class="bg-neutral-grey rounded-md text-neutral-white py-[7px] font-bold hover:bg-primary-green hover:text-neutral-off-black"
>
	{buttonTxt}
</button>

<style>
	button {
		width: 100%;
        min-width: 130px;
	}
</style>
