<script>
	import Logo from '../assets/colorfa11y-logo.svg'

	export let segment
</script>

<style>
	nav {
		height: 50px;
		background: var(--header-background);
		margin-bottom: 1.45rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		margin: 0 auto;
		max-width: 980px;
		padding: 0 8px 0 12px;
	}

	h1 {
		font-size: 36px;
		font-weight: 400;
		line-height: 1rem;
		margin: auto 0;
	}

	span.alt {
		border: 0px;
		clip: rect(0px, 0px, 0px, 0px);
		height: 1px;
		width: 1px;
		margin: -1px;
		padding: 0px;
		overflow: hidden;
		position: absolute;
	}

	[aria-current] {
		background: var(--active-nav-link);
	}

	.navlinks a {
		color: var(--header-text);
		text-decoration: none;
		font-size: 20px;
		padding: 4px 16px;
		border-radius: 1rem;
	}

	a + a {
		margin-left: 8px;
	}

	@media only screen and (min-width: 480px) {
		.navlinks a {
			font-size: 24px;
			padding-left: 20px;
			padding-right: 20px;
		}

		a + a {
			margin-left: 24px;
		}
	}

	@media only screen and (min-width: 768px) {
		a + a {
			margin-left: 48px;
		}
	}
</style>

<nav>
	<header>
		<h1>
			<a href=".">
				<Logo height="40px" width="123px" aria-hidden="true" />
				<span class="alt">Colorfa11y home</span></a>
		</h1>
		<div class="navlinks">
			<a
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about"
			>About</a>
			<a
				aria-current={segment === 'contribute' ? 'page' : undefined}
				href="contribute"
			>Contribute</a>
		</div>
	</header>
</nav>
