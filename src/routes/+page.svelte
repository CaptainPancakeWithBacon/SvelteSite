<script lang="ts">
	const skills = {
		languages: ['JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS', 'SQL', 'Node.js'],
		frameworks: ['Svelte', 'SvelteKit', 'Laravel', 'Tailwind CSS'],
		tools: ['Git', 'Azure', 'Docker', 'Figma', 'Krita', 'Aseprite']
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
     HERO  (surface — #0a0e16)
══════════════════════════════════════ -->
<section class="relative flex min-h-screen items-center px-6 pt-24 pb-8 overflow-hidden" style="background:#0a0e16">

	<!-- Cave shafts -->
	<div class="cave-shaft-l" style="top:22%; width:180px; height:52px; opacity:0.7;"></div>
	<div class="shaft-support-l" style="top:22%; width:180px; height:52px;"></div>
	<div class="shaft-lantern" style="left:80px; top:calc(22% + 8px);"></div>
	<div class="cave-shaft-l" style="top:48%; width:140px; height:40px; opacity:0.5;"></div>
	<div class="shaft-support-l" style="top:48%; width:140px; height:40px;"></div>
	<div class="cave-shaft-l" style="top:70%; width:200px; height:48px; opacity:0.6;"></div>
	<div class="shaft-support-l" style="top:70%; width:200px; height:48px;"></div>
	<div class="shaft-lantern" style="left:90px; top:calc(70% + 8px);"></div>
	<div class="cave-shaft-r" style="top:32%; width:160px; height:44px; opacity:0.65;"></div>
	<div class="shaft-support-r" style="top:32%; width:160px; height:44px;"></div>
	<div class="cave-shaft-r" style="top:58%; width:210px; height:56px; opacity:0.55;"></div>
	<div class="shaft-support-r" style="top:58%; width:210px; height:56px;"></div>
	<div class="shaft-lantern" style="right:100px; top:calc(58% + 8px);"></div>

	<!-- Radial glow behind crystal -->
	<div class="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2">
		<div class="animate-glow-ring h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
		<div class="animate-glow-ring-delayed absolute inset-8 rounded-full bg-secondary/5 blur-2xl"></div>
	</div>

	<!-- Corner HUD decorations -->
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute top-24 left-6 h-8 w-8 border-t-2 border-l-2 border-accent/30"></div>
		<div class="absolute top-24 right-6 h-8 w-8 border-t-2 border-r-2 border-accent/30"></div>
		<div class="absolute bottom-32 left-6 h-8 w-8 border-b-2 border-l-2 border-accent/20"></div>
		<div class="absolute bottom-32 right-6 h-8 w-8 border-b-2 border-r-2 border-accent/20"></div>
		<div class="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan top-1/2"></div>
	</div>

	<!-- Ore pockets — walls + mid-section -->
	<div class="animate-ore pointer-events-none absolute" style="left:0; top:28%">
		<svg viewBox="0 0 60 70" class="w-16" fill="none">
			<polygon points="22,30 30,14 38,30 30,44" fill="#6ee7b7" style="filter:drop-shadow(0 0 8px #6ee7b7)"/>
			<polygon points="36,20 43,10 50,20 43,32" fill="#6ee7b7" opacity="0.7" style="filter:drop-shadow(0 0 5px #6ee7b7)"/>
			<polygon points="10,42 17,30 24,42 17,54" fill="#6ee7b7" opacity="0.5" style="filter:drop-shadow(0 0 4px #6ee7b7)"/>
		</svg>
	</div>
	<div class="animate-ore-delay pointer-events-none absolute" style="right:0; top:45%">
		<svg viewBox="0 0 55 60" class="w-14" fill="none">
			<polygon points="18,26 26,12 34,26 26,38" fill="#f59e0b" style="filter:drop-shadow(0 0 8px #f59e0b)"/>
			<polygon points="32,16 39,6 46,16 39,28" fill="#f59e0b" opacity="0.65" style="filter:drop-shadow(0 0 5px #f59e0b)"/>
		</svg>
	</div>
	<div class="animate-ore-slow pointer-events-none absolute" style="left:30%; top:22%">
		<svg viewBox="0 0 44 50" class="w-10" fill="none">
			<polygon points="14,20 20,8 26,20 20,30" fill="#6ee7b7" style="filter:drop-shadow(0 0 7px #6ee7b7)"/>
			<polygon points="24,12 29,4 34,12 29,21" fill="#6ee7b7" opacity="0.55" style="filter:drop-shadow(0 0 4px #6ee7b7)"/>
		</svg>
	</div>
	<div class="animate-ore-purple pointer-events-none absolute" style="left:62%; top:55%">
		<svg viewBox="0 0 48 55" class="w-11" fill="none">
			<polygon points="14,22 21,8 28,22 21,34" fill="#a78bfa" style="filter:drop-shadow(0 0 9px #a78bfa)"/>
			<polygon points="26,12 32,4 38,12 32,22" fill="#a78bfa" opacity="0.55" style="filter:drop-shadow(0 0 5px #a78bfa)"/>
		</svg>
	</div>
	<div class="animate-ore-delay2 pointer-events-none absolute" style="left:45%; bottom:18%">
		<svg viewBox="0 0 40 46" class="w-9" fill="none">
			<polygon points="12,18 18,6 24,18 18,28" fill="#f59e0b" style="filter:drop-shadow(0 0 7px #f59e0b)"/>
			<polygon points="22,10 27,3 32,10 27,19" fill="#a78bfa" opacity="0.7" style="filter:drop-shadow(0 0 5px #a78bfa)"/>
		</svg>
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
				I build things and break things to figure out how they work.
				Web, games, cloud. If it's interesting, I'm in.
			</p>
			<div class="flex flex-wrap gap-4">
				<a href="#projects" class="btn-ore inline-flex items-center gap-2 rounded bg-accent px-6 py-3 font-medium text-bg transition-all hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(110,231,183,0.5)]">
					<span class="label-mono text-bg/70">›</span> View Quests
				</a>
				<a href="#contact" class="inline-flex items-center gap-2 rounded border border-border-bright px-6 py-3 font-medium text-text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_14px_rgba(110,231,183,0.15)]">
					<span class="label-mono">›</span> Open Channel
				</a>
			</div>
		</div>

		<!-- Right: crystal gem -->
		<div class="flex items-center justify-center md:col-span-2">
			<div class="animate-float-crystal relative">
				<div class="animate-glow-ring absolute inset-0 rounded-full bg-accent/5 blur-xl scale-110"></div>
				<svg viewBox="0 0 200 280" class="h-64 w-48 md:h-80 md:w-60 drop-shadow-[0_0_24px_rgba(110,231,183,0.3)]" fill="none">
					<polygon points="100,12 172,88 180,192 100,268 20,192 28,88" fill="rgba(110,231,183,0.04)"/>
					<polygon points="100,12 172,88 180,192 100,268 20,192 28,88" stroke="#6ee7b7" stroke-width="1.2" opacity="0.7"/>
					<line x1="28" y1="88" x2="172" y2="88" stroke="#6ee7b7" stroke-width="0.8" opacity="0.5"/>
					<line x1="20" y1="192" x2="180" y2="192" stroke="#6ee7b7" stroke-width="0.8" opacity="0.5"/>
					<line x1="100" y1="12" x2="100" y2="88" stroke="#6ee7b7" stroke-width="1" opacity="0.6"/>
					<line x1="100" y1="12" x2="28" y2="88" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>
					<line x1="100" y1="12" x2="172" y2="88" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>
					<line x1="100" y1="88" x2="20" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.35"/>
					<line x1="100" y1="88" x2="180" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.35"/>
					<line x1="100" y1="88" x2="100" y2="192" stroke="#6ee7b7" stroke-width="1" opacity="0.55"/>
					<line x1="28" y1="88" x2="100" y2="192" stroke="#6ee7b7" stroke-width="0.5" opacity="0.25"/>
					<line x1="172" y1="88" x2="100" y2="192" stroke="#6ee7b7" stroke-width="0.5" opacity="0.25"/>
					<line x1="100" y1="268" x2="20" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>
					<line x1="100" y1="268" x2="180" y2="192" stroke="#6ee7b7" stroke-width="0.6" opacity="0.4"/>
					<line x1="100" y1="268" x2="100" y2="192" stroke="#6ee7b7" stroke-width="1" opacity="0.6"/>
					<line x1="100" y1="12" x2="172" y2="88" stroke="#f59e0b" stroke-width="0.8" opacity="0.3"/>
					<line x1="172" y1="88" x2="180" y2="192" stroke="#f59e0b" stroke-width="0.8" opacity="0.3"/>
					<ellipse cx="100" cy="150" rx="38" ry="55" fill="rgba(110,231,183,0.06)" filter="url(#crystal-glow)"/>
					<circle cx="76" cy="115" r="3.5" fill="#6ee7b7" opacity="0.55"/>
					<circle cx="126" cy="100" r="2" fill="#f59e0b" opacity="0.9"/>
					<circle cx="88" cy="175" r="1.5" fill="#6ee7b7" opacity="0.4"/>
					<defs>
						<filter id="crystal-glow" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur stdDeviation="10" result="blur"/>
							<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
						</filter>
					</defs>
				</svg>
			</div>
		</div>
	</div>
</section>

<!-- ══ CAVE ROCK: hero → about ══ -->
<div style="background:#0a0e16; line-height:0; display:block;">
	<svg viewBox="0 0 1440 130" preserveAspectRatio="none" style="width:100%; height:130px; display:block;">
		<path d="M0,130 L0,82 L34,56 L58,8 L86,70 L118,22 L156,84 L190,14 L224,68 L256,88 L288,10 L322,62 L350,6 L384,76 L418,18 L456,82 L490,4 L524,72 L558,86 L590,12 L626,64 L660,8 L698,78 L730,28 L762,88 L796,6 L834,70 L868,18 L900,84 L934,10 L968,66 L1002,82 L1036,8 L1070,60 L1104,86 L1138,14 L1172,72 L1206,6 L1240,78 L1274,24 L1308,80 L1342,8 L1376,62 L1410,28 L1440,56 L1440,130 Z" fill="#07090f"/>
	</svg>
</div>

<!-- ══════════════════════════════════════
     ABOUT  (upper cave — #07090f)
══════════════════════════════════════ -->
<section id="about" class="relative overflow-hidden px-6 py-20" style="background:#07090f">

	<!-- Cave shafts -->
	<div class="cave-shaft-l" style="top:25%; width:160px; height:46px; opacity:0.6;"></div>
	<div class="shaft-support-l" style="top:25%; width:160px; height:46px;"></div>
	<div class="shaft-lantern" style="left:70px; top:calc(25% + 8px);"></div>
	<div class="cave-shaft-l" style="top:62%; width:130px; height:38px; opacity:0.45;"></div>
	<div class="shaft-support-l" style="top:62%; width:130px; height:38px;"></div>
	<div class="cave-shaft-r" style="top:18%; width:190px; height:50px; opacity:0.55;"></div>
	<div class="shaft-support-r" style="top:18%; width:190px; height:50px;"></div>
	<div class="shaft-lantern" style="right:85px; top:calc(18% + 8px);"></div>
	<div class="cave-shaft-r" style="top:50%; width:150px; height:42px; opacity:0.5;"></div>
	<div class="shaft-support-r" style="top:50%; width:150px; height:42px;"></div>

	<!-- Ore veins — walls + mid-section -->
	<div class="animate-ore pointer-events-none absolute" style="right:0; top:15%">
		<svg viewBox="0 0 65 75" class="w-16" fill="none">
			<polygon points="22,32 31,14 40,32 31,48" fill="#6ee7b7" style="filter:drop-shadow(0 0 9px #6ee7b7)"/>
			<polygon points="38,20 46,8 54,20 46,34" fill="#6ee7b7" opacity="0.7" style="filter:drop-shadow(0 0 6px #6ee7b7)"/>
			<polygon points="10,44 17,32 24,44 17,58" fill="#6ee7b7" opacity="0.5"/>
		</svg>
	</div>
	<div class="animate-ore-delay2 pointer-events-none absolute" style="left:0; bottom:20%">
		<svg viewBox="0 0 55 65" class="w-14" fill="none">
			<polygon points="20,28 28,12 36,28 28,42" fill="#f59e0b" style="filter:drop-shadow(0 0 9px #f59e0b)"/>
			<polygon points="34,18 41,8 48,18 41,30" fill="#f59e0b" opacity="0.65" style="filter:drop-shadow(0 0 5px #f59e0b)"/>
			<polygon points="10,38 16,28 22,38 16,50" fill="#f59e0b" opacity="0.4"/>
		</svg>
	</div>
	<div class="animate-ore-slow pointer-events-none absolute" style="left:28%; top:38%">
		<svg viewBox="0 0 44 52" class="w-10" fill="none">
			<polygon points="14,22 21,8 28,22 21,34" fill="#6ee7b7" style="filter:drop-shadow(0 0 8px #6ee7b7)"/>
			<polygon points="26,12 32,4 38,12 32,22" fill="#6ee7b7" opacity="0.55" style="filter:drop-shadow(0 0 4px #6ee7b7)"/>
		</svg>
	</div>
	<div class="animate-ore-purple pointer-events-none absolute" style="left:58%; top:28%">
		<svg viewBox="0 0 42 50" class="w-10" fill="none">
			<polygon points="12,20 19,6 26,20 19,32" fill="#a78bfa" style="filter:drop-shadow(0 0 9px #a78bfa)"/>
			<polygon points="24,11 30,3 36,11 30,20" fill="#a78bfa" opacity="0.6" style="filter:drop-shadow(0 0 4px #a78bfa)"/>
		</svg>
	</div>
	<div class="animate-ore-delay pointer-events-none absolute" style="left:42%; bottom:28%">
		<svg viewBox="0 0 40 46" class="w-9" fill="none">
			<polygon points="12,18 18,6 24,18 18,28" fill="#f59e0b" style="filter:drop-shadow(0 0 8px #f59e0b)"/>
			<polygon points="22,10 27,3 32,10 27,18" fill="#f59e0b" opacity="0.5" style="filter:drop-shadow(0 0 4px #f59e0b)"/>
		</svg>
	</div>

	<div class="relative mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ CHARACTER PROFILE ]</span>
			<div class="ore-vein"></div>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span><span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span><span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-3 text-accent">// WHO I AM</p>
				<p class="text-text-muted">
					2nd year Software Engineering student at HZ University of Applied Sciences in Middelburg, Netherlands.
					I got into tech because I love the idea of creating something from nothing, turning ideas into working software.
				</p>
				<p class="mt-4 text-text-muted">
					When I'm not at my keyboard you'll find me climbing, cooking, gardening, or deep in a D&D session.
					Keeps me creative and helps me approach problems from angles you wouldn't expect.
				</p>
			</div>
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span><span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span><span class="hud-corner hud-corner-br"></span>
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
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span><span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span><span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-3 text-secondary">// APPROACH</p>
				<p class="text-text-muted">
					Open to trying anything. Web dev, game dev, something completely new. The best way to learn is by diving in and building. Not afraid to step outside my comfort zone.
				</p>
			</div>
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span><span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span><span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-4 text-secondary">// CURRENTLY DELVING INTO</p>
				<ul class="space-y-2 text-sm text-text-muted">
					<li class="flex items-center gap-2"><span class="text-accent">›</span> SvelteKit + Tailwind v4, built this very site</li>
					<li class="flex items-center gap-2"><span class="text-accent">›</span> Game Dev: Mini-Waterways, TypeScript puzzle game</li>
					<li class="flex items-center gap-2"><span class="text-accent">›</span> Azure cloud pipeline: CS2Stats GSI tracker</li>
					<li class="flex items-center gap-2"><span class="text-accent">›</span> UI/UX: game-inspired interfaces</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ══ CAVE ROCK: about → skills (going deeper) ══ -->
<div style="background:#07090f; line-height:0; display:block;">
	<svg viewBox="0 0 1440 130" preserveAspectRatio="none" style="width:100%; height:130px; display:block;">
		<path d="M0,130 L0,90 L42,16 L72,78 L100,4 L136,84 L172,24 L208,92 L244,8 L278,76 L308,96 L344,6 L382,70 L416,14 L450,88 L484,4 L520,80 L556,20 L590,96 L624,10 L660,72 L694,88 L728,6 L764,68 L800,92 L836,8 L872,74 L906,16 L942,90 L978,4 L1014,78 L1048,20 L1082,94 L1116,6 L1152,70 L1186,86 L1220,10 L1256,76 L1290,4 L1326,84 L1362,22 L1400,86 L1440,40 L1440,130 Z" fill="#050709"/>
	</svg>
</div>

<!-- ══════════════════════════════════════
     SKILLS  (deep cave — #050709)
══════════════════════════════════════ -->
<section id="skills" class="relative overflow-hidden px-6 py-20" style="background:#050709">

	<!-- Cave shafts — deepest level, most visible -->
	<div class="cave-shaft-l" style="top:15%; width:200px; height:54px; opacity:0.75;"></div>
	<div class="shaft-support-l" style="top:15%; width:200px; height:54px;"></div>
	<div class="shaft-lantern" style="left:90px; top:calc(15% + 8px);"></div>
	<div class="cave-shaft-l" style="top:40%; width:160px; height:44px; opacity:0.6;"></div>
	<div class="shaft-support-l" style="top:40%; width:160px; height:44px;"></div>
	<div class="cave-shaft-l" style="top:68%; width:220px; height:50px; opacity:0.65;"></div>
	<div class="shaft-support-l" style="top:68%; width:220px; height:50px;"></div>
	<div class="shaft-lantern" style="left:100px; top:calc(68% + 8px);"></div>
	<div class="cave-shaft-r" style="top:25%; width:180px; height:48px; opacity:0.7;"></div>
	<div class="shaft-support-r" style="top:25%; width:180px; height:48px;"></div>
	<div class="shaft-lantern" style="right:80px; top:calc(25% + 8px);"></div>
	<div class="cave-shaft-r" style="top:52%; width:140px; height:40px; opacity:0.55;"></div>
	<div class="shaft-support-r" style="top:52%; width:140px; height:40px;"></div>
	<div class="cave-shaft-r" style="top:76%; width:200px; height:52px; opacity:0.6;"></div>
	<div class="shaft-support-r" style="top:76%; width:200px; height:52px;"></div>
	<div class="shaft-lantern" style="right:90px; top:calc(76% + 8px);"></div>

	<!-- Dense ore veins — deepest point, wall + mid-section -->
	<div class="animate-ore pointer-events-none absolute" style="left:0; top:10%">
		<svg viewBox="0 0 70 80" class="w-20" fill="none">
			<polygon points="24,34 34,14 44,34 34,52" fill="#6ee7b7" style="filter:drop-shadow(0 0 12px #6ee7b7)"/>
			<polygon points="42,22 50,10 58,22 50,36" fill="#6ee7b7" opacity="0.8" style="filter:drop-shadow(0 0 7px #6ee7b7)"/>
			<polygon points="10,48 18,34 26,48 18,62" fill="#6ee7b7" opacity="0.55" style="filter:drop-shadow(0 0 5px #6ee7b7)"/>
			<polygon points="52,38 59,26 66,38 59,52" fill="#6ee7b7" opacity="0.35"/>
		</svg>
	</div>
	<div class="animate-ore-delay pointer-events-none absolute" style="right:0; top:35%">
		<svg viewBox="0 0 65 75" class="w-18" fill="none">
			<polygon points="22,30 31,12 40,30 31,46" fill="#f59e0b" style="filter:drop-shadow(0 0 12px #f59e0b)"/>
			<polygon points="38,18 46,6 54,18 46,32" fill="#f59e0b" opacity="0.75" style="filter:drop-shadow(0 0 7px #f59e0b)"/>
			<polygon points="10,42 17,28 24,42 17,56" fill="#f59e0b" opacity="0.5"/>
		</svg>
	</div>
	<div class="animate-ore-slow pointer-events-none absolute" style="right:0; bottom:25%">
		<svg viewBox="0 0 50 60" class="w-14" fill="none">
			<polygon points="18,26 26,12 34,26 26,40" fill="#a78bfa" style="filter:drop-shadow(0 0 10px #a78bfa)"/>
			<polygon points="32,16 39,6 46,16 39,30" fill="#a78bfa" opacity="0.65" style="filter:drop-shadow(0 0 6px #a78bfa)"/>
		</svg>
	</div>
	<div class="animate-ore-delay2 pointer-events-none absolute" style="left:0; bottom:15%">
		<svg viewBox="0 0 55 65" class="w-14" fill="none">
			<polygon points="20,28 28,12 36,28 28,42" fill="#f59e0b" style="filter:drop-shadow(0 0 9px #f59e0b)"/>
			<polygon points="34,18 41,6 48,18 41,30" fill="#6ee7b7" opacity="0.6" style="filter:drop-shadow(0 0 6px #6ee7b7)"/>
		</svg>
	</div>
	<div class="animate-ore-purple pointer-events-none absolute" style="left:32%; top:20%">
		<svg viewBox="0 0 46 54" class="w-11" fill="none">
			<polygon points="14,22 22,6 30,22 22,34" fill="#a78bfa" style="filter:drop-shadow(0 0 10px #a78bfa)"/>
			<polygon points="28,12 34,4 40,12 34,22" fill="#a78bfa" opacity="0.65" style="filter:drop-shadow(0 0 5px #a78bfa)"/>
		</svg>
	</div>
	<div class="animate-ore pointer-events-none absolute" style="left:60%; top:45%">
		<svg viewBox="0 0 48 56" class="w-11" fill="none">
			<polygon points="14,22 22,6 30,22 22,34" fill="#6ee7b7" style="filter:drop-shadow(0 0 10px #6ee7b7)"/>
			<polygon points="28,12 34,4 40,12 34,22" fill="#f59e0b" opacity="0.7" style="filter:drop-shadow(0 0 6px #f59e0b)"/>
		</svg>
	</div>
	<div class="animate-ore-delay pointer-events-none absolute" style="left:22%; top:62%">
		<svg viewBox="0 0 44 50" class="w-10" fill="none">
			<polygon points="12,20 19,6 26,20 19,30" fill="#f59e0b" style="filter:drop-shadow(0 0 8px #f59e0b)"/>
			<polygon points="24,11 30,3 36,11 30,20" fill="#a78bfa" opacity="0.6" style="filter:drop-shadow(0 0 5px #a78bfa)"/>
		</svg>
	</div>
	<div class="animate-ore-slow pointer-events-none absolute" style="left:70%; bottom:18%">
		<svg viewBox="0 0 42 48" class="w-10" fill="none">
			<polygon points="12,20 19,6 26,20 19,30" fill="#6ee7b7" style="filter:drop-shadow(0 0 9px #6ee7b7)"/>
			<polygon points="24,11 29,3 34,11 29,19" fill="#6ee7b7" opacity="0.5" style="filter:drop-shadow(0 0 4px #6ee7b7)"/>
		</svg>
	</div>

	<div class="relative mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ INVENTORY ]</span>
			<div class="ore-vein"></div>
		</div>
		<div class="space-y-10">
			<div>
				<div class="mb-4 flex items-center gap-3">
					<span class="label-mono text-text-muted">LANGUAGES</span>
					<span class="rounded px-2 py-0.5 text-xs font-mono" style="background:rgba(90,122,104,0.15); color:var(--color-text-muted)">COMMON</span>
				</div>
				<div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
					{#each skills.languages as skill}
						<div class="inv-slot common">
							<div class="h-8 w-8 rounded flex items-center justify-center" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06)">
								<span class="text-xs font-mono font-medium text-text-muted">{skill.slice(0,2).toUpperCase()}</span>
							</div>
							<span class="text-xs text-text-muted leading-tight">{skill}</span>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<div class="mb-4 flex items-center gap-3">
					<span class="label-mono text-text-muted">FRAMEWORKS</span>
					<span class="rounded px-2 py-0.5 text-xs font-mono" style="background:rgba(110,231,183,0.1); color:var(--color-accent)">UNCOMMON</span>
				</div>
				<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
					{#each skills.frameworks as skill}
						<div class="inv-slot uncommon">
							<div class="h-8 w-8 rounded flex items-center justify-center" style="background:rgba(110,231,183,0.07); border:1px solid rgba(110,231,183,0.2)">
								<span class="text-xs font-mono font-medium text-accent">{skill.slice(0,2).toUpperCase()}</span>
							</div>
							<span class="text-xs text-text-muted leading-tight">{skill}</span>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<div class="mb-4 flex items-center gap-3">
					<span class="label-mono text-text-muted">TOOLS</span>
					<span class="rounded px-2 py-0.5 text-xs font-mono" style="background:rgba(245,158,11,0.1); color:var(--color-secondary)">RARE</span>
				</div>
				<div class="grid grid-cols-3 gap-3 sm:grid-cols-5">
					{#each skills.tools as skill}
						<div class="inv-slot rare">
							<div class="h-8 w-8 rounded flex items-center justify-center" style="background:rgba(245,158,11,0.07); border:1px solid rgba(245,158,11,0.2)">
								<span class="text-xs font-mono font-medium text-secondary">{skill.slice(0,2).toUpperCase()}</span>
							</div>
							<span class="text-xs text-text-muted leading-tight">{skill}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ══ CAVE ROCK: skills → projects ══ -->
<div style="background:#050709; line-height:0; display:block;">
	<svg viewBox="0 0 1440 130" preserveAspectRatio="none" style="width:100%; height:130px; display:block;">
		<path d="M0,130 L0,86 L36,10 L66,74 L98,22 L134,90 L168,6 L202,78 L238,94 L272,14 L308,68 L340,8 L376,82 L414,26 L452,92 L488,8 L524,76 L560,18 L596,88 L630,4 L668,72 L704,88 L738,12 L774,70 L808,90 L842,8 L880,66 L916,20 L950,86 L986,6 L1022,76 L1058,16 L1094,90 L1128,8 L1164,72 L1200,92 L1234,14 L1270,74 L1306,6 L1342,80 L1378,26 L1410,72 L1440,44 L1440,130 Z" fill="#07090f"/>
	</svg>
</div>

<!-- ══════════════════════════════════════
     PROJECTS  (upper cave — #07090f)
══════════════════════════════════════ -->
<section id="projects" class="relative overflow-hidden px-6 py-20" style="background:#07090f">

	<!-- Cave shafts -->
	<div class="cave-shaft-l" style="top:28%; width:170px; height:48px; opacity:0.6;"></div>
	<div class="shaft-support-l" style="top:28%; width:170px; height:48px;"></div>
	<div class="shaft-lantern" style="left:75px; top:calc(28% + 8px);"></div>
	<div class="cave-shaft-l" style="top:62%; width:130px; height:40px; opacity:0.45;"></div>
	<div class="shaft-support-l" style="top:62%; width:130px; height:40px;"></div>
	<div class="cave-shaft-r" style="top:20%; width:190px; height:52px; opacity:0.55;"></div>
	<div class="shaft-support-r" style="top:20%; width:190px; height:52px;"></div>
	<div class="cave-shaft-r" style="top:55%; width:150px; height:44px; opacity:0.5;"></div>
	<div class="shaft-support-r" style="top:55%; width:150px; height:44px;"></div>
	<div class="shaft-lantern" style="right:70px; top:calc(55% + 8px);"></div>

	<!-- Ore veins — walls + mid-section -->
	<div class="animate-ore-delay2 pointer-events-none absolute" style="left:0; top:25%">
		<svg viewBox="0 0 60 70" class="w-16" fill="none">
			<polygon points="20,30 29,12 38,30 29,46" fill="#f59e0b" style="filter:drop-shadow(0 0 10px #f59e0b)"/>
			<polygon points="36,18 44,6 52,18 44,32" fill="#f59e0b" opacity="0.65" style="filter:drop-shadow(0 0 6px #f59e0b)"/>
			<polygon points="10,42 17,28 24,42 17,56" fill="#f59e0b" opacity="0.4"/>
		</svg>
	</div>
	<div class="animate-ore pointer-events-none absolute" style="right:0; bottom:30%">
		<svg viewBox="0 0 50 58" class="w-14" fill="none">
			<polygon points="18,26 26,10 34,26 26,40" fill="#6ee7b7" style="filter:drop-shadow(0 0 9px #6ee7b7)"/>
			<polygon points="30,16 37,6 44,16 37,28" fill="#a78bfa" opacity="0.7" style="filter:drop-shadow(0 0 7px #a78bfa)"/>
		</svg>
	</div>
	<div class="animate-ore-slow pointer-events-none absolute" style="right:0; top:18%">
		<svg viewBox="0 0 58 68" class="w-16" fill="none">
			<polygon points="20,30 29,12 38,30 29,46" fill="#6ee7b7" style="filter:drop-shadow(0 0 10px #6ee7b7)"/>
			<polygon points="36,18 44,6 52,18 44,32" fill="#6ee7b7" opacity="0.65" style="filter:drop-shadow(0 0 5px #6ee7b7)"/>
		</svg>
	</div>
	<div class="animate-ore-purple pointer-events-none absolute" style="left:35%; top:30%">
		<svg viewBox="0 0 44 52" class="w-10" fill="none">
			<polygon points="12,20 20,6 28,20 20,32" fill="#a78bfa" style="filter:drop-shadow(0 0 9px #a78bfa)"/>
			<polygon points="26,11 32,3 38,11 32,20" fill="#a78bfa" opacity="0.6" style="filter:drop-shadow(0 0 4px #a78bfa)"/>
		</svg>
	</div>
	<div class="animate-ore-delay pointer-events-none absolute" style="left:58%; top:55%">
		<svg viewBox="0 0 42 48" class="w-9" fill="none">
			<polygon points="12,18 18,6 24,18 18,28" fill="#f59e0b" style="filter:drop-shadow(0 0 8px #f59e0b)"/>
			<polygon points="22,10 27,3 32,10 27,18" fill="#f59e0b" opacity="0.55" style="filter:drop-shadow(0 0 4px #f59e0b)"/>
		</svg>
	</div>
	<div class="animate-ore-delay2 pointer-events-none absolute" style="left:22%; bottom:22%">
		<svg viewBox="0 0 40 46" class="w-9" fill="none">
			<polygon points="12,18 18,6 24,18 18,28" fill="#6ee7b7" style="filter:drop-shadow(0 0 8px #6ee7b7)"/>
			<polygon points="22,10 27,3 32,10 27,18" fill="#a78bfa" opacity="0.65" style="filter:drop-shadow(0 0 5px #a78bfa)"/>
		</svg>
	</div>

	<div class="relative mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ QUEST LOG ]</span>
			<div class="ore-vein"></div>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			<div class="quest-card flex flex-col p-8 md:col-span-2">
				<div class="notch"></div>
				<div class="mb-4 flex items-center gap-2">
					<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(110,231,183,0.1); color:var(--color-accent)">MAIN QUEST</span>
					<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(245,158,11,0.08); color:var(--color-secondary)">WEB APP</span>
				</div>
				<h3 class="mb-2 text-xl font-bold">WAITT Conference</h3>
				<p class="label-mono mb-3 text-text-muted">We Are In IT Together</p>
				<p class="mb-6 flex-1 text-text-muted">
					The WAITT guild holds its annual tech summit every year. Hundreds of companies. Hundreds of participants. Someone has to keep it all together. Build the platform, handle the registrations, manage the sign-ups, keep the whole operation running on the day. Been on this one for over a year. Still going.
				</p>
				<div class="mb-5 flex flex-wrap gap-2">
					{#each ['Laravel', 'PHP', 'Tailwind CSS', 'Docker'] as tag}
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
			<div class="flex flex-col gap-6">
				<div class="quest-card flex flex-col p-6">
					<div class="notch"></div>
					<div class="mb-3 flex items-center gap-2">
						<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(167,139,250,0.1); color:var(--color-rare)">SIDE QUEST</span>
						<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(245,158,11,0.08); color:var(--color-secondary)">GAME</span>
					</div>
					<h3 class="mb-1 text-lg font-bold">Mini-Waterways</h3>
					<p class="mb-3 flex-1 text-sm text-text-muted">
						An archipelago of shipyards, no routes between them. The ports are waiting. Draw the waterways before the queues overflow. Every connection counts.
					</p>
					<div class="mb-4 flex flex-wrap gap-1.5">
						{#each ['TypeScript', 'Canvas API', 'Game Dev'] as tag}
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
				<div class="quest-card flex flex-col p-6 opacity-80">
					<div class="notch"></div>
					<div class="mb-3 flex items-center gap-2">
						<span class="rounded px-2 py-1 text-xs font-mono" style="background:rgba(245,158,11,0.1); color:var(--color-secondary)">QUEST ACTIVE</span>
					</div>
					<h3 class="mb-1 text-lg font-bold">CS2Stats</h3>
					<p class="mb-3 flex-1 text-sm text-text-muted">
						Every match generates data. Most of it disappears. Wire GSI into Azure Functions, push it through Event Hubs, process it with Stream Analytics, park it in Cosmos DB. Map still being drawn.
					</p>
					<div class="flex flex-wrap gap-1.5">
						{#each ['Azure', 'Node.js', 'GSI', 'Cosmos DB'] as tag}
							<span class="rounded border border-border px-2 py-0.5 text-xs text-text-muted font-mono">{tag}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ══ CAVE ROCK: projects → contact (rising back up) ══ -->
<div style="background:#07090f; line-height:0; display:block;">
	<svg viewBox="0 0 1440 130" preserveAspectRatio="none" style="width:100%; height:130px; display:block;">
		<path d="M0,130 L0,78 L44,14 L78,82 L110,8 L148,76 L184,22 L220,88 L258,10 L292,72 L326,90 L360,8 L398,68 L432,18 L468,86 L502,6 L538,74 L574,24 L610,90 L644,8 L682,70 L716,86 L752,12 L788,66 L822,84 L858,6 L894,70 L930,18 L966,84 L1002,10 L1038,74 L1072,22 L1108,88 L1144,8 L1180,68 L1214,84 L1248,12 L1284,72 L1318,8 L1354,76 L1388,24 L1420,68 L1440,46 L1440,130 Z" fill="#0a0e16"/>
	</svg>
</div>

<!-- ══════════════════════════════════════
     CONTACT  (back to surface — #0a0e16)
══════════════════════════════════════ -->
<section id="contact" class="relative px-6 py-20" style="background:#0a0e16">

	<!-- Faint ore near surface -->
	<div class="animate-ore-slow pointer-events-none absolute right-0 top-[20%]">
		<svg viewBox="0 0 50 55" class="w-12" fill="none">
			<polygon points="18,24 25,10 32,24 25,36" fill="#6ee7b7" opacity="0.5" style="filter:drop-shadow(0 0 6px #6ee7b7)"/>
			<polygon points="30,14 36,6 42,14 36,26" fill="#6ee7b7" opacity="0.35"/>
		</svg>
	</div>

	<div class="mx-auto max-w-5xl">
		<div class="mb-10 flex items-center gap-4">
			<span class="label-mono text-accent">[ OPEN CHANNEL ]</span>
			<div class="ore-vein"></div>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="hud-card rounded-sm p-8">
				<span class="hud-corner hud-corner-tl"></span><span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span><span class="hud-corner hud-corner-br"></span>
				<p class="label-mono mb-4 text-accent">// TRANSMISSION CHANNELS</p>
				<p class="mb-6 text-text-muted">
					Always open to new opportunities, interesting projects, or just a chat about tech. Or D&D. Or Dome Keeper. Reach out through any channel below.
				</p>
				<div class="space-y-3">
					{#each socials as social}
						<a href={social.url} target="_blank" rel="noopener noreferrer"
							class="group flex items-center gap-4 rounded border border-[#1e3028] p-3 transition-all hover:border-accent hover:shadow-[0_0_14px_rgba(110,231,183,0.12)]" style="background:linear-gradient(145deg,#0f1a14,#0a1210)">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded transition-colors group-hover:shadow-[0_0_10px_rgba(110,231,183,0.3)]" style="background:rgba(110,231,183,0.05); border:1px solid rgba(110,231,183,0.1)">
								<svg class="h-5 w-5 text-text-muted group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
									<path d={social.icon}/>
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
			<div class="hud-card relative flex flex-col items-center justify-center overflow-hidden rounded-sm p-8 text-center">
				<span class="hud-corner hud-corner-tl"></span><span class="hud-corner hud-corner-tr"></span>
				<span class="hud-corner hud-corner-bl"></span><span class="hud-corner hud-corner-br"></span>
				<div class="absolute inset-0 flex items-center justify-center opacity-20">
					<div class="h-48 w-48 rounded-full bg-accent blur-3xl"></div>
				</div>
				<div class="relative">
					<svg viewBox="0 0 120 160" class="mb-5 mx-auto h-24 w-16 drop-shadow-[0_0_16px_rgba(110,231,183,0.4)]" fill="none">
						<polygon points="60,6 106,52 110,116 60,154 10,116 14,52" fill="rgba(110,231,183,0.06)" stroke="#6ee7b7" stroke-width="1"/>
						<line x1="14" y1="52" x2="106" y2="52" stroke="#6ee7b7" stroke-width="0.7" opacity="0.5"/>
						<line x1="10" y1="116" x2="110" y2="116" stroke="#6ee7b7" stroke-width="0.7" opacity="0.5"/>
						<line x1="60" y1="6" x2="60" y2="154" stroke="#6ee7b7" stroke-width="0.9" opacity="0.6"/>
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
<footer class="border-t border-border px-6 py-8" style="background:#0a0e16">
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
		<p class="label-mono">© {new Date().getFullYear()} Gijs Borghouts · Built with SvelteKit</p>
		<div class="flex gap-4">
			{#each socials as social}
				<a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}
					class="text-text-muted transition-colors hover:text-accent">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon}/></svg>
				</a>
			{/each}
		</div>
	</div>
</footer>
