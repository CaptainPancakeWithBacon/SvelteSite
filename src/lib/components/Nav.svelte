<script lang="ts">
	let scrolled = $state(false);

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// NAV ITEMS - Add new sections here (must match section id in +page.svelte)
	const navItems = [
		{ label: 'About', href: '#about' },
		{ label: 'Education', href: '#education' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'glass border-b border-border py-3'
		: 'py-6'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6">
		<a href="/" class="text-xl font-bold tracking-tight transition-colors hover:text-accent">
			GB<span class="text-accent">.</span>
		</a>

		<ul class="flex items-center gap-1">
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class="rounded-full px-4 py-2 text-sm text-text-muted transition-all hover:bg-bg-card hover:text-text"
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
