<script lang="ts">
	const skills = {
		languages: ['JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS', 'SQL'],
		frameworks: ['Svelte', 'SvelteKit', 'Laravel', 'Tailwind CSS'],
		tools: ['Git', 'Figma', 'Krita', 'Aseprite', 'Canva']
	};

	const stats = [
		{ label: 'CLASS', value: 'Software Engineer' },
		{ label: 'LEVEL', value: '2nd Year' },
		{ label: 'GUILD', value: 'HZ University of Applied Sciences' },
		{ label: 'BASE', value: 'Middelburg, NL' },
		{ label: 'STATUS', value: 'Open for Internships' }
	];

	const socials = [
		{
			name: 'GitHub',
			handle: '@CaptainPancakeWithBacon',
			url: 'https://github.com/CaptainPancakeWithBacon',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
			name: 'LinkedIn',
			handle: 'gijs-borghouts',
			url: 'https://www.linkedin.com/in/gijs-borghouts-95530b291/',
			icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
		},
		{
			name: 'Instagram',
			handle: '@Gijs_borghouts',
			url: 'https://instagram.com/Gijs_borghouts',
			icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
		}
	];
</script>

<!-- ══════════════════════════════════════
     HERO
══════════════════════════════════════ -->
<section class="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-12">

	<!-- Radial glow behind crystal -->
	<div class="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2">
		<div class="animate-glow-ring h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
		<div class="animate-glow-ring-delayed absolute inset-8 rounded-full bg-secondary/5 blur-2xl"></div>
	</div>

	<!-- Corner HUD decorations (full viewport) -->
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute top-24 left-6 h-8 w-8 border-t-2 border-l-2 border-accent/30"></div>
		<div class="absolute top-24 right-6 h-8 w-8 border-t-2 border-r-2 border-accent/30"></div>
		<div class="absolute bottom-8 left-6 h-8 w-8 border-b-2 border-l-2 border-accent/20"></div>
		<div class="absolute bottom-8 right-6 h-8 w-8 border-b-2 border-r-2 border-accent/20"></div>
		<!-- Horizontal scan line -->
		<div class="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan top-1/2"></div>
	</div>

	<div class="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-5">

		<!-- Left: text -->
		<div class="md:col-span-3">
			<p class="label-mono mb-4 text-accent">
				<span class="animate-blink">▮</span> SYSTEM ONLINE · PROFILE LOADED
			</p>
			<h1 class="mb-3 text-5xl font-bold leading-tight md:text-7xl">
				Gijs<br />Borghouts<span class="text-accent">.</span>
			</h1>
			<p class="label-mono mb-6 text-text-muted">
				SOFTWARE ENG · HZ UNIVERSITY · 2ND YEAR
			</p>
			<p class="mb-8 max-w-lg text-lg text-text-muted">
				I build things and break things to learn what holds them together.
				Open to anything — web, games, systems, and everything in between.
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="#projects"
					class="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 font-medium text-bg transition-all hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(110,231,183,0.3)]"
				>
					<span class="label-mono text-bg/70">›</span> View Quests
				</a>
				<a
					href="#contact"
					class="inline-flex items-center gap-2 rounded border border-border-bright px-6 py-3 font-medium text-text-muted transition-all hover:border-accent hover:text-text"
				>
					<span class="label-mono">›</span> Open Channel
				</a>
			</div>
		</div>

		<!-- Right: crystal gem SVG -->
		<div class="flex items-center justify-center md:col-span-2">
			<div class="animate-float-crystal relative">
				<!-- Outer glow rings -->
				<div class="animate-glow-ring absolute inset-0 rounded-full bg-accent/5 blur-xl scale-110"></div>

				<svg viewBox="0 0 200 280" class="h-64 w-48 md:h-80 w-60 drop-shadow-[0_0_24px_rgba(110,231,183,0.3)]" fill="none" xmlns="http://www.w3.org/2000/svg">
					<!-- Outer gem fill -->
					<polygon points="100,12 172,88 180,192 100,268 20,192 28,88"
						fill="rgba(110,231,183,0.04)" />

					<!-- Outer gem outline -->
					<polygon points="100,12 172,88 180,192 100,268 20,192 28,88"
						stroke="#6ee7b7" stroke-width="1.2" opacity="0.7"/>

					<!-- Upper girdle line -->
					<line x1="28" y1="88" x2="172" y2="88" stroke="#6ee7b7" stroke-width="0.8" opacity="0.5"/>
					<!-- Lower girdle line -->
					<line x1="20" y1="192" x2="180" y2="192" stroke="#6ee7b7" stroke-width="0.8" opacity="0.5"/>

					<!-- Facet lines from top -->
					<line x1="100" y1="12" x2="100" y2="88" stroke="#6ee7b7" stroke-width="1" opacity="0.6"/>
					<line x1="100" y1="12" x2="28" y2="88" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>
					<line x1="100" y1="12" x2="172" y2="88" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>

					<!-- Middle facets -->
					<line x1="100" y1="88" x2="20" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.35"/>
					<line x1="100" y1="88" x2="180" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.35"/>
					<line x1="100" y1="88" x2="100" y2="192" stroke="#6ee7b7" stroke-width="1" opacity="0.55"/>
					<line x1="28" y1="88" x2="100" y2="192" stroke="#6ee7b7" stroke-width="0.5" opacity="0.25"/>
					<line x1="172" y1="88" x2="100" y2="192" stroke="#6ee7b7" stroke-width="0.5" opacity="0.25"/>

					<!-- Facet lines to bottom -->
					<line x1="100" y1="268" x2="20" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>
					<line x1="100" y1="268" x2="180" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>
					<line x1="100" y1="268" x2="100" y2="192" stroke="#6ee7b7" stroke-width="1" opacity="0.6"/>

					<!-- Amber highlight facets (secondary colour) -->
					<line x1="100" y1="12" x2="172" y2="88" stroke="#f59e0b" stroke-width="0.8" opacity="0.3"/>
					<line x1="172" y1="88" x2="180" y2="192" stroke="#f59e0b" stroke-width="0.8" opacity="0.3"/>

					<!-- Inner glow fill -->
					<ellipse cx="100" cy="150" rx="38" ry="55"
						fill="rgba(110,231,183,0.06)"
						filter="url(#crystal-glow)"/>

					<!-- Specular highlights -->
					<circle cx="76" cy="115" r="3.5" fill="#6ee7b7" opacity="0.55"/>
					<circle cx="126" cy="100" r="2" fill="#f59e0b" opacity="0.9"/>
					<circle cx="88" cy="175" r="1.5" fill="#6ee7b7" opacity="0.4"/>

					<defs>
						<filter id="crystal-glow" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur stdDeviation="10" result="blur"/>
							<feMerge>
								<feMergeNode in="blur"/>
								<feMergeNode in="SourceGraphic"/>
							</feMerge>
						</filter>
					</defs>
				</svg>
			</div>
		</div>
	</div>

	<!-- Section slash -->
	<div class="pointer-events-none absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
		<svg viewBox="0 0 1440 48" preserveAspectRatio="none" class="absolute bottom-0 w-full h-full">
			<polygon points="0,48 1440,0 1440,48" fill="#0c1219"/>
		</svg>
	</div>
</section>

<!-- ══════════════════════════════════════
     ABOUT — CHARACTER PROFILE
══════════════════════════════════════ -->
<section id="about" class="bg-bg-surface px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ CHARACTER PROFILE ]</span>
			<div class="h-px flex-1 bg-border"></div>
		</div>

		<div class="grid gap-6 md:grid-cols-2">

			<!-- Bio -->
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span>
				<span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span>
				<span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-3 text-accent">// WHO I AM</p>
				<p class="text-text-muted">
					2nd year Software Engineering student at HZ University of Applied Sciences in Middelburg, Netherlands.
					I got into tech because I love the idea of creating something from nothing — turning ideas into working software.
				</p>
				<p class="mt-4 text-text-muted">
					When I'm not at my keyboard, you'll find me climbing, cooking, gardening, or deep in a D&D session.
					These keep me creative and help me approach problems from angles you wouldn't expect.
				</p>
			</div>

			<!-- Stat block -->
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span>
				<span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span>
				<span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-5 text-accent">// STAT BLOCK</p>
				<div class="space-y-3">
					{#each stats as stat}
						<div class="flex items-start gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
							<span class="label-mono w-16 shrink-0 text-text-muted">{stat.label}</span>
							<span class="text-sm text-text {stat.label === 'STATUS' ? 'text-accent font-medium' : ''}">
								{stat.value}
								{#if stat.label === 'STATUS'}
									<span class="relative ml-2 inline-flex h-2 w-2">
										<span class="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
										<span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
									</span>
								{/if}
							</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Approach -->
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span>
				<span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span>
				<span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-3 text-secondary">// APPROACH</p>
				<p class="text-text-muted">
					Open to trying anything. Whether it's web development, game dev, or something completely new —
					I believe the best way to learn is by diving in and building. Not afraid to step outside my comfort zone.
				</p>
			</div>

			<!-- Currently learning -->
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span>
				<span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span>
				<span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-4 text-secondary">// CURRENTLY DELVING INTO</p>
				<ul class="space-y-2 text-sm text-text-muted">
					<li class="flex items-center gap-2"><span class="text-accent">›</span> SvelteKit — built this very site</li>
					<li class="flex items-center gap-2"><span class="text-accent">›</span> Game Development — Mini-Waterways side project</li>
					<li class="flex items-center gap-2"><span class="text-accent">›</span> Cloud / Azure — CS2 stats tracker via GSI</li>
					<li class="flex items-center gap-2"><span class="text-accent">›</span> UI/UX Design — better user experiences</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Slash divider -->
	<div class="pointer-events-none absolute left-0 right-0 h-12 overflow-hidden" style="bottom: -12px; position: relative; margin-bottom: -1px;">
		<svg viewBox="0 0 1440 48" preserveAspectRatio="none" class="w-full h-12">
			<polygon points="0,0 1440,48 1440,0" fill="#080b10"/>
		</svg>
	</div>
</section>

<!-- ══════════════════════════════════════
     SKILLS — INVENTORY
══════════════════════════════════════ -->
<section id="skills" class="bg-bg px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ INVENTORY ]</span>
			<div class="h-px flex-1 bg-border"></div>
		</div>

		<div class="space-y-10">
			<!-- Languages -->
			<div>
				<div class="mb-4 flex items-center gap-3">
					<span class="label-mono text-text-muted">LANGUAGES</span>
					<span class="rounded px-2 py-0.5 text-xs font-mono" style="background:rgba(90,122,104,0.15); color:var(--color-text-muted)">COMMON</span>
				</div>
				<div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
					{#each skills.languages as skill}
						<div class="inv-slot common">
							<div class="h-8 w-8 rounded bg-bg-surface flex items-center justify-center">
								<span class="text-xs font-mono font-medium text-text-muted">{skill.slice(0,2).toUpperCase()}</span>
							</div>
							<span class="text-xs text-text-muted leading-tight">{skill}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Frameworks -->
			<div>
				<div class="mb-4 flex items-center gap-3">
					<span class="label-mono text-text-muted">FRAMEWORKS</span>
					<span class="rounded px-2 py-0.5 text-xs font-mono" style="background:rgba(110,231,183,0.1); color:var(--color-accent)">UNCOMMON</span>
				</div>
				<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
					{#each skills.frameworks as skill}
						<div class="inv-slot uncommon">
							<div class="h-8 w-8 rounded bg-bg-surface flex items-center justify-center">
								<span class="text-xs font-mono font-medium text-accent/60">{skill.slice(0,2).toUpperCase()}</span>
							</div>
							<span class="text-xs text-text-muted leading-tight">{skill}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Tools -->
			<div>
				<div class="mb-4 flex items-center gap-3">
					<span class="label-mono text-text-muted">TOOLS</span>
					<span class="rounded px-2 py-0.5 text-xs font-mono" style="background:rgba(245,158,11,0.1); color:var(--color-secondary)">RARE</span>
				</div>
				<div class="grid grid-cols-3 gap-3 sm:grid-cols-5">
					{#each skills.tools as skill}
						<div class="inv-slot rare">
							<div class="h-8 w-8 rounded bg-bg-surface flex items-center justify-center">
								<span class="text-xs font-mono font-medium text-secondary/60">{skill.slice(0,2).toUpperCase()}</span>
							</div>
							<span class="text-xs text-text-muted leading-tight">{skill}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ══════════════════════════════════════
     PROJECTS — QUEST LOG
══════════════════════════════════════ -->
<section id="projects" class="bg-bg-surface px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ QUEST LOG ]</span>
			<div class="h-px flex-1 bg-border"></div>
		</div>

		<div class="grid gap-6 md:grid-cols-3">

			<!-- Main quest: WAITT — spans 2 cols -->
			<div class="quest-card flex flex-col p-8 md:col-span-2">
				<div class="notch"></div>
				<div class="mb-4 flex items-center gap-2">
					<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(110,231,183,0.1); color:var(--color-accent)">MAIN QUEST</span>
					<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(245,158,11,0.08); color:var(--color-secondary)">WEB APP</span>
				</div>
				<h3 class="mb-2 text-xl font-bold">WAITT Conference</h3>
				<p class="label-mono mb-3 text-text-muted">We Are In IT Together</p>
				<p class="mb-6 flex-1 text-text-muted">
					Full-stack conference management platform for the annual WAITT conference.
					Handles company registration, participant management, and conference logistics.
					Playing a significant role in developing this project over the past year.
				</p>
				<div class="mb-5 flex flex-wrap gap-2">
					{#each ['Laravel', 'PHP', 'Tailwind', 'Docker'] as tag}
						<span class="rounded border border-border px-2.5 py-1 text-xs text-text-muted font-mono">{tag}</span>
					{/each}
				</div>
				<div class="flex flex-wrap gap-3">
					<a href="https://weareinittogether.nl" target="_blank" rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded bg-accent px-5 py-2 text-sm font-medium text-bg hover:bg-accent-hover transition-colors">
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
						</svg>
						Visit Site
					</a>
					<a href="https://github.com/HZ-HBO-ICT/it-conference" target="_blank" rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded border border-border px-5 py-2 text-sm font-medium text-text-muted hover:border-accent hover:text-accent transition-colors">
						GitHub
					</a>
				</div>
			</div>

			<!-- Side quests column -->
			<div class="flex flex-col gap-6">

				<!-- Mini-Waterways -->
				<div class="quest-card flex flex-col p-6">
					<div class="notch"></div>
					<div class="mb-3 flex items-center gap-2">
						<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(167,139,250,0.1); color:var(--color-rare)">SIDE QUEST</span>
						<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(245,158,11,0.08); color:var(--color-secondary)">GAME</span>
					</div>
					<h3 class="mb-1 text-lg font-bold">Mini-Waterways</h3>
					<p class="mb-3 flex-1 text-sm text-text-muted">
						Puzzle game inspired by Mini Motorways, but nautical. Build and manage waterways to connect shipyards and ports.
					</p>
					<div class="mb-4 flex flex-wrap gap-1.5">
						{#each ['TypeScript', 'Game Dev'] as tag}
							<span class="rounded border border-border px-2 py-0.5 text-xs text-text-muted font-mono">{tag}</span>
						{/each}
					</div>
					<a href="https://github.com/CaptainPancakeWithBacon/Mini-Waterways" target="_blank" rel="noopener noreferrer"
						class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors">
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
						View on GitHub →
					</a>
				</div>

				<!-- CS2Stats — in progress -->
				<div class="quest-card flex flex-col p-6 opacity-80">
					<div class="notch"></div>
					<div class="mb-3 flex items-center gap-2">
						<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(245,158,11,0.1); color:var(--color-secondary)">QUEST ACTIVE</span>
					</div>
					<h3 class="mb-1 text-lg font-bold">CS2Stats</h3>
					<p class="mb-3 flex-1 text-sm text-text-muted">
						CS2 K/D tracker via Game State Integration, piping live match data to Azure. In progress.
					</p>
					<div class="flex flex-wrap gap-1.5">
						{#each ['Azure', 'GSI', 'TypeScript'] as tag}
							<span class="rounded border border-border px-2 py-0.5 text-xs text-text-muted font-mono">{tag}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ══════════════════════════════════════
     CONTACT — OPEN CHANNEL
══════════════════════════════════════ -->
<section id="contact" class="bg-bg px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ OPEN CHANNEL ]</span>
			<div class="h-px flex-1 bg-border"></div>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span>
				<span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span>
				<span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-4 text-accent">// TRANSMISSION CHANNELS</p>
				<p class="mb-6 text-text-muted">
					Always open to discussing new opportunities, interesting projects, or just having a chat about tech —
					or D&D, or Dome Keeper. Reach out through any channel below.
				</p>
				<div class="space-y-3">
					{#each socials as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center gap-4 rounded border border-border p-3 transition-all hover:border-accent hover:bg-bg-card"
						>
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-bg-surface group-hover:bg-accent/10 transition-colors">
								<svg class="h-5 w-5 text-text-muted group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
									<path d={social.icon} />
								</svg>
							</div>
							<div>
								<p class="text-sm font-medium text-text group-hover:text-accent transition-colors">{social.name}</p>
								<p class="label-mono text-text-muted">{social.handle}</p>
							</div>
							<span class="ml-auto label-mono text-text-muted group-hover:text-accent transition-colors">›</span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Right side: big gem + message -->
			<div class="hud-card relative flex flex-col items-center justify-center overflow-hidden rounded-sm p-8 text-center">
				<span class="hud-corner hud-corner-tl"></span>
				<span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span>
				<span class="hud-corner hud-corner-br"></span>

				<!-- Ambient glow -->
				<div class="absolute inset-0 flex items-center justify-center opacity-20">
					<div class="h-48 w-48 rounded-full bg-accent blur-3xl"></div>
				</div>

				<div class="relative">
					<svg viewBox="0 0 120 160" class="mb-5 h-24 w-16 mx-auto drop-shadow-[0_0_16px_rgba(110,231,183,0.4)]" fill="none">
						<polygon points="60,6 106,52 110,116 60,154 10,116 14,52"
							fill="rgba(110,231,183,0.06)" stroke="#6ee7b7" stroke-width="1"/>
						<line x1="14" y1="52" x2="106" y2="52" stroke="#6ee7b7" stroke-width="0.7" opacity="0.5"/>
						<line x1="10" y1="116" x2="110" y2="116" stroke="#6ee7b7" stroke-width="0.7" opacity="0.5"/>
						<line x1="60" y1="6" x2="60" y2="52" stroke="#6ee7b7" stroke-width="0.9" opacity="0.6"/>
						<line x1="60" y1="52" x2="60" y2="116" stroke="#6ee7b7" stroke-width="0.9" opacity="0.6"/>
						<line x1="60" y1="116" x2="60" y2="154" stroke="#6ee7b7" stroke-width="0.9" opacity="0.6"/>
						<circle cx="45" cy="68" r="2.5" fill="#6ee7b7" opacity="0.6"/>
						<circle cx="76" cy="58" r="1.5" fill="#f59e0b" opacity="0.9"/>
					</svg>
					<p class="text-xl font-bold">Let's build something together.</p>
					<p class="mt-2 text-sm text-text-muted">Ready when you are.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ══════════════════════════════════════
     FOOTER
══════════════════════════════════════ -->
<footer class="border-t border-border bg-bg px-6 py-8">
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
		<p class="label-mono">
			© {new Date().getFullYear()} Gijs Borghouts · Built with SvelteKit
		</p>
		<div class="flex gap-4">
			{#each socials as social}
				<a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}
					class="text-text-muted transition-colors hover:text-accent">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path d={social.icon}/>
					</svg>
				</a>
			{/each}
		</div>
	</div>
</footer>
