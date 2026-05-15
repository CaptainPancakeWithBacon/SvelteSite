<script lang="ts">
	let scrolled = $state(false);

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 60;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const navItems = [
		{ label: 'Profile', href: '#about' },
		{ label: 'Inventory', href: '#skills' },
		{ label: 'Quests', href: '#projects' },
		{ label: 'Channel', href: '#contact' }
	];
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'glass border-b border-border py-3'
		: 'py-5'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6">
		<!-- Logo with HUD brackets -->
		<a href="/" class="group flex items-center gap-2">
			<span class="label-mono text-accent opacity-60 transition-opacity group-hover:opacity-100">[</span>
			<span class="font-mono text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
				GB<span class="text-accent">.</span>
			</span>
			<span class="label-mono text-accent opacity-60 transition-opacity group-hover:opacity-100">]</span>
		</a>

		<!-- Nav items -->
		<ul class="flex items-center gap-1">
			{#each navItems as item, i}
				<li>
					<a
						href={item.href}
						class="group flex items-center gap-1.5 rounded px-3 py-2 transition-all hover:bg-bg-card"
					>
						<span class="label-mono opacity-40 group-hover:opacity-70">{String(i + 1).padStart(2, '0')}.</span>
						<span class="text-sm text-text-muted transition-colors group-hover:text-text">{item.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
