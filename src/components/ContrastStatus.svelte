<script lang="ts">
	export let isPass: boolean
</script>

<style>
	span {
		width: 96px;
		text-align: center;
		padding: 8px 16px;
		border-radius: 24px;
		font-weight: 700;
		transition: color 150ms ease-in-out, background 150ms ease-in-out;
		will-change: color, background;
		background: var(--status-fail-background);
		color: var(--status-fail-foreground);
	}

	span.pass {
		background: var(--status-pass-background);
		color: var(--status-pass-foreground);
	}
</style>

<span
	class:pass={isPass}
	data-testid="contrast-item-status"
>{isPass ? 'PASS' : 'FAIL'}</span>
