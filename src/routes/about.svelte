<script lang="ts">
	import Section from '../components/Section.svelte'
	import SEO from '../components/SEO.svelte'
</script>

<SEO title="About" />

<Section header="About Colorfa11y">
	<h3>Why did I build this?</h3>

	<p>
		I wanted a tool that enabled me to easily translate between color spaces and
		reactively calculate contrast ratio. There are a number of existing tools
		that perform the individual tasks very well in one way or another, but I
		wanted to create something that worked well for my personal workflow.
	</p>

	<h3>How did I build this?</h3>

	<p>
		This site was build using Svelte and Sapper. Inspiration and some of the
		code for the color calculations was derived from <a
			href="https://css-tricks.com/converting-color-spaces-in-javascript/"
		>this article</a> on CSS-Tricks and the <a
			href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef"
		>
			WCAG documentation
		</a>. The entirety of the source code is available on <a
			href="https://github.com/davidexns/colorfa11y"
		>GitHub</a>.
	</p>

	<h3>Why on earth did I use Sapper for this?</h3>

	<p>
		Sapper (and Svelte, for that matter) was most definitely overkill. As was
		Gatsby in my previous version. In short, I needed an excuse to play around
		with Sveltte & Sapper in general, and this was a very simple way to dip my
		toe in those waters. I even considered building this with Svelte originally
		back in 2019, but opted for React/Gatsby for the sake of familiarity.
	</p>
</Section>

<Section header="Resources & Inspiration">
	<ul>
		<li>
			<a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">
				Web Content Accessibility Guidelines
			</a>
		</li>
		<li>
			<a href="https://css-tricks.com/converting-color-spaces-in-javascript/">
				Converting Color Spaces in JavaScript, by Jon Kantner on CSS-Tricks
			</a>
		</li>
		<li><a href="https://convertingcolors.com/">Converting Colors</a></li>
		<li>
			<a href="https://webaim.org/resources/contrastchecker/">
				WebAIM: Contrast Checker
			</a>
		</li>
		<li><a href="https://contrast-ratio.com/">Contrast Ratio</a></li>
	</ul>
</Section>
