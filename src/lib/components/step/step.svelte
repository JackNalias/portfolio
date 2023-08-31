<script lang="ts">
	export let number: string;
	export let isLast: boolean = false;
</script>

{#if !isLast}
	<div class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
{/if}

<!-- Upcoming Step -->
<div class="group relative flex items-start">
	<span class="flex h-9 items-center" aria-hidden="true">
		<span
			class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 text-xl font-semibold"
		>
			{number}
		</span>
	</span>
	<span class="ml-4 flex min-w-0 flex-col">
		<slot />
	</span>
</div>
