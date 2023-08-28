<script lang="ts">
	export let color: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink';
</script>

<span
	class="inline-flex items-center rounded-md bg-{color}-400/10 px-2 py-1 text-sm font-medium text-{color}-400 ring-1 ring-inset ring-{color}-400/20"
>
	<slot />
</span>
