<script>
	import {
		Check,
		ExternalLink,
		Phone,
		ClipboardCheck,
		Menu,
		X,
		Search,
		ChevronRight,
		Clock,
		Syringe,
		Calendar,
		Mail,
		MapPin,
		User
	} from 'lucide-svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import {
		services,
		serviceCategories,
		stats,
		features,
		team,
		testimonials,
		studies,
		getCategoryLabel,
		getAllServices
	} from '$lib/data';

	// --------------------------------------------------------------------------
	// HEADER LOGIC
	// --------------------------------------------------------------------------
	let mobileMenuOpen = $state(false);
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// --------------------------------------------------------------------------
	// FOOTER LOGIC
	// --------------------------------------------------------------------------
	const currentYear = new Date().getFullYear();

	// --------------------------------------------------------------------------
	// SERVICE SECTION & MODAL LOGIC
	// --------------------------------------------------------------------------
	let activeTab = $state('all');
	let searchQuery = $state('');
	let showAllServices = $state(false);
	let modalOpen = $state(false);
	let selectedServiceDetails = $state(null);

	function openServiceModal(service) {
		selectedServiceDetails = service;
		modalOpen = true;
	}

	function closeModal() {
		modalOpen = false;
		selectedServiceDetails = null;
	}

	const allServicesList = getAllServices();
	const filterBySearchQuery = (service) => {
		const query = searchQuery.toLowerCase();
		return (
			service.name.toLowerCase().includes(query) ||
			(service.details && service.details.toLowerCase().includes(query))
		);
	};

	let filteredServices = $derived(
		searchQuery
			? allServicesList.filter(filterBySearchQuery)
			: activeTab === 'all'
				? allServicesList
				: services[activeTab]
	);

	let displayedServices = $derived(
		activeTab === 'all' && !showAllServices && !searchQuery
			? filteredServices.slice(0, 10)
			: filteredServices
	);

	// --------------------------------------------------------------------------
	// CTA SECTION LOGIC
	// --------------------------------------------------------------------------
	let selectedService = $state('');
	let showPricing = $state(false);

	let ctaServiceDetails = $derived(
		selectedService ? allServicesList.find((service) => service.name === selectedService) : null
	);

	function handleSelectChange(event) {
		selectedService = event.target.value;
		showPricing = !!event.target.value;
	}
</script>

<svelte:head>
	<title>Stemax Healthcare Consultancy | Occupational Health Services UK</title>
	<meta name="title" content="Stemax Healthcare Consultancy | Occupational Health Services UK" />
	<meta
		name="description"
		content="Professional occupational health services including vaccinations, medical assessments, and health surveillance for businesses across the UK. Based in Milton Keynes."
	/>
	<meta
		name="keywords"
		content="occupational health, corporate vaccinations, health assessments, medical services, OGUK medical, HGV medical, Milton Keynes"
	/>
	<link rel="canonical" href="https://www.stemaxmedical.co.uk" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.stemaxmedical.co.uk" />
	<meta
		property="og:title"
		content="Stemax Healthcare Consultancy | Professional Medical Services"
	/>
	<meta
		property="og:description"
		content="Comprehensive healthcare solutions for businesses including vaccinations, occupational health assessments, and mobile services."
	/>
	<meta property="og:image" content="https://www.stemaxmedical.co.uk/favicon.png" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.stemaxmedical.co.uk" />
	<meta
		property="twitter:title"
		content="Stemax Healthcare Consultancy | Professional Medical Services"
	/>
	<meta
		property="twitter:description"
		content="Comprehensive healthcare solutions for businesses including vaccinations, occupational health assessments, and mobile clinic services."
	/>
	<meta property="twitter:image" content="https://www.stemaxmedical.co.uk/twitter-image.jpg" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#047857" />
	<meta name="author" content="Stemax Consult Healthcare Services Ltd" />
	<meta name="robots" content="index, follow" />
	<meta name="google" content="notranslate" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Medical Clinic",
			"name": "Stemax Healthcare Consultancy",
			"image": "https://www.stemaxmedical.co.uk/favicon.png",
			"url": "https://www.stemaxmedical.co.uk",
			"telephone": "+441908032992",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Ground Floor Suite F, Old Stratford Business Park, Falcon Drive",
				"addressLocality": "Old Stratford, Milton Keynes",
				"postalCode": "MK19 6FG",
				"addressCountry": "UK"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 52.1234,
				"longitude": -0.5678
			},
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				"opens": "09:00",
				"closes": "17:00"
			},
			"sameAs": [
				"https://www.facebook.com/stemaxconsult",
				"https://www.linkedin.com/company/stemax-consultancy"
			]
		}
	</script>
</svelte:head>

<header
	class="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all duration-200 supports-backdrop-blur:bg-white/95"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<div class="flex shrink-0 items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-lg"
				>
					<span class="text-xl font-bold">S</span>
				</div>
				<div class="flex flex-col">
					<span class="text-xl font-bold tracking-tight text-slate-900">STEMAX</span>
					<span class="text-xs font-medium tracking-wide text-slate-500 uppercase"
						>Healthcare Consultancy</span
					>
				</div>
			</div>

			<nav class="hidden space-x-1 md:flex">
				{#each ['Services', 'Clinical Trials', 'About', 'Testimonials'] as item}
					<a
						href="#{item.toLowerCase().replace(' ', '-')}"
						class="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
					>
						{item}
					</a>
				{/each}
				<a
					href="#book"
					class="ml-4 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-800 hover:shadow-md active:translate-y-0.5"
				>
					Book Now
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
				{#each ['Services', 'Clinical Trials', 'About', 'Testimonials', 'Contact'] as item}
					<a
						href="#{item.toLowerCase().replace(' ', '-')}"
						class="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
						onclick={toggleMobileMenu}
					>
						{item}
					</a>
				{/each}
				<a
					href="#book"
					class="mt-4 block w-full rounded-lg bg-emerald-700 px-3 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-emerald-800"
					onclick={toggleMobileMenu}
				>
					Book an Appointment
				</a>
			</div>
		</div>
	{/if}
</header>

<main>
	<section class="relative overflow-hidden bg-slate-50 pt-16 pb-20 lg:pt-32 lg:pb-28">
		<div class="absolute inset-0 z-0 opacity-40">
			<div
				class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl filter"
			></div>
			<div
				class="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl filter"
			></div>
		</div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:text-left">
				<div>
					<div
						class="mb-6 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset"
					>
						<span class="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
						Trusted Healthcare Partner since 2007
					</div>
					<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
						<span class="block">Professional Healthcare</span>
						<span
							class="block bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-emerald-700 text-transparent"
							>Solutions for Business</span
						>
					</h1>
					<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-600 lg:mx-0">
						Stemax Consultancy offers comprehensive occupational health services, including medical
						assessments, vaccinations, and health surveillance programs tailored to your company's
						needs.
					</p>
					<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
						<a
							href="#book"
							class="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-emerald-900/20"
						>
							Book a Service
						</a>
						<a
							href="#services"
							class="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:text-emerald-700"
						>
							Explore Services
						</a>
					</div>

					<div class="mt-12 hidden grid-cols-3 gap-8 border-t border-slate-200/60 pt-8 lg:grid">
						{#each stats.slice(0, 3) as stat}
							<div>
								<p class="text-3xl font-bold text-slate-900">{stat.value}</p>
								<p class="text-sm text-slate-500">{stat.label}</p>
							</div>
						{/each}
					</div>
				</div>

				<div class="relative mt-16 hidden lg:mt-0 lg:block">
					<div
						class="relative mx-auto w-full rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-slate-900/5"
					>
						<div class="mb-8 flex items-center justify-between">
							<div class="h-3 w-20 rounded-full bg-slate-200"></div>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
							>
								<User size={16} />
							</div>
						</div>
						<div class="space-y-4">
							<div
								class="flex h-24 w-full gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
							>
								<div class="h-12 w-12 shrink-0 rounded-lg bg-emerald-100"></div>
								<div class="w-full space-y-2">
									<div class="h-4 w-2/3 rounded bg-slate-200"></div>
									<div class="h-3 w-1/2 rounded bg-slate-100"></div>
								</div>
							</div>
							<div
								class="flex h-24 w-full gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
							>
								<div class="h-12 w-12 shrink-0 rounded-lg bg-blue-100"></div>
								<div class="w-full space-y-2">
									<div class="h-4 w-3/4 rounded bg-slate-200"></div>
									<div class="h-3 w-1/3 rounded bg-slate-100"></div>
								</div>
							</div>
							<div
								class="flex h-24 w-full gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
							>
								<div class="h-12 w-12 shrink-0 rounded-lg bg-orange-100"></div>
								<div class="w-full space-y-2">
									<div class="h-4 w-1/2 rounded bg-slate-200"></div>
									<div class="h-3 w-2/3 rounded bg-slate-100"></div>
								</div>
							</div>
						</div>
						<div
							class="absolute -right-6 -bottom-6 rounded-xl bg-slate-900 p-4 text-white shadow-xl"
						>
							<div class="flex items-center gap-3">
								<div class="flex -space-x-2">
									<div class="h-8 w-8 rounded-full bg-slate-700 ring-2 ring-slate-900"></div>
									<div class="h-8 w-8 rounded-full bg-slate-600 ring-2 ring-slate-900"></div>
									<div class="h-8 w-8 rounded-full bg-slate-500 ring-2 ring-slate-900"></div>
								</div>
								<div class="text-xs font-medium">
									<span class="block text-emerald-400">500+</span>
									Corporate Clients
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-white py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="text-base leading-7 font-semibold tracking-wide text-emerald-600 uppercase">
					Why Choose Stemax
				</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					Excellence in Occupational Health
				</p>
				<p class="mt-6 text-lg leading-8 text-slate-600">
					We deliver professional healthcare services with efficiency, expertise, and a commitment
					to your workforce's wellbeing.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each features as feature}
					<div
						class="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
					>
						<div
							class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white"
						>
							<Check class="h-7 w-7" />
						</div>
						<h3
							class="text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700"
						>
							{feature.title}
						</h3>
						<p class="mt-4 text-base leading-relaxed text-slate-600">
							{feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="services" class="bg-slate-50 py-20 lg:py-32">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-12 max-w-3xl text-center">
				<h2 class="text-base leading-7 font-semibold tracking-wide text-emerald-600 uppercase">
					Our Services
				</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					Comprehensive Healthcare Solutions
				</p>
			</div>

			<div class="flex flex-col gap-8">
				<div class="relative mx-auto w-full max-w-lg">
					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"
					>
						<Search class="h-5 w-5" />
					</div>
					<input
						type="text"
						placeholder="Search services (e.g., 'Vaccine', 'HGV', 'Blood test')..."
						bind:value={searchQuery}
						class="block w-full rounded-full border-0 py-3.5 pr-4 pl-11 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600 focus:ring-inset sm:text-sm sm:leading-6"
					/>
				</div>

				<div class="flex flex-wrap justify-center gap-2">
					{#each serviceCategories as category}
						<button
							onclick={() => (activeTab = category.id)}
							class="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 {activeTab ===
							category.id
								? 'bg-emerald-700 text-white shadow-md'
								: 'bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-emerald-50 hover:text-emerald-700'}"
						>
							{category.label}
							{#if category.id === 'all'}
								<span
									class="ml-2 inline-flex items-center justify-center rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold"
								>
									{allServicesList.length}
								</span>
							{:else if services[category.id]}
								<span
									class="ml-2 inline-flex items-center justify-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600"
									class:text-white={activeTab === category.id}
									class:bg-emerald-600={activeTab === category.id}
								>
									{services[category.id].length}
								</span>
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
				{#if filteredServices.length === 0}
					<div class="col-span-full py-16 text-center">
						<div
							class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100"
						>
							<Search class="h-8 w-8 text-slate-400" />
						</div>
						<h3 class="text-lg font-medium text-slate-900">No services found</h3>
						<p class="mt-1 text-slate-500">Try adjusting your search terms or filter category.</p>
						<button
							onclick={() => (searchQuery = '')}
							class="mt-6 font-medium text-emerald-600 hover:text-emerald-500"
						>
							Clear Search
						</button>
					</div>
				{:else}
					{#each displayedServices as service (service.name)}
						<div
							transition:fade={{ duration: 200 }}
							class="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
						>
							<div class="flex h-full flex-col p-6">
								<div class="mb-4">
									{#if service.category}
										<span
											class="mb-2 inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset"
										>
											{getCategoryLabel(service.category)}
										</span>
									{/if}
									<h3 class="mt-2 line-clamp-2 min-h-[3.5rem] text-lg font-bold text-slate-900">
										{service.name}
									</h3>
									<p class="mt-2 text-2xl font-bold tracking-tight text-emerald-700">
										{service.price}
									</p>
								</div>

								<div class="mb-6 flex-grow space-y-3">
									<div class="flex items-center gap-3 text-sm text-slate-600">
										<Clock class="h-4 w-4 shrink-0 text-emerald-500" />
										<span>{service.duration}</span>
									</div>
									{#if service.doses}
										<div class="flex items-center gap-3 text-sm text-slate-600">
											<Syringe class="h-4 w-4 shrink-0 text-emerald-500" />
											<span>{service.doses} {service.doses === 1 ? 'dose' : 'doses'} required</span>
										</div>
									{/if}
									{#if service.details}
										<p class="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-500">
											{service.details}
										</p>
									{/if}
								</div>

								<button
									onclick={() => openServiceModal(service)}
									class="mt-auto flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
								>
									Book Appointment
								</button>
							</div>
						</div>
					{/each}

					{#if activeTab === 'all' && !showAllServices && !searchQuery && filteredServices.length > 10}
						<button
							class="group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-8 text-center transition-all hover:border-emerald-300 hover:bg-emerald-50"
							onclick={() => (showAllServices = true)}
						>
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200"
							>
								<ChevronRight class="h-6 w-6" />
							</div>
							<p class="text-lg font-semibold text-emerald-900">View All Services</p>
							<p class="text-sm text-emerald-600/80">
								{filteredServices.length - 10} more available
							</p>
						</button>
					{/if}
				{/if}
			</div>

			<div class="mt-16 text-center">
				<p class="mb-6 text-slate-600">Can't find what you're looking for?</p>
				<a
					href="#contact"
					class="flex items-center justify-center gap-2 font-semibold text-emerald-700 hover:text-emerald-600"
				>
					Contact our support team <ChevronRight class="h-4 w-4" />
				</a>
			</div>
		</div>
	</section>

	<section id="clinical-trials" class="bg-white py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto mb-16 max-w-3xl md:text-center">
				<h2 class="text-base leading-7 font-semibold tracking-wide text-emerald-600 uppercase">
					Research & Development
				</h2>
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					Current Clinical Trials
				</h2>
				<p class="mt-4 text-lg text-slate-600">
					Participate in medical research to help pave the way for future treatments. All related
					evaluations are complimentary.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				{#each studies as study}
					<div
						class="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
					>
						<div class="mb-5 flex items-center justify-between">
							<span
								class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset"
								class:bg-emerald-50={study.status === 'Enrolling'}
								class:text-emerald-700={study.status === 'Enrolling'}
								class:ring-emerald-600={study.status === 'Enrolling'}
								class:bg-slate-50={study.status !== 'Enrolling'}
								class:text-slate-600={study.status !== 'Enrolling'}
								class:ring-slate-500={study.status !== 'Enrolling'}
							>
								{study.status}
							</span>
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
								class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
							>
								Register Interest <ExternalLink class="h-4 w-4" />
							</a>
						{:else}
							<div
								class="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-400"
							>
								Registration Closed
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
					About Us
				</h2>
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Meet Our Specialists
				</h2>
				<p class="mt-6 text-lg leading-8 text-slate-300">
					Our experienced healthcare professionals have been providing exceptional services to
					businesses across the UK since 2007.
				</p>
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

	<section id="testimonials" class="bg-emerald-800 py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-16 text-center text-3xl font-bold text-white">What Our Clients Say</h2>
			<div class="grid gap-8 md:grid-cols-3">
				{#each testimonials as testimonial}
					<div class="relative rounded-2xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur-sm">
						<div class="absolute -top-4 -left-2 text-emerald-400 opacity-50">
							<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"
								><path
									d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"
								></path></svg
							>
						</div>
						<p class="relative z-10 text-lg leading-relaxed font-medium text-white">
							"{testimonial.quote}"
						</p>
						<div class="mt-6 border-t border-white/10 pt-6">
							<p class="font-bold text-white">{testimonial.author}</p>
							<p class="text-sm text-emerald-200">{testimonial.position}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="book" class="bg-white py-20 lg:py-28">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
				<div>
					<h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
						Ready to Book?
					</h2>
					<p class="mt-4 text-lg text-slate-600">
						Schedule an appointment with our healthcare professionals today. Use the form to request
						a specific service or general consultation.
					</p>

					<div class="mt-10 space-y-6">
						<div class="flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
							>
								<Phone class="h-6 w-6" />
							</div>
							<div>
								<p class="text-sm font-medium text-slate-500">Call Us</p>
								<p class="text-lg font-bold text-slate-900">+44 (0) 1908 03 2992</p>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
							>
								<Mail class="h-6 w-6" />
							</div>
							<div>
								<p class="text-sm font-medium text-slate-500">Email Us</p>
								<p class="text-lg font-bold text-slate-900">info@stemaxconsult.com</p>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
							>
								<MapPin class="h-6 w-6" />
							</div>
							<div>
								<p class="text-sm font-medium text-slate-500">Visit Us</p>
								<p class="text-lg font-bold text-slate-900">
									Old Stratford Business Park, Milton Keynes
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 lg:p-10">
					<form class="space-y-6">
						<div>
							<label for="service-select" class="block text-sm leading-6 font-medium text-slate-900"
								>Select Service</label
							>
							<div class="mt-2">
								<select
									id="service-select"
									bind:value={selectedService}
									onchange={handleSelectChange}
									class="block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-emerald-600 focus:ring-inset sm:text-sm sm:leading-6"
								>
									<option value="">-- Choose a service --</option>
									<optgroup label="Vaccinations">
										{#each services.vaccines as s}
											<option value={s.name}>{s.name} - {s.price}</option>
										{/each}
									</optgroup>
									<optgroup label="Occupational Health">
										{#each services.occupational as s}
											<option value={s.name}>{s.name} - {s.price}</option>
										{/each}
									</optgroup>
								</select>
							</div>
						</div>

						{#if showPricing && ctaServiceDetails}
							<div class="rounded-xl bg-white p-4 ring-1 ring-slate-200">
								<div class="mb-2 flex items-center justify-between">
									<h4 class="font-semibold text-slate-900">{ctaServiceDetails.name}</h4>
									<span class="font-bold text-emerald-700">{ctaServiceDetails.price}</span>
								</div>
								<p class="text-sm text-slate-500">{ctaServiceDetails.duration}</p>
							</div>
						{/if}

						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div>
								<label for="full-name" class="block text-sm leading-6 font-medium text-slate-900"
									>Full Name</label
								>
								<div class="mt-2">
									<input
										type="text"
										id="full-name"
										class="block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600 focus:ring-inset sm:text-sm sm:leading-6"
										placeholder="John Doe"
									/>
								</div>
							</div>
							<div>
								<label for="email" class="block text-sm leading-6 font-medium text-slate-900"
									>Email</label
								>
								<div class="mt-2">
									<input
										type="email"
										id="email"
										class="block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600 focus:ring-inset sm:text-sm sm:leading-6"
										placeholder="you@example.com"
									/>
								</div>
							</div>
						</div>

						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div>
								<label for="date" class="block text-sm leading-6 font-medium text-slate-900"
									>Preferred Date</label
								>
								<div class="mt-2">
									<input
										type="date"
										id="date"
										class="block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-emerald-600 focus:ring-inset sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label for="phone" class="block text-sm leading-6 font-medium text-slate-900"
									>Phone</label
								>
								<div class="mt-2">
									<input
										type="tel"
										id="phone"
										class="block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600 focus:ring-inset sm:text-sm sm:leading-6"
										placeholder="+44..."
									/>
								</div>
							</div>
						</div>

						<div>
							<label for="notes" class="block text-sm leading-6 font-medium text-slate-900"
								>Additional Notes</label
							>
							<div class="mt-2">
								<textarea
									id="notes"
									rows="3"
									class="block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-slate-300 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600 focus:ring-inset sm:text-sm sm:leading-6"
								></textarea>
							</div>
						</div>

						<button
							type="submit"
							class="w-full rounded-xl bg-emerald-700 px-3.5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
						>
							Request Appointment
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>

{#if modalOpen && selectedServiceDetails}
	<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div
			transition:fade={{ duration: 300 }}
			class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
		></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div
					transition:fly={{ y: 20, duration: 300 }}
					class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
				>
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div class="mt-3 w-full text-center sm:mt-0 sm:text-left">
								<div class="mb-6 flex items-center justify-between">
									<h3 class="text-2xl leading-6 font-bold text-slate-900" id="modal-title">
										{selectedServiceDetails.name}
									</h3>
									<button
										onclick={closeModal}
										class="rounded-full bg-slate-100 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-500"
									>
										<X class="h-5 w-5" />
									</button>
								</div>

								<div class="mb-8 rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
									<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
										<div>
											<p class="text-sm font-medium text-slate-500">Price</p>
											<p class="text-xl font-bold text-emerald-700">
												{selectedServiceDetails.price}
											</p>
										</div>
										<div>
											<p class="text-sm font-medium text-slate-500">Duration</p>
											<p class="text-base text-slate-900">{selectedServiceDetails.duration}</p>
										</div>
										{#if selectedServiceDetails.doses}
											<div>
												<p class="text-sm font-medium text-slate-500">Required Doses</p>
												<p class="text-base text-slate-900">
													{selectedServiceDetails.doses}
												</p>
											</div>
										{/if}
									</div>
									{#if selectedServiceDetails.details}
										<div class="mt-4 border-t border-slate-200 pt-4">
											<p class="text-sm text-slate-600">{selectedServiceDetails.details}</p>
										</div>
									{/if}
								</div>

								<div class="rounded-xl border border-emerald-100 bg-emerald-50/50 p-6">
									<h4 class="mb-4 font-semibold text-emerald-900">Quick Booking Request</h4>
									<form class="space-y-4">
										<div class="grid grid-cols-2 gap-4">
											<input
												type="text"
												placeholder="Name"
												class="w-full rounded-lg border-slate-300 py-2.5 text-sm focus:ring-emerald-600"
											/>
											<input
												type="tel"
												placeholder="Phone"
												class="w-full rounded-lg border-slate-300 py-2.5 text-sm focus:ring-emerald-600"
											/>
										</div>
										<button
											class="w-full rounded-lg bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
										>
											Submit Request
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

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
					Providing quality healthcare services to businesses across the UK since 2007. Regulated by
					Care Quality Commission.
				</p>
				<div class="flex gap-4"></div>
			</div>

			<div>
				<h3 class="text-sm leading-6 font-semibold text-white">Services</h3>
				<ul class="mt-4 space-y-2 text-sm">
					<li><a href="#services" class="hover:text-emerald-400">Vaccinations</a></li>
					<li><a href="#services" class="hover:text-emerald-400">Immune Support</a></li>
					<li><a href="#services" class="hover:text-emerald-400">Occupational Health</a></li>
					<li><a href="#services" class="hover:text-emerald-400">Blood Tests</a></li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm leading-6 font-semibold text-white">Company</h3>
				<ul class="mt-4 space-y-2 text-sm">
					<li><a href="#about" class="hover:text-emerald-400">About Us</a></li>
					<li><a href="#testimonials" class="hover:text-emerald-400">Testimonials</a></li>
					<li><a href="#clinical-trials" class="hover:text-emerald-400">Clinical Trials</a></li>
					<li><a href="#contact" class="hover:text-emerald-400">Contact</a></li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm leading-6 font-semibold text-white">Contact</h3>
				<ul class="mt-4 space-y-3 text-sm">
					<li class="flex items-start gap-3">
						<MapPin class="h-5 w-5 shrink-0 text-emerald-500" />
						<span>Old Stratford Business Park,<br />Milton Keynes MK19 6FG</span>
					</li>
					<li class="flex items-center gap-3">
						<Phone class="h-5 w-5 shrink-0 text-emerald-500" />
						<a href="tel:+441908032992" class="hover:text-white">+44 (0) 1908 03 2992</a>
					</li>
					<li class="flex items-center gap-3">
						<Mail class="h-5 w-5 shrink-0 text-emerald-500" />
						<a href="mailto:info@stemaxconsult.com" class="hover:text-white"
							>info@stemaxconsult.com</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="mt-12 border-t border-slate-800 pt-8 text-center text-xs">
			<p>&copy; {currentYear} Stemax Consult Healthcare Services Ltd. All rights reserved.</p>
		</div>
	</div>
</footer>
