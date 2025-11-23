<script lang="ts">
	// ============================================
	// SKILLS - Add or remove skills in each array
	// ============================================
	const skills = {
		languages: ['JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS', 'SQL'],
		frameworks: ['Svelte', 'SvelteKit', 'Laravel', 'Tailwind CSS'],
		tools: ['Git', 'Figma', 'Krita', 'Aseprite', 'Canva']
	};

	// ============================================
	// SOCIALS - Add new social by copying the format:
	// { name: 'Name', url: 'https://...', icon: 'svg path here' }
	// Find SVG icons at: https://simpleicons.org/
	// ============================================
	const socials = [
		{
			name: 'GitHub',
			url: 'https://github.com/CaptainPancakeWithBacon',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/gijs-borghouts-95530b291/',
			icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/Gijs_borghouts',
			icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
		}
	];
</script>

<!-- ============================================
     HERO SECTION - Edit your intro text here
     ============================================ -->
<section class="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
	<!-- Floating leaves -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Leaf 1 - top left -->
		<svg class="absolute left-[10%] top-[15%] h-12 w-12 text-accent/20 animate-float" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
		<!-- Leaf 2 - top right -->
		<svg class="absolute right-[15%] top-[20%] h-8 w-8 text-accent/15 animate-float-delayed" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
		<!-- Leaf 3 - left middle -->
		<svg class="absolute left-[5%] top-[45%] h-10 w-10 text-secondary/15 animate-float-slow rotate-45" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
		<!-- Leaf 4 - right bottom -->
		<svg class="absolute right-[8%] bottom-[25%] h-14 w-14 text-accent/10 animate-float-slower -rotate-12" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
		<!-- Small leaf 5 -->
		<svg class="absolute left-[20%] bottom-[30%] h-6 w-6 text-accent/20 animate-float-slow rotate-90" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
		<!-- Monstera-style leaf - right -->
		<svg class="absolute right-[3%] top-[40%] h-20 w-20 text-accent/10 animate-float-slower rotate-12" viewBox="0 0 24 24" fill="currentColor">
			<path d="M21,3C21,3 18,6 15,9C15,9 12,6 12,3C12,3 9,6 9,9C6,6 3,3 3,3C3,3 3,12 6,15C6,15 3,15 3,18C3,21 6,21 6,21C6,21 9,21 12,18C15,21 18,21 18,21C18,21 21,21 21,18C21,15 18,15 18,15C21,12 21,3 21,3Z"/>
		</svg>
	</div>

	<div class="text-center">
		<p class="mb-4 text-sm font-medium tracking-wide text-accent">Hello, I'm</p>
		<h1 class="mb-6 text-5xl font-bold md:text-7xl">
			Gijs Borghouts<span class="text-accent">.</span>
		</h1>
		<p class="mx-auto mb-8 max-w-xl text-lg text-text-muted">
			Software Engineering student passionate about building things and exploring all areas of tech.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a href="#projects" class="rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover">
				View my work
			</a>
			<a href="#contact" class="rounded-full border border-border px-6 py-3 font-medium text-text-muted transition-colors hover:border-accent hover:text-text">
				Get in touch
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<a href="#about" class="absolute bottom-8 flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent">
		<span class="text-xs">Scroll down</span>
		<svg class="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</a>
</section>

<!-- ============================================
     ABOUT SECTION - Update your bio info here
     ============================================ -->
<section id="about" class="px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-3xl font-bold">About me<span class="text-accent">.</span></h2>

		<div class="grid gap-6 md:grid-cols-2">
			<div class="bento-card relative overflow-hidden p-8">
				<!-- Small leaf decoration -->
				<svg class="absolute -left-1 -bottom-1 h-14 w-14 text-accent/10 -rotate-45" viewBox="0 0 24 24" fill="currentColor">
					<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
				</svg>
				<h3 class="mb-4 text-lg font-semibold text-accent">Who I am</h3>
				<p class="text-text-muted">
					I'm a 2nd year Software Engineering student at HZ University of Applied Sciences in Middelburg, Netherlands.
					I got into tech because I love the idea of creating something from nothing - turning ideas into working software.
				</p>
			</div>

			<div class="bento-card relative overflow-hidden p-8">
				<!-- Small vine decoration -->
				<svg class="absolute -right-1 -top-1 h-16 w-16 text-secondary/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M100,0 Q75,25 55,45 T30,80" stroke-linecap="round"/>
					<circle cx="55" cy="45" r="3" fill="currentColor" opacity="0.5"/>
				</svg>
				<h3 class="mb-4 text-lg font-semibold text-accent">My approach</h3>
				<p class="text-text-muted">
					I'm open to trying anything. Whether it's web development, game dev, or something completely new -
					I believe the best way to learn is by diving in and building things. I'm not afraid to step outside my comfort zone.
				</p>
			</div>

			<div class="bento-card relative overflow-hidden p-8">
				<!-- Decorative vine corner -->
				<svg class="absolute -right-2 -top-2 h-24 w-24 text-accent/15" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
					<path d="M100,0 Q80,20 70,40 T50,70 Q40,85 20,95" stroke-linecap="round"/>
					<path d="M75,25 Q65,30 60,40" stroke-linecap="round"/>
					<path d="M55,55 Q45,60 35,75" stroke-linecap="round"/>
					<circle cx="70" cy="40" r="4" fill="currentColor" opacity="0.5"/>
					<circle cx="50" cy="70" r="3" fill="currentColor" opacity="0.4"/>
					<circle cx="30" cy="88" r="5" fill="currentColor" opacity="0.3"/>
				</svg>
				<h3 class="mb-4 text-lg font-semibold text-accent">Beyond coding</h3>
				<p class="text-text-muted">
					When I'm not at my keyboard, you'll find me climbing, cooking, or gardening.
					I find these hobbies help me stay creative and approach problems from different angles.
				</p>
			</div>

			<div class="bento-card relative flex flex-col justify-center overflow-hidden p-8">
				<!-- Small sprouting plant -->
				<svg class="absolute -right-2 bottom-0 h-16 w-16 text-accent/15" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12,22A3,3 0 0,1 9,19V14H6V12H9V11A5,5 0 0,1 14,6V5A3,3 0 0,1 17,2V3A2,2 0 0,0 15,5V6A4,4 0 0,0 11,10V12H15V14H12V19A1,1 0 0,0 13,20H14V22H12Z"/>
				</svg>
				<div class="mb-4 flex items-center gap-3">
					<span class="relative flex h-3 w-3">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
						<span class="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
					</span>
					<span class="text-sm text-text-muted">Currently</span>
				</div>
				<p class="font-semibold">Open for internships & projects</p>
				<p class="mt-1 text-sm text-text-muted">Looking to gain real-world experience</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================================
     EDUCATION SECTION
     - Update year: change "2nd" to "3rd", "4th", etc.
     - Update date range: "2023 - Present" → "2023 - 2027"
     - Update "Currently Learning" items below
     ============================================ -->
<section id="education" class="px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-3xl font-bold">Education<span class="text-accent">.</span></h2>

		<div class="grid gap-6 md:grid-cols-3">
			<div class="bento-card relative col-span-full overflow-hidden p-8 md:col-span-2">
				<!-- Decorative branch -->
				<svg class="absolute -right-4 -top-4 h-28 w-28 text-accent/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
					<path d="M100,0 Q70,30 50,50 T15,90" stroke-linecap="round"/>
					<path d="M65,35 Q55,45 45,50" stroke-linecap="round"/>
					<path d="M45,55 Q35,65 25,75" stroke-linecap="round"/>
					<circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.4"/>
					<circle cx="25" cy="75" r="3" fill="currentColor" opacity="0.3"/>
					<circle cx="65" cy="35" r="3" fill="currentColor" opacity="0.3"/>
				</svg>
				<div class="mb-4 flex items-start justify-between">
					<div>
						<h3 class="text-xl font-bold">HBO-ICT Software Engineering</h3>
						<p class="text-accent">HZ University of Applied Sciences</p>
					</div>
					<span class="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">2023 - Present</span>
				</div>
				<p class="mb-4 text-text-muted">
					Currently in my 2nd year, focusing on full-stack development, software architecture, and agile methodologies.
					Learning to build robust, scalable applications while working in teams.
				</p>
				<div class="flex flex-wrap gap-2">
					<span class="rounded-full border border-border px-3 py-1 text-sm">Full-stack Development</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">Agile/Scrum</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">Database Design</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">Software Testing</span>
				</div>
			</div>

			<div class="bento-card relative flex flex-col justify-center overflow-hidden p-8 text-center">
				<!-- Small decorative leaf -->
				<svg class="absolute -bottom-1 -right-1 h-16 w-16 text-accent/10" viewBox="0 0 24 24" fill="currentColor">
					<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
				</svg>
				<p class="text-4xl font-bold text-accent">2nd</p>
				<p class="text-text-muted">Year Student</p>
				<p class="mt-2 text-sm text-text-muted">Middelburg, NL</p>
			</div>

			<!-- CURRENTLY LEARNING - Add/edit items here -->
			<div class="bento-card col-span-full p-8">
				<h3 class="mb-4 text-lg font-semibold text-accent">What I'm currently learning</h3>
				<div class="grid gap-4 md:grid-cols-3">
					<div>
						<p class="font-medium">SvelteKit</p>
						<p class="text-sm text-text-muted">Building this portfolio and exploring modern web frameworks</p>
					</div>
					<div>
						<p class="font-medium">Game Development</p>
						<p class="text-sm text-text-muted">Working on Mini-Waterways in my spare time</p>
					</div>
					<div>
						<p class="font-medium">UI/UX Design</p>
						<p class="text-sm text-text-muted">Learning design principles and creating better user experiences</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================
     SKILLS SECTION
     Edit skills in the <script> section at the top
     ============================================ -->
<section id="skills" class="relative px-6 py-20 overflow-hidden">
	<!-- Background floating leaves -->
	<div class="pointer-events-none absolute inset-0">
		<svg class="absolute left-[5%] top-[20%] h-16 w-16 text-accent/5 animate-float-slow rotate-12" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
		<svg class="absolute right-[8%] bottom-[15%] h-12 w-12 text-secondary/5 animate-float-slower -rotate-45" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
	</div>
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-3xl font-bold">Skills<span class="text-accent">.</span></h2>

		<div class="grid gap-6 md:grid-cols-3">
			<div class="bento-card p-8">
				<div class="mb-5 flex items-center gap-3">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
						<svg class="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold">Languages</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each skills.languages as skill}
						<span class="rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-secondary hover:text-secondary">{skill}</span>
					{/each}
				</div>
			</div>

			<div class="bento-card p-8">
				<div class="mb-5 flex items-center gap-3">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
						<svg class="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold">Frameworks</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each skills.frameworks as skill}
						<span class="rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-cyan-400 hover:text-cyan-400">{skill}</span>
					{/each}
				</div>
			</div>

			<div class="bento-card p-8">
				<div class="mb-5 flex items-center gap-3">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
						<svg class="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold">Tools</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each skills.tools as skill}
						<span class="rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-purple-400 hover:text-purple-400">{skill}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================
     PROJECTS SECTION
     - To add a new project: copy one of the bento-card divs
     - Update: title, description, tech tags, and links
     ============================================ -->
<section id="projects" class="relative px-6 py-20 overflow-hidden">
	<!-- Background floating leaves -->
	<div class="pointer-events-none absolute inset-0">
		<svg class="absolute right-[3%] top-[10%] h-20 w-20 text-accent/5 animate-float rotate-180" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
		<svg class="absolute left-[2%] bottom-[20%] h-14 w-14 text-secondary/5 animate-float-delayed rotate-45" viewBox="0 0 24 24" fill="currentColor">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
		</svg>
	</div>
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-3xl font-bold">Projects<span class="text-accent">.</span></h2>

		<div class="grid gap-6 md:grid-cols-2">
			<!-- PROJECT 1: WAITT Conference -->
			<div class="bento-card relative flex flex-col overflow-hidden p-8">
				<!-- Decorative leaf -->
				<svg class="absolute -right-3 -top-3 h-20 w-20 text-accent/10 rotate-45" viewBox="0 0 24 24" fill="currentColor">
					<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
				</svg>
				<div class="mb-4 flex items-center gap-2">
					<span class="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Featured</span>
					<span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">Web App</span>
				</div>
				<h3 class="mb-3 text-xl font-bold">WAITT Conference</h3>
				<p class="mb-5 flex-1 text-text-muted">
					A full-stack conference management platform for the annual "We Are In IT Together" conference.
					Handles company registration, participant management, and conference logistics.
					I've played a significant role in developing this project over the past year.
				</p>
				<div class="mb-5 flex flex-wrap gap-2">
					<span class="rounded-full border border-border px-3 py-1 text-sm">Laravel</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">PHP</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">Tailwind</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">Docker</span>
				</div>
				<div class="flex flex-wrap gap-3">
					<a href="https://weareinittogether.nl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover">
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
						Visit Site
					</a>
					<a href="https://github.com/HZ-HBO-ICT/it-conference" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent">
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
						GitHub
					</a>
				</div>
			</div>

			<!-- PROJECT 2: Mini-Waterways (copy this block to add more projects) -->
			<div class="bento-card relative flex flex-col overflow-hidden p-8">
				<!-- Decorative vine -->
				<svg class="absolute -left-2 -bottom-2 h-24 w-24 text-secondary/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
					<path d="M0,100 Q25,80 40,55 T60,20 Q70,5 85,0" stroke-linecap="round"/>
					<circle cx="40" cy="55" r="4" fill="currentColor" opacity="0.4"/>
					<circle cx="60" cy="25" r="3" fill="currentColor" opacity="0.3"/>
				</svg>
				<div class="mb-4 flex items-center gap-2">
					<span class="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">Side Project</span>
					<span class="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">Game</span>
				</div>
				<h3 class="mb-3 text-xl font-bold">Mini-Waterways</h3>
				<p class="mb-5 flex-1 text-text-muted">
					A puzzle game inspired by Mini Motorways and Mini Metro, but with a nautical twist.
					Build and manage waterways to connect shipyards and ports.
					A fun side project I tinker with in my free time to learn game development.
				</p>
				<div class="mb-5 flex flex-wrap gap-2">
					<span class="rounded-full border border-border px-3 py-1 text-sm">TypeScript</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">Game Dev</span>
					<span class="rounded-full border border-border px-3 py-1 text-sm">Puzzle</span>
				</div>
				<div class="flex flex-wrap gap-3">
					<a href="https://github.com/CaptainPancakeWithBacon/Mini-Waterways" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent">
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
						View on GitHub
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================
     CONTACT SECTION
     Edit socials in the <script> section at the top
     ============================================ -->
<section id="contact" class="px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-3xl font-bold">Get in touch<span class="text-accent">.</span></h2>

		<div class="grid gap-6 md:grid-cols-2">
			<div class="bento-card p-8">
				<p class="mb-6 text-lg text-text-muted">
					I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
					Feel free to reach out through any of the platforms below!
				</p>
				<div class="flex flex-wrap gap-3">
					{#each socials as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d={social.icon} />
							</svg>
							{social.name}
						</a>
					{/each}
				</div>
			</div>

			<div class="bento-card relative flex flex-col items-center justify-center overflow-hidden p-8 text-center">
				<!-- Decorative corner vines -->
				<svg class="absolute -left-2 -top-2 h-20 w-20 text-accent/15" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
					<path d="M0,0 Q20,25 35,50 T55,85" stroke-linecap="round"/>
					<path d="M25,35 Q35,45 30,55" stroke-linecap="round"/>
					<circle cx="35" cy="50" r="4" fill="currentColor" opacity="0.4"/>
					<circle cx="50" cy="75" r="3" fill="currentColor" opacity="0.3"/>
				</svg>
				<svg class="absolute -bottom-2 -right-2 h-20 w-20 rotate-180 text-secondary/15" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5">
					<path d="M0,0 Q20,25 35,50 T55,85" stroke-linecap="round"/>
					<path d="M25,35 Q35,45 30,55" stroke-linecap="round"/>
					<circle cx="35" cy="50" r="4" fill="currentColor" opacity="0.4"/>
					<circle cx="50" cy="75" r="3" fill="currentColor" opacity="0.3"/>
				</svg>
				<!-- Plant icon instead of wave -->
				<svg class="mb-3 h-14 w-14 text-accent" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12,22A3,3 0 0,1 9,19V18H6A2,2 0 0,1 4,16V12A2,2 0 0,1 6,10H9V9A7,7 0 0,1 16,2V3A6,6 0 0,0 10,9V10H12V9A4,4 0 0,1 16,5V6A3,3 0 0,0 13,9V10H15A2,2 0 0,1 17,12V16A2,2 0 0,1 15,18H12V19A1,1 0 0,0 13,20A1,1 0 0,0 14,19H16A3,3 0 0,1 13,22H12Z"/>
				</svg>
				<p class="text-xl font-semibold">Let's build something together!</p>
				<p class="mt-2 text-text-muted">I'd love to hear from you</p>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-border px-6 py-8">
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
		<p class="text-sm text-text-muted">
			 {new Date().getFullYear()} Gijs Borghouts. Built with SvelteKit & Tailwind.
		</p>
		<div class="flex gap-4">
			{#each socials as social}
				<a href={social.url} target="_blank" rel="noopener noreferrer" class="text-text-muted transition-colors hover:text-accent">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
				</a>
			{/each}
		</div>
	</div>
</footer>
