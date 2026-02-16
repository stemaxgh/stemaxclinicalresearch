<script>
	import {
		Check,
		ExternalLink,
		Phone,
		Menu,
		X,
		ChevronRight,
		Mail,
		MapPin,
		FileText,
		ShieldCheck,
		Microscope,
		Users,
		Building2
	} from 'lucide-svelte';
	import { fade, slide } from 'svelte/transition';
	import { studies, pharmacovigilance, sponsors, team } from '$lib/data';

	// --------------------------------------------------------------------------
	// HEADER LOGIC
	// --------------------------------------------------------------------------
	let mobileMenuOpen = $state(false);
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>Stemax Clinical Research | Clinical Trials & Pharmacovigilance</title>
	<meta
		name="description"
		content="Leading clinical research organization providing comprehensive pharmacovigilance solutions and running clinical trials for pharmaceutical sponsors."
	/>
</svelte:head>

<header
	class="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-200"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<div class="flex shrink-0 items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white shadow-lg"
				>
					<span class="text-xl font-bold">S</span>
				</div>
				<div class="flex flex-col">
					<span class="text-xl font-bold tracking-tight text-slate-900">STEMAX</span>
					<span class="text-xs font-medium tracking-wide text-slate-500 uppercase"
						>Clinical Research</span
					>
				</div>
			</div>

			<nav class="hidden space-x-1 md:flex">
				{#each ['Clinical Trials', 'Pharmacovigilance', 'For Sponsors', 'For Patients'] as item}
					<a
						href="#{item.toLowerCase().replace(' ', '-')}"
						class="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
					>
						{item}
					</a>
				{/each}
				<a
					href="#contact"
					class="ml-4 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-800 hover:shadow-md active:translate-y-0.5"
				>
					Contact Us
				</a>
			</nav>

			<div class="flex md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none"
					onclick={toggleMobileMenu}
					aria-label="Main menu"
				>
					{#if mobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div transition:slide class="border-b border-gray-200 bg-white md:hidden" id="mobile-menu">
			<div class="space-y-1 px-4 py-6">
				{#each ['Clinical Trials', 'Pharmacovigilance', 'For Sponsors', 'For Patients', 'Contact'] as item}
					<a
						href="#{item.toLowerCase().replace(' ', '-')}"
						class="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
						onclick={toggleMobileMenu}
					>
						{item}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>

<main>
	<section class="relative overflow-hidden bg-slate-50 pt-16 pb-20 lg:pt-32 lg:pb-28">
		<div class="absolute inset-0 z-0 opacity-30">
			<div
				class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl filter"
			></div>
			<div
				class="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl filter"
			></div>
		</div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<div
					class="mb-6 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset"
				>
					<span class="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
					Pivoting the Future of Medicine
				</div>
				<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
					<span class="block">Advanced Clinical Trials</span>
					<span
						class="block bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-emerald-700 text-transparent"
						>& Pharmacovigilance</span
					>
				</h1>
				<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
					Connecting pharmaceutical innovators with dedicated volunteer patients. We ensure rigorous
					drug safety monitoring and efficient trial execution to bring life-changing treatments to
					market.
				</p>
				<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
					<a
						href="#for-sponsors"
						class="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-emerald-800"
					>
						For Sponsors
					</a>
					<a
						href="#for-patients"
						class="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:text-emerald-700"
					>
						Volunteer for Trials
					</a>
				</div>
			</div>
		</div>
	</section>

	<section id="for-sponsors" class="bg-white py-12 lg:py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<p class="text-center text-sm font-semibold tracking-wider text-slate-500 uppercase">
				Trusted by Leading Pharmaceutical Partners
			</p>
			<div
				class="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:grid-cols-4"
			>
				{#each sponsors as sponsor}
					<div
						class="flex h-16 w-full items-center justify-center rounded-lg border border-slate-100 bg-slate-50 px-6 py-4 shadow-sm"
					>
						<span class="text-center font-bold text-slate-700">{sponsor.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="pharmacovigilance" class="bg-slate-50 py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-base leading-7 font-semibold tracking-wide text-emerald-600 uppercase">
					Drug Safety
				</h2>
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					{pharmacovigilance.intro.title}
				</h2>
				<p class="mt-6 text-lg leading-8 text-slate-600">
					{pharmacovigilance.intro.description}
				</p>
				<p class="mt-4 text-base leading-7 text-slate-500">
					{pharmacovigilance.intro.subDescription}
				</p>
			</div>

			<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each pharmacovigilance.services as service}
					<div
						class="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white"
						>
							<ShieldCheck class="h-6 w-6" />
						</div>
						<h3 class="mb-4 text-xl font-bold text-slate-900">{service.title}</h3>
						<ul class="space-y-3">
							{#each service.items as item}
								<li class="flex items-start gap-3 text-sm text-slate-600">
									<Check class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>

			<div class="mt-16 grid gap-8 lg:grid-cols-2">
				<div class="rounded-3xl bg-slate-900 p-8 text-white shadow-xl lg:p-12">
					<div class="flex items-center gap-4">
						<FileText class="h-8 w-8 text-emerald-400" />
						<h3 class="text-2xl font-bold">{pharmacovigilance.inspectionReadiness.title}</h3>
					</div>
					<p class="mt-4 text-slate-300">
						{pharmacovigilance.inspectionReadiness.description}
					</p>
					<ul class="mt-6 space-y-3">
						{#each pharmacovigilance.inspectionReadiness.items as item}
							<li class="flex items-center gap-3 text-emerald-100">
								<div class="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
								{item}
							</li>
						{/each}
					</ul>
					<p class="mt-8 font-semibold text-emerald-400">
						{pharmacovigilance.inspectionReadiness.conclusion}
					</p>
				</div>

				<div class="flex flex-col justify-center rounded-3xl bg-emerald-50 p-8 lg:p-12">
					<h3 class="text-2xl font-bold text-emerald-900">{pharmacovigilance.values.title}</h3>
					<p class="mt-4 text-lg text-emerald-800">
						{pharmacovigilance.values.description}
					</p>
					<div class="mt-6 border-t border-emerald-200 pt-6">
						<p class="leading-relaxed text-emerald-700">
							{pharmacovigilance.values.goal}
						</p>
					</div>
				</div>
			</div>

			<div class="mt-16 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">
				<div class="grid lg:grid-cols-2">
					<div class="bg-emerald-700 p-8 text-white lg:p-12">
						<h3 class="text-2xl font-bold">{pharmacovigilance.training.title}</h3>
						<p class="mt-4 text-emerald-100">{pharmacovigilance.training.description}</p>
						<p class="mt-8 text-lg font-semibold text-white">
							{pharmacovigilance.training.conclusion}
						</p>
						<div class="mt-8">
							<a
								href="#contact"
								class="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-50"
							>
								Inquire About Training
							</a>
						</div>
					</div>
					<div class="p-8 lg:p-12">
						<div class="grid gap-8 sm:grid-cols-2">
							<div>
								<h4 class="mb-4 font-bold text-slate-900">For Professionals</h4>
								<ul class="space-y-2">
									{#each pharmacovigilance.training.audiences as item}
										<li class="flex items-start gap-2 text-sm text-slate-600">
											<ChevronRight class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
											<span>{item}</span>
										</li>
									{/each}
								</ul>
							</div>
							<div>
								<h4 class="mb-4 font-bold text-slate-900">Training Options</h4>
								<ul class="space-y-2">
									{#each pharmacovigilance.training.options as item}
										<li class="flex items-start gap-2 text-sm text-slate-600">
											<ChevronRight class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
											<span>{item}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-12 text-center">
				<p class="text-xl font-medium text-slate-900">{pharmacovigilance.intro.cta}</p>
			</div>
		</div>
	</section>

	<section id="clinical-trials" class="bg-white py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="text-base leading-7 font-semibold tracking-wide text-emerald-600 uppercase">
					Our Research
				</h2>
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					Past & Current Clinical Trials
				</h2>
				<p class="mt-4 text-lg text-slate-600">
					We have successfully partnered with sponsors to run diverse clinical trials, providing
					vital data and care.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				{#each studies as study}
					<div
						class="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-emerald-200 hover:shadow-lg"
					>
						<div class="mb-5 flex items-center justify-between">
							<span
								class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset"
								class:bg-emerald-50={study.status === 'Enrolling'}
								class:text-emerald-700={study.status === 'Enrolling'}
								class:ring-emerald-600={study.status === 'Enrolling'}
								class:bg-slate-100={study.status !== 'Enrolling'}
								class:text-slate-600={study.status !== 'Enrolling'}
								class:ring-slate-300={study.status !== 'Enrolling'}
							>
								{study.status}
							</span>
							<Microscope class="h-5 w-5 text-slate-400" />
						</div>

						<h3 class="mb-3 text-xl font-bold text-slate-900">
							{study.title}
						</h3>

						<p class="mb-8 flex-grow leading-relaxed text-slate-600">
							{study.description}
						</p>

						{#if study.link && study.status === 'Enrolling'}
							<a
								href={study.link}
								target="_blank"
								rel="noopener noreferrer"
								id="for-patients"
								class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
							>
								Volunteer Now <ExternalLink class="h-4 w-4" />
							</a>
						{:else}
							<div
								class="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-400 ring-1 ring-slate-200 ring-inset"
							>
								Study Closed
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="about" class="bg-slate-900 py-20 text-white lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="text-base leading-7 font-semibold tracking-wide text-emerald-400 uppercase">
					Leadership
				</h2>
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Meet Our Research Specialists
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each team as member}
					<div
						class="group hover:bg-slate-750 relative rounded-2xl bg-slate-800 p-6 shadow-xl ring-1 ring-white/10 transition-colors"
					>
						<div
							class="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-emerald-500/20"
						>
							<div
								class="{member.color} flex h-full w-full items-center justify-center text-2xl font-bold text-white"
							>
								{member.name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</div>
						</div>
						<div class="text-center">
							<h3 class="text-lg font-bold text-white">{member.name}</h3>
							<p class="mt-1 text-sm font-medium text-emerald-400">{member.role}</p>
							<p class="mt-4 text-sm leading-6 text-slate-300">
								{member.bio}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="contact" class="bg-white py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
				<div>
					<h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
						Partner with Stemax
					</h2>
					<p class="mt-4 text-lg text-slate-600">
						Whether you are a sponsor looking to run a trial, or a healthcare professional seeking
						pharmacovigilance support, we are ready to help.
					</p>

					<div class="mt-10 space-y-8">
						<div class="flex gap-4">
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
							>
								<Building2 class="h-6 w-6" />
							</div>
							<div>
								<h3 class="text-lg font-bold text-slate-900">For Sponsors</h3>
								<p class="mt-1 text-slate-600">
									Discuss site selection, feasibility, and pharmacovigilance partnerships.
								</p>
							</div>
						</div>
						<div class="flex gap-4">
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
							>
								<Users class="h-6 w-6" />
							</div>
							<div>
								<h3 class="text-lg font-bold text-slate-900">For Volunteers</h3>
								<p class="mt-1 text-slate-600">
									Inquire about current enrolling studies and eligibility criteria.
								</p>
							</div>
						</div>

						<div class="mt-8 border-t border-slate-100 pt-8">
							<div class="flex items-center gap-4">
								<Phone class="h-5 w-5 text-emerald-600" />
								<span class="font-semibold text-slate-900">+44 (0) 1908 03 2992</span>
							</div>
							<div class="mt-4 flex items-center gap-4">
								<Mail class="h-5 w-5 text-emerald-600" />
								<span class="font-semibold text-slate-900">info@stemaxconsult.com</span>
							</div>
							<div class="mt-4 flex items-center gap-4">
								<MapPin class="h-5 w-5 text-emerald-600" />
								<span class="text-slate-600"
									>Old Stratford Business Park, Milton Keynes MK19 6FG</span
								>
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 lg:p-10">
					<form class="space-y-6">
						<h3 class="text-xl font-bold text-slate-900">Send us a Message</h3>
						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div>
								<label for="full-name" class="block text-sm leading-6 font-medium text-slate-900"
									>Full Name</label
								>
								<input
									type="text"
									id="full-name"
									class="mt-2 block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-emerald-600 sm:text-sm"
								/>
							</div>
							<div>
								<label for="email" class="block text-sm leading-6 font-medium text-slate-900"
									>Email</label
								>
								<input
									type="email"
									id="email"
									class="mt-2 block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-emerald-600 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label for="interest" class="block text-sm leading-6 font-medium text-slate-900"
								>I am interested in...</label
							>
							<select
								id="interest"
								class="mt-2 block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-emerald-600 sm:text-sm"
							>
								<option>Sponsoring a Trial</option>
								<option>Pharmacovigilance Services</option>
								<option>Volunteering for a Study</option>
								<option>General Inquiry</option>
							</select>
						</div>

						<div>
							<label for="message" class="block text-sm leading-6 font-medium text-slate-900"
								>Message</label
							>
							<textarea
								id="message"
								rows="4"
								class="mt-2 block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-emerald-600 sm:text-sm"
							></textarea>
						</div>

						<button
							type="submit"
							class="w-full rounded-xl bg-emerald-700 px-3.5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
						>
							Submit Inquiry
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="bg-slate-900 py-12 text-slate-400">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-4">
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white"
					>
						<span class="font-bold">S</span>
					</div>
					<span class="text-xl font-bold text-white">STEMAX</span>
				</div>
				<p class="text-sm leading-6">
					Excellence in Clinical Research and Pharmacovigilance. Regulated by Care Quality
					Commission.
				</p>
			</div>

			<div>
				<h3 class="text-sm leading-6 font-semibold text-white">Services</h3>
				<ul class="mt-4 space-y-2 text-sm">
					<li><a href="#clinical-trials" class="hover:text-emerald-400">Clinical Trials</a></li>
					<li>
						<a href="#pharmacovigilance" class="hover:text-emerald-400">Adverse Event Reporting</a>
					</li>
					<li>
						<a href="#pharmacovigilance" class="hover:text-emerald-400">Risk Management</a>
					</li>
					<li>
						<a href="#pharmacovigilance" class="hover:text-emerald-400">Training Programs</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm leading-6 font-semibold text-white">Partners</h3>
				<ul class="mt-4 space-y-2 text-sm">
					<li><a href="#for-sponsors" class="hover:text-emerald-400">For Sponsors</a></li>
					<li><a href="#for-patients" class="hover:text-emerald-400">For Volunteers</a></li>
					<li><a href="#contact" class="hover:text-emerald-400">Contact Support</a></li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm leading-6 font-semibold text-white">Legal</h3>
				<ul class="mt-4 space-y-2 text-sm">
					<li><a href="#" class="hover:text-emerald-400">Privacy Policy</a></li>
					<li><a href="#" class="hover:text-emerald-400">Terms of Service</a></li>
				</ul>
			</div>
		</div>
		<div class="mt-12 border-t border-slate-800 pt-8 text-center text-xs">
			<p>&copy; {currentYear} Stemax Consult Healthcare Services Ltd. All rights reserved.</p>
		</div>
	</div>
</footer>
