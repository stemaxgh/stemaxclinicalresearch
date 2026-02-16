<script>
	import { Check, ExternalLink, Phone, ClipboardCheck } from 'lucide-svelte';
	// import cqc from '$lib/assets/cqc.png'; // Uncomment if you have the asset
	// import favicon from '$lib/assets/favicon.png'; // Uncomment if you have the asset

	// --------------------------------------------------------------------------
	// DATA (from src/lib/data.js)
	// --------------------------------------------------------------------------
	const colors = {
		primary: '#047857', // emerald-700
		primaryDark: '#065f46', // emerald-800
		primaryLight: '#059669', // emerald-600
		secondary: '#0f172a', // slate-900
		background: '#f8fafc', // slate-50
		light: '#ffffff',
		text: '#1e293b', // slate-800
		textLight: '#64748b' // slate-500
	};

	const services = {
		vaccines: [
			{
				name: 'Hepatitis B',
				price: '£55.00',
				duration: '0, 1 & 6 months',
				doses: 3,
				booster: '5 years',
				details: 'Protects against Hepatitis B virus that can cause liver inflammation and damage.'
			},
			{
				name: 'Hepatitis B + Nurse visit',
				price: '£60.00',
				duration: '0, 1 & 6 months',
				doses: 3
			},
			{
				name: 'MMR (Measles/Mumps/Rubella)',
				price: '£70.00',
				duration: 'Two doses required',
				doses: 2,
				details:
					'Protects against measles, mumps, and rubella viruses which can cause serious complications.'
			},
			{
				name: 'MMR + Nurse visit',
				price: '£75.00',
				duration: 'Two doses required',
				doses: 2
			},
			{
				name: 'Chicken Pox (varicella)',
				price: '£70.00',
				duration: 'Two doses required',
				doses: 2,
				details: 'Provides immunity against the varicella virus which causes chickenpox.'
			},
			{
				name: 'Chicken Pox + Nurse visit',
				price: '£75.00',
				duration: 'Two doses required',
				doses: 2
			},
			{
				name: 'Mantoux Test & Read (skin test)',
				price: '£70.00',
				duration: 'Test 1st day, Reading at 72 hrs'
			},
			{
				name: 'Mantoux Test & Read + Nurse visit',
				price: '£80.00',
				duration: 'Test 1st day, Reading at 72 hrs'
			},
			{
				name: 'BCG TB vaccines',
				price: '£45.00',
				duration: 'One dose',
				doses: 1
			},
			{
				name: 'BCG Scar verify',
				price: '£35.00',
				duration: 'One visit'
			}
		],
		immune: [
			{
				name: 'Immune Booster (single)',
				price: '£150.00',
				duration: 'One session',
				doses: 1,
				details: 'Vitamin and mineral IV therapy to help boost your immune system.'
			},
			{
				name: 'Immune Booster (5 sessions)',
				price: '£650.00',
				duration: 'Five sessions',
				doses: 5
			},
			{
				name: 'Vit C (10g) + glutathione (600mg)',
				price: '£110.00',
				duration: 'One session',
				doses: 1,
				details: 'High-dose vitamin C combined with glutathione for antioxidant support.'
			},
			{
				name: 'Myers Cocktail',
				price: '£170.00',
				duration: 'One session',
				doses: 1,
				details:
					'A nutrient cocktail given intravenously to help with various health conditions and improve energy.'
			},
			{
				name: 'Glutathione 1200mg (alone)',
				price: '£80.00',
				duration: 'One session',
				doses: 1
			},
			{
				name: 'B12 Methylcobalamin 5mg / 1ml',
				price: '£40.00',
				duration: 'One injection',
				doses: 1
			}
		],
		occupational: [
			{
				name: 'Safety Critical Medical Assessment',
				price: 'POA',
				duration: 'One session',
				details: 'Comprehensive medical assessment for safety-critical roles.'
			},
			{
				name: 'HGV/LGV/PSV medical',
				price: '£50.00',
				duration: 'One session',
				details:
					'Medical assessment required for Heavy Goods Vehicle, Large Goods Vehicle, or Public Service Vehicle licenses.'
			},
			{
				name: 'Pre-employment health questionnaire (paper-screen only)',
				price: '£25.00',
				duration: 'One assessment'
			},
			{
				name: 'Pre-employment health questionnaire with follow up',
				price: '£100.00',
				duration: 'Assessment with telephone consult'
			},
			{
				name: 'Preemployment (fitness for work) medical assessment',
				price: '£140.00',
				duration: 'One session'
			},
			{
				name: 'Oil & Gas UK (OGUK) medical',
				price: '£200.00',
				duration: 'One session'
			},
			{
				name: 'Oil & Gas UK (OGUK) medical plus ERT',
				price: '£250.00',
				duration: 'One session'
			},
			{
				name: 'Oil & Gas UK (OGUK) medical plus Fit to train',
				price: '£300.00',
				duration: 'One session'
			},
			{
				name: 'In water Fit to Train medicals',
				price: '£120.00',
				duration: 'One session'
			},
			{
				name: 'Working at height medicals',
				price: '£100.00',
				duration: 'One session'
			},
			{
				name: 'HSE diving medical',
				price: '£150.00',
				duration: 'One session'
			},
			{
				name: 'Padi diving medical',
				price: '£60.00',
				duration: 'One session'
			}
		],
		bloodtests: [
			{
				name: 'Full blood Count',
				price: '£40.00',
				duration: 'One test',
				details:
					'Measures several components of your blood including red and white blood cells, and platelets.'
			},
			{
				name: 'Biochemistry plus liver function tests',
				price: '£45.00',
				duration: 'One test',
				details:
					'Comprehensive blood test assessing liver function and general biochemistry markers.'
			},
			{
				name: 'Hepatitis B antibody (post immunisation)',
				price: '£50.00',
				duration: 'One test'
			},
			{
				name: 'Hepatitis B core antibodies',
				price: '£50.00',
				duration: 'One test'
			},
			{
				name: 'Hepatitis A antibodies',
				price: '£45.00',
				duration: 'One test'
			},
			{
				name: 'Measles, Mumps, Rubella antibodies',
				price: '£100.00',
				duration: 'One test'
			},
			{
				name: 'Chicken pox (Varicella) antibodies',
				price: '£45.00',
				duration: 'One test'
			},
			{
				name: 'TB Quantiferon Gold',
				price: '£70.00',
				duration: 'One test'
			},
			{
				name: 'Drug test 10 part',
				price: '£45.00',
				duration: 'One test'
			},
			{
				name: 'Alcohol test',
				price: '£25.00',
				duration: 'One test'
			}
		],
		consultation: [
			{
				name: '60 minutes Physician Consultation',
				price: '£260.00',
				duration: 'One consultation'
			},
			{
				name: '30 minutes Physician Consultation',
				price: '£120.00',
				duration: 'One consultation'
			},
			{
				name: '60 minutes Nutritional Consultation',
				price: '£120.00',
				duration: 'One consultation'
			},
			{
				name: '30 minutes Nutritional Consultation',
				price: '£60.00',
				duration: 'One consultation'
			},
			{
				name: '60 minutes Psychological counselling',
				price: '£100.00',
				duration: 'One consultation'
			},
			{
				name: '30 minutes Psychological counselling',
				price: '£60.00',
				duration: 'One consultation'
			}
		],
		diagnostic: [
			{
				name: 'Basic (Core Diagnostic test) FDx01',
				price: '£175.00',
				duration: 'One test'
			},
			{
				name: 'Comprehensive (Maximum Diagnostic test) FDx02',
				price: '£340.00',
				duration: 'One test'
			},
			{
				name: 'Vital (Diagnostic test) FDx03',
				price: '£285.00',
				duration: 'One test'
			},
			{
				name: 'Thyroid (CoreDiagnostic test) FDx14',
				price: '£200.00',
				duration: 'One test'
			},
			{
				name: 'Thyroid (VitalDiagnostic test) FDx15',
				price: '£340.00',
				duration: 'One test'
			},
			{
				name: 'Female Health FDx18',
				price: '£380.00',
				duration: 'One test'
			},
			{
				name: 'Male Health FDx19',
				price: '£350.00',
				duration: 'One test'
			},
			{
				name: 'Vitamins FDx04',
				price: '£70.00',
				duration: 'One test'
			}
		]
	};

	const serviceCategories = [
		{ id: 'all', label: 'All Services' },
		{ id: 'vaccines', label: 'Vaccinations' },
		{ id: 'immune', label: 'Immune Support' },
		{ id: 'occupational', label: 'Occupational Health' },
		{ id: 'bloodtests', label: 'Blood Tests' },
		{ id: 'consultation', label: 'Consultations' },
		{ id: 'diagnostic', label: 'Diagnostic Tests' }
	];

	function getCategoryLabel(categoryId) {
		const categoryMap = {
			vaccines: 'Vaccination',
			immune: 'Immune Support',
			occupational: 'Occupational Health',
			bloodtests: 'Blood Test',
			consultation: 'Consultation',
			diagnostic: 'Diagnostic Test'
		};
		return categoryMap[categoryId] || '';
	}

	function getAllServices() {
		return Object.keys(services).flatMap((category) =>
			services[category].map((service) => ({
				...service,
				category
			}))
		);
	}

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
	// STATS DATA
	// --------------------------------------------------------------------------
	let stats = [
		{ value: '15+', label: 'Years Experience' },
		{ value: '500+', label: 'Corporate Clients' },
		{ value: '25,000+', label: 'Vaccinations' },
		{ value: '98%', label: 'Client Satisfaction' }
	];

	// --------------------------------------------------------------------------
	// FEATURE DATA
	// --------------------------------------------------------------------------
	let features = [
		{
			title: 'Corporate Vaccinations',
			description:
				'Protect your workforce from preventable diseases with our comprehensive vaccination programs delivered at your workplace.'
		},
		{
			title: 'Occupational Health Assessments',
			description:
				'Ensure your employees are fit for their roles with our detailed medical assessments tailored to your industry requirements.'
		},
		{
			title: 'Mobile Clinic Services',
			description:
				'Our healthcare professionals can visit your workplace, minimizing disruption and maximizing convenience for your team.'
		},
		{
			title: 'Industry-Specific Solutions',
			description:
				'Specialized services for oil & gas, transportation, healthcare, and other sectors with unique health and safety requirements.'
		}
	];

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
	// ABOUT/TEAM DATA
	// --------------------------------------------------------------------------
	const team = [
		{
			name: 'Dr. Sarah Williams',
			role: 'Medical Director',
			bio: 'Dr. Williams has over 15 years of experience in occupational health and is a specialist in corporate wellness programs.',
			color: colors.primaryLight
		},
		{
			name: 'James Thompson',
			role: 'Head of Occupational Health',
			bio: 'James specializes in health surveillance and workplace assessments for high-risk industries including oil and gas.',
			color: colors.primary
		},
		{
			name: 'Dr. Michael Chen',
			role: 'Vaccination Specialist',
			bio: 'Dr. Chen leads our vaccination program and has extensive experience in travel medicine and immunology.',
			color: colors.primaryDark
		},
		{
			name: 'Emma Roberts',
			role: 'Senior Nurse Practitioner',
			bio: 'Emma has specialized in occupational health for 10 years and coordinates our on-site vaccination programs.',
			color: colors.primaryLight
		}
	];

	// --------------------------------------------------------------------------
	// TESTIMONIAL DATA
	// --------------------------------------------------------------------------
	const testimonials = [
		{
			quote:
				'Stemax Consultancy provided excellent occupational health services for our company. Their professional approach and attention to detail impressed us greatly.',
			author: 'John Duningham',
			position: 'HR Director, Global Logistics Ltd'
		},
		{
			quote:
				'The team at Stemax made our corporate health assessment process smooth and efficient. Their mobile vaccination service saved us countless work hours.',
			author: 'Sarah Mitchell',
			position: 'Operations Manager, Tech Innovations Inc'
		},
		{
			quote:
				"We've been using Stemax for all our offshore medical certifications for over 3 years. Their understanding of oil and gas requirements is exceptional.",
			author: 'David Thompson',
			position: 'Safety Officer, North Sea Operations'
		}
	];

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

	// --------------------------------------------------------------------------
	// STUDIES DATA
	// --------------------------------------------------------------------------
	const studies = [
		{
			title: 'Chronic Obstructive Pulmonary Disease (COPD)',
			status: 'Enrolling',
			description:
				'Clinical study for individuals aged 40-80 diagnosed with moderate to severe COPD and a history of smoking (10+ years).',
			link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=7SrJMp_Y9E-00dDZb8k73y_lJxBdoUtHiOhODDGZZjhUMTRYTlNTQVZGOVlYNDdQSkRSUDBITFlLTi4u&amp'
		},
		{
			title: 'Lichen Simplex Chronicus (LSC)',
			status: 'Enrolling',
			description:
				'Study for those experiencing moderate to severe skin itch affecting sleep despite 6+ months of medication.',
			link: 'https://forms.office.com/e/HbGV7Na8cB?origin=lprLink'
		},
		{
			title: 'Covid-19 Vaccine Booster',
			status: 'Closed',
			description:
				'Clinical trial study for adults and children over 12 regarding vaccine boosters.',
			link: null
		},
		{
			title: 'Obsessive Compulsive Disorder (OCD)',
			status: 'Closed',
			description:
				'Study for individuals aged 18-65 diagnosed with OCD for at least one year with inadequate relief from current treatments.',
			link: null
		}
	];
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

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
	class="sticky top-0 z-50 border-b border-gray-200 bg-white"
	style="border-color: {colors.primaryLight}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="text-2xl font-bold" style="color: {colors.primary}">
					STEMAX
					<span class="ml-2 text-sm font-normal" style="color: {colors.textLight}"
						>Healthcare Consultancy</span
					>
				</div>
			</div>

			<nav class="hidden items-center justify-end space-x-10 md:flex">
				<a
					href="#services"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Services
				</a>
				<a
					href="#clinical-trials"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Clinical Trials
				</a>
				<a
					href="#about"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					About Us
				</a>
				<a
					href="#testimonials"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Testimonials
				</a>
				<a
					href="#contact"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Contact
				</a>
			</nav>

			<div class="flex md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center p-2"
					style="color: {colors.primary}"
					onclick={toggleMobileMenu}
				>
					{#if mobileMenuOpen}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="md:hidden">
			<div class="space-y-1 bg-white pt-2 pb-4">
				<a
					href="#services"
					class="block border-l-4 px-4 py-2 text-base font-medium"
					style="border-color: {colors.primary}; background-color: #f3f4f6"
					onclick={toggleMobileMenu}
				>
					Services
				</a>
				<a
					href="#clinical-trials"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium hover:bg-gray-50"
					onclick={toggleMobileMenu}
				>
					Clinical Trials
				</a>
				<a
					href="#about"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium"
					onclick={toggleMobileMenu}
				>
					About Us
				</a>
				<a
					href="#testimonials"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium"
					onclick={toggleMobileMenu}
				>
					Testimonials
				</a>
				<a
					href="#contact"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium"
					onclick={toggleMobileMenu}
				>
					Contact
				</a>
				<a
					href="#book"
					class="block px-4 py-2 text-base font-medium"
					style="background-color: {colors.primary}; color: {colors.light}"
					onclick={toggleMobileMenu}
				>
					Book Appointment
				</a>
			</div>
		</div>
	{/if}
</header>

<div style="display: contents">
	<div class="relative overflow-hidden" style="background-color: {colors.background}">
		<div class="mx-auto max-w-7xl">
			<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:p-32">
				<main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
					<div class="sm:text-center lg:text-left">
						<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							<span class="block" style="color: {colors.secondary}">Professional Healthcare</span>
							<span class="block" style="color: {colors.primary}">Solutions for Your Business</span>
						</h1>
						<p
							class="mt-3 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
							style="color: {colors.textLight}"
						>
							Stemax Consultancy offers comprehensive occupational health services, including
							medical assessments, vaccinations, and health surveillance programs tailored to your
							company's needs.
						</p>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="sm:flex">
								<a
									href="#book"
									class="flex items-center justify-center px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
									style="background-color: {colors.primary}"
								>
									Book a Service
								</a>
								<a
									href="#services"
									class="mt-3 flex items-center justify-center border px-8 py-3 text-base font-medium sm:mt-0 sm:ml-3 md:px-10 md:py-4 md:text-lg"
									style="border-color: {colors.primary}; color: {colors.primary}"
								>
									Explore Services
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>

	<section class="border-t border-b border-gray-200 py-12 md:py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
				{#each stats as stat (stat.label)}
					<div>
						<p class="text-4xl font-bold" style:color={colors.primary}>{stat.value}</p>
						<p class="mt-2 text-lg" style:color={colors.textLight}>{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-12 md:py-20" style:background-color={colors.background}>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 lg:text-center">
				<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
					Features
				</h2>
				<p
					class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
					style:color={colors.secondary}
				>
					Why Choose Stemax
				</p>
				<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
					We deliver professional healthcare services with efficiency, expertise, and excellence.
				</p>
			</div>

			<div class="mt-10">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					{#each features as feature (feature.title)}
						<div class="mt-4 flex border border-gray-200 p-6 md:mt-0">
							<div class="shrink-0">
								<div
									class="flex h-12 w-12 items-center justify-center text-white"
									style:background-color={colors.primary}
								>
									<Check class="h-6 w-6" />
								</div>
							</div>
							<div class="ml-4">
								<h3 class="text-lg font-medium" style:color={colors.text}>
									{feature.title}
								</h3>
								<p class="mt-2" style:color={colors.textLight}>{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section id="services" class="py-12 md:py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 lg:text-center">
				<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
					Our Services
				</h2>
				<p
					class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
					style:color={colors.secondary}
				>
					Comprehensive Healthcare Solutions
				</p>
				<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
					We offer a wide range of healthcare services to meet the needs of your business and
					employees.
				</p>
			</div>

			<div class="mt-12">
				<div class="mx-auto mb-8 max-w-md">
					<div class="relative">
						<input
							type="text"
							placeholder="Search services..."
							bind:value={searchQuery}
							class="w-full border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none"
							style:border-color={colors.primary}
						/>
						<button
							aria-label="button"
							class="absolute top-0 right-0 flex h-full items-center justify-center px-4"
							style:color={colors.primary}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>

				<div class="border-b border-gray-200">
					<div class="flex overflow-x-auto md:justify-center">
						{#each serviceCategories as category (category.id)}
							<button
								onclick={() => (activeTab = category.id)}
								class="relative mt-2 flex-shrink-0 border-b-2 px-3 py-4 text-center text-sm font-medium sm:w-auto sm:px-6"
								class:border-emerald-700={activeTab === category.id}
								class:border-transparent={activeTab !== category.id}
								class:text-emerald-700={activeTab === category.id}
								class:text-gray-500={activeTab !== category.id}
								class:hover:text-gray-700={activeTab !== category.id}
								class:hover:border-gray-300={activeTab !== category.id}
								style="border-color: {activeTab === category.id
									? colors.primary
									: 'transparent'}; color: {activeTab === category.id
									? colors.primary
									: colors.textLight}"
							>
								{#if category.id === 'all'}
									<span
										class="absolute -top-2 left-1/2 flex h-5 w-auto -translate-x-1/2 transform items-center justify-center rounded-full bg-emerald-700 px-1.5 text-xs text-white"
										style:background-color={colors.primary}
									>
										{allServicesList.length}
									</span>
								{:else if services[category.id]}
									<span
										class="absolute -top-2 left-1/2 flex h-5 w-auto -translate-x-1/2 transform items-center justify-center rounded-full bg-emerald-700 px-1.5 text-xs text-white"
										style:background-color={activeTab === category.id
											? colors.primary
											: colors.textLight}
									>
										{services[category.id].length}
									</span>
								{/if}
								{category.label}
							</button>
						{/each}
					</div>
				</div>

				{#if filteredServices.length === 0}
					<div class="mt-8 border border-gray-200 py-12 text-center">
						<p class="text-lg" style:color={colors.textLight}>
							No services found matching your search criteria.
						</p>
						<button
							onclick={() => (searchQuery = '')}
							class="mt-4 px-4 py-2 text-white"
							style:background-color={colors.primary}
						>
							Clear Search
						</button>
					</div>
				{:else}
					<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each displayedServices as service (service.name)}
							<div
								class="flex h-full flex-col border border-gray-200 shadow-sm"
								style:background-color={colors.light}
							>
								<div class="flex-grow p-6">
									<div class="flex items-start justify-between">
										<div>
											<div class="mb-2 flex items-center gap-2">
												<h3 class="text-lg font-semibold" style:color={colors.text}>
													{service.name}
												</h3>
											</div>
											{#if service.category}
												<p class="mb-2 text-xs" style:color={colors.textLight}>
													{getCategoryLabel(service.category)}
												</p>
											{/if}
											<p class="text-xl font-bold" style:color={colors.primary}>
												{service.price}
											</p>
										</div>
									</div>

									<div class="mt-2 flex items-center gap-2 text-sm" style:color={colors.textLight}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<circle cx="12" cy="12" r="10"></circle>
											<polyline points="12 6 12 12 16 14"></polyline>
										</svg>
										<span>{service.duration}</span>
									</div>

									{#if service.details}
										<p class="mt-3 text-sm" style:color={colors.text}>
											{service.details}
										</p>
									{/if}

									{#if service.doses}
										<div class="mt-4 flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-4 w-4"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												style:color={colors.primary}
											>
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
											<span class="text-sm"
												>{service.doses}
												{service.doses === 1 ? 'dose' : 'doses'} required</span
											>
										</div>
									{/if}
								</div>

								<div class="mt-auto border-t border-gray-200 px-6 py-4">
									<button
										onclick={() => openServiceModal(service)}
										class="flex w-full items-center justify-center border border-transparent px-4 py-2 text-sm font-medium text-white"
										style:background-color={colors.primary}
									>
										Book Appointment
									</button>
								</div>
							</div>
						{/each}

						{#if activeTab === 'all' && !showAllServices && !searchQuery && filteredServices.length > 10}
							<button
								class="flex h-full cursor-pointer flex-col items-center justify-center border border-dashed border-gray-200 p-6"
								onclick={() => (showAllServices = true)}
								style="background-color: rgba(4, 120, 87, 0.05)"
							>
								<div class="text-center">
									<p class="mb-2 text-lg font-medium" style:color={colors.primary}>
										View All Services
									</p>
									<p class="mb-4 text-sm text-gray-500">
										{filteredServices.length - 10} more services available
									</p>
									<div
										class="inline-flex h-10 w-10 items-center justify-center rounded-full"
										style:background-color={colors.primary}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 6v6m0 0v6m0-6h6m-6 0H6"
											/>
										</svg>
									</div>
								</div>
							</button>
						{/if}
					</div>
				{/if}

				<div class="mt-10 text-center">
					<a
						href="#book"
						class="inline-flex items-center justify-center border border-transparent px-8 py-3 text-base font-medium text-white"
						style:background-color={colors.primary}
					>
						Book a Service
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-2 h-5 w-5"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</a>
				</div>
			</div>
		</div>

		{#if modalOpen && selectedServiceDetails}
			<div
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
			>
				<div
					class="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-xl"
					style:border-color={colors.primary}
				>
					<div
						class="flex items-center justify-between border-b px-6 py-4"
						style:border-color={colors.primary}
					>
						<h3 class="text-xl font-bold" style:color={colors.primary}>
							{selectedServiceDetails.name}
						</h3>
						<button
							aria-label="close"
							onclick={closeModal}
							class="text-gray-500 hover:text-gray-700"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<div class="px-6 py-4">
						<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<p class="mb-1 text-sm text-gray-500">Category</p>
								{#if selectedServiceDetails.category}
									<p class="font-medium">
										{getCategoryLabel(selectedServiceDetails.category)}
									</p>
								{:else}
									<p class="font-medium">{getCategoryLabel(activeTab)}</p>
								{/if}
							</div>

							<div>
								<p class="mb-1 text-sm text-gray-500">Price</p>
								<p class="text-xl font-bold" style:color={colors.primary}>
									{selectedServiceDetails.price}
								</p>
							</div>

							<div>
								<p class="mb-1 text-sm text-gray-500">Duration</p>
								<p class="font-medium">{selectedServiceDetails.duration}</p>
							</div>

							{#if selectedServiceDetails.doses}
								<div>
									<p class="mb-1 text-sm text-gray-500">Required Doses</p>
									<p class="font-medium">
										{selectedServiceDetails.doses}
										{selectedServiceDetails.doses === 1 ? 'dose' : 'doses'}
									</p>
								</div>
							{/if}

							{#if selectedServiceDetails.booster}
								<div>
									<p class="mb-1 text-sm text-gray-500">Booster</p>
									<p class="font-medium">{selectedServiceDetails.booster}</p>
								</div>
							{/if}
						</div>

						{#if selectedServiceDetails.details}
							<div class="mb-6">
								<p class="mb-1 text-sm text-gray-500">Description</p>
								<p>{selectedServiceDetails.details}</p>
							</div>
						{/if}

						<div>
							<h4 class="mb-4 text-lg font-medium">Book this service</h4>
							<form class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="md:col-span-2">
									<label class="mb-1 block text-sm font-medium text-gray-700" for="name">
										Full Name
									</label>
									<input
										type="text"
										id="name"
										class="w-full border border-gray-300 px-3 py-2"
										placeholder="John Smith"
									/>
								</div>

								<div>
									<label class="mb-1 block text-sm font-medium text-gray-700" for="email">
										Email
									</label>
									<input
										type="email"
										id="email"
										class="w-full border border-gray-300 px-3 py-2"
										placeholder="john@example.com"
									/>
								</div>

								<div>
									<label class="mb-1 block text-sm font-medium text-gray-700" for="phone">
										Phone
									</label>
									<input
										type="tel"
										id="phone"
										class="w-full border border-gray-300 px-3 py-2"
										placeholder="+44 123 456 7890"
									/>
								</div>

								<div>
									<label class="mb-1 block text-sm font-medium text-gray-700" for="date">
										Preferred Date
									</label>
									<input type="date" id="date" class="w-full border border-gray-300 px-3 py-2" />
								</div>

								<div>
									<label class="mb-1 block text-sm font-medium text-gray-700" for="time">
										Preferred Time
									</label>
									<input type="time" id="time" class="w-full border border-gray-300 px-3 py-2" />
								</div>

								<div class="md:col-span-2">
									<label class="mb-1 block text-sm font-medium text-gray-700" for="notes">
										Additional Notes
									</label>
									<textarea
										id="notes"
										rows="3"
										class="w-full border border-gray-300 px-3 py-2"
										placeholder="Any specific requirements or questions"
									></textarea>
								</div>
							</form>
						</div>
					</div>

					<div
						class="flex justify-end gap-3 border-t px-6 py-4"
						style:border-color={colors.primary}
					>
						<button
							onclick={closeModal}
							class=" border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
						>
							Cancel
						</button>
						<button class=" px-4 py-2 text-white" style:background-color={colors.primary}>
							Confirm Booking
						</button>
					</div>
				</div>
			</div>
		{/if}
	</section>

	<section id="about" class="py-12 md:py-20" style:background-color={colors.background}>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 lg:text-center">
				<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
					About Us
				</h2>
				<p
					class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
					style:color={colors.secondary}
				>
					Meet Our Team
				</p>
				<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
					Our experienced healthcare professionals have been providing exceptional services to
					businesses across the UK since 2007.
				</p>
			</div>

			<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each team as member}
					<div class="flex flex-col items-center bg-white p-6 text-center shadow-lg">
						<div class="relative mb-4 h-32 w-32">
							<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<circle cx="50" cy="50" r="50" fill={member.color}></circle>

								<text
									x="50"
									y="58"
									font-family="Arial"
									font-size="24"
									font-weight="bold"
									text-anchor="middle"
									fill="white"
								>
									{member.name
										.split(' ')
										.map((n) => n[0])
										.join('')}
								</text>
							</svg>
						</div>

						<h3 class="mb-1 text-lg font-bold" style:color={colors.secondary}>
							{member.name}
						</h3>
						<p class="mb-3 text-sm font-medium" style:color={colors.primary}>
							{member.role}
						</p>
						<p class="text-sm" style:color={colors.textLight}>{member.bio}</p>

						<div class="mt-4 w-full border-t border-gray-100 pt-4">
							<a
								href="#contact"
								class="inline-flex items-center text-sm font-medium"
								style:color={colors.primary}
							>
								Contact
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="ml-1 h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="testimonials" class="py-12 md:py-20" style:background-color={colors.primary}>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 lg:text-center">
				<h2 class="text-base font-semibold tracking-wide text-white uppercase">Testimonials</h2>
				<p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
					What Our Clients Say
				</p>
			</div>

			<div class="mt-10 grid gap-8 md:grid-cols-3">
				{#each testimonials as testimonial (testimonial.author)}
					<div
						class="border p-6"
						style="border-color: {colors.primaryLight}; background-color: rgba(255, 255, 255, 0.1);"
					>
						<p class="mb-4 text-white">"{testimonial.quote}"</p>
						<div>
							<p class="font-semibold text-white">{testimonial.author}</p>
							<p class="text-emerald-200">{testimonial.position}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="book" class="py-12 md:py-20" style:background-color={colors.background}>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
					Get Started
				</h2>
				<p
					class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
					style:color={colors.secondary}
				>
					Ready to Book a Service?
				</p>
				<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
					Schedule an appointment with our healthcare professionals today.
				</p>
			</div>

			<div class="mx-auto mt-10 max-w-xl border border-gray-200 bg-white shadow-lg sm:mt-12">
				<div class="p-8">
					<form class="grid grid-cols-1 gap-y-6">
						<div>
							<label for="service" class="block text-sm font-medium" style:color={colors.text}>
								Select a Specific Service
							</label>
							<select
								id="service"
								name="service"
								value={selectedService}
								onchange={handleSelectChange}
								class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
								style:border-color={colors.primary}
							>
								<option value="">Select a service...</option>

								<optgroup label="Vaccinations">
									{#each services.vaccines as service (service.name)}
										<option value={service.name}>
											{service.name} - {service.price}
										</option>
									{/each}
								</optgroup>

								<optgroup label="Immune Support">
									{#each services.immune as service (service.name)}
										<option value={service.name}>
											{service.name} - {service.price}
										</option>
									{/each}
								</optgroup>

								<optgroup label="Occupational Health">
									{#each services.occupational as service (service.name)}
										<option value={service.name}>
											{service.name} - {service.price}
										</option>
									{/each}
								</optgroup>

								<optgroup label="Blood Tests">
									{#each services.bloodtests as service (service.name)}
										<option value={service.name}>
											{service.name} - {service.price}
										</option>
									{/each}
								</optgroup>
							</select>
						</div>

						{#if showPricing && ctaServiceDetails}
							<div class="my-2 border-t border-b border-gray-200 py-4">
								<h3 class="mb-2 font-medium">Service Details</h3>
								<div class="grid grid-cols-2 gap-2 text-sm">
									<div>
										<span class="block text-gray-500">Service:</span>
										<span class="font-medium">{ctaServiceDetails.name}</span>
									</div>
									<div>
										<span class="block text-gray-500">Price:</span>
										<span class="font-medium" style:color={colors.primary}
											>{ctaServiceDetails.price}</span
										>
									</div>
									<div>
										<span class="block text-gray-500">Duration:</span>
										<span>{ctaServiceDetails.duration}</span>
									</div>
									{#if ctaServiceDetails.doses}
										<div>
											<span class="block text-gray-500">Doses:</span>
											<span>{ctaServiceDetails.doses}</span>
										</div>
									{/if}
								</div>
								{#if ctaServiceDetails.details}
									<div class="mt-2">
										<span class="block text-gray-500">Details:</span>
										<p class="text-sm">{ctaServiceDetails.details}</p>
									</div>
								{/if}
							</div>
						{/if}

						<div>
							<label for="full-name" class="block text-sm font-medium" style:color={colors.text}>
								Full Name
							</label>
							<input
								type="text"
								name="full-name"
								id="full-name"
								class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
								placeholder="John Smith"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium" style:color={colors.text}>
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
								placeholder="john@example.com"
							/>
						</div>
						<div>
							<label for="phone" class="block text-sm font-medium" style:color={colors.text}>
								Phone Number
							</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
								placeholder="+44 123 456 7890"
							/>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div>
								<label for="date" class="block text-sm font-medium" style:color={colors.text}>
									Preferred Date
								</label>
								<input
									type="date"
									name="date"
									id="date"
									class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
								/>
							</div>
							<div>
								<label for="time" class="block text-sm font-medium" style:color={colors.text}>
									Preferred Time
								</label>
								<input
									type="time"
									name="time"
									id="time"
									class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium" style:color={colors.text}>
								Additional Notes
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
								placeholder="Any specific requirements or questions"
							></textarea>
						</div>
						<div>
							<button
								type="submit"
								class="inline-flex w-full items-center justify-center border border-transparent px-6 py-3 text-base font-medium text-white"
								style:background-color={colors.primary}
							>
								Book Appointment
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>

	<section id="contact" class="py-12 md:py-20" style:background-color={colors.light}>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 lg:text-center">
				<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
					Contact Us
				</h2>
				<p
					class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
					style:color={colors.secondary}
				>
					Get In Touch
				</p>
				<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
					Have questions about our services? Contact our team for more information.
				</p>
			</div>

			<div class="mt-10 grid gap-8 md:grid-cols-3">
				<a
					href="tel:+441908032992"
					class="flex flex-col items-center border border-gray-200 p-6 text-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mb-4"
						style:color={colors.primary}
					>
						<path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						></path>
					</svg>
					<h3 class="mb-2 text-lg font-medium" style:color={colors.text}>Phone</h3>
					<p style:color={colors.textLight}>+44 (0) 1908 03 2992</p>
				</a>

				<a
					href="mailto:info@stemaxconsult.com"
					class="flex flex-col items-center border border-gray-200 p-6 text-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mb-4"
						style:color={colors.primary}
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
					<h3 class="mb-2 text-lg font-medium" style:color={colors.text}>Email</h3>
					<p style:color={colors.textLight}>info@stemaxconsult.com</p>
				</a>

				<a
					href="https://maps.google.com/?q=Ground+Floor+Suite+F,+Old+Stratford+Business+Park,+Falcon+Drive,+Old+Stratford,+Milton+Keynes+MK19+6FG,+UK"
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-col items-center border border-gray-200 p-6 text-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mb-4"
						style:color={colors.primary}
					>
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
						<circle cx="12" cy="10" r="3"></circle>
					</svg>
					<h3 class="mb-2 text-lg font-medium" style:color={colors.text}>Address</h3>
					<p style:color={colors.textLight}>Ground Floor Suite F</p>
					<p style:color={colors.textLight}>Old Stratford Business Park</p>
					<p style:color={colors.textLight}>Falcon Drive, Old Stratford</p>
					<p style:color={colors.textLight}>Milton Keynes MK19 6FG</p>
				</a>
			</div>
		</div>
	</section>

	<section id="clinical-trials" class="py-20" style="background-color: {colors.background}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl" style="color: {colors.secondary}">
					Current Clinical Trials
				</h2>
				<p class="mt-4 text-lg" style="color: {colors.textLight}">
					Participate in medical research to help pave the way for future treatments.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				{#each studies as study (study.title)}
					<div
						class="flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
						style="border-color: {colors.primaryLight}33"
					>
						<div class="mb-4 flex items-center justify-between">
							<span
								class="rounded-full px-3 py-1 text-xs font-semibold"
								style="background-color: {study.status === 'Enrolling'
									? colors.primary + '22'
									: '#fee2e2'};
									 color: {study.status === 'Enrolling' ? colors.primary : '#ef4444'}"
							>
								{study.status}
							</span>
						</div>

						<h3 class="mb-3 text-xl font-bold" style="color: {colors.secondary}">
							{study.title}
						</h3>

						<p class="mb-6 flex-grow text-base" style="color: {colors.text}">
							{study.description}
						</p>

						{#if study.link && study.status === 'Enrolling'}
							<a
								href={study.link}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
								style="background-color: {colors.primary}; hover:background-color: {colors.primaryDark}"
							>
								Register Interest <ExternalLink class="ml-2 h-4 w-4" />
							</a>
						{:else}
							<button
								disabled
								class="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400"
							>
								Registration Closed
							</button>
						{/if}
					</div>
				{/each}
			</div>

			<div class="mt-16 rounded-2xl p-8 text-center" style="background-color: {colors.primary}11">
				<h4 class="mb-4 text-xl font-bold" style="color: {colors.primary}">Need Assistance?</h4>
				<p class="mb-6" style="color: {colors.text}">
					All related office visits, medical evaluations, and study medication are provided at no
					charge. Financial compensation for time and travel may be provided.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="tel:01908032992"
						class="flex items-center justify-center gap-2 font-bold"
						style="color: {colors.primary}"
					>
						<Phone class="h-5 w-5" /> 01908 032992
					</a>
					<span class="hidden text-gray-300 sm:block">|</span>
					<a
						href="https://stemaxconsult.com/contact-us"
						class="flex items-center justify-center gap-2 font-bold"
						style="color: {colors.primary}"
					>
						<ClipboardCheck class="h-5 w-5" /> General Interest Form
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

<footer class="border-t border-gray-200 py-8" style:background-color={colors.secondary}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<div>
				<div class="mb-4 text-xl font-bold text-white">
					STEMAX
					<span class="ml-2 text-xs font-normal text-gray-400">Healthcare Consultancy</span>
				</div>
				<p class="mb-4 text-gray-400">
					Providing quality healthcare services to businesses across the UK since 2007.
				</p>
				<p class="text-sm text-gray-400">
					VAT Registration: GB116 9732 02<br />
					Companies House: 07708197
				</p>
				<div class="mt-4">
					<p class="mb-1 text-xs text-gray-400">Regulated by Care Quality Commission</p>
					<a
						href="https://www.cqc.org.uk/provider/1-7805398732/registration-info"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block"
					>
						<div class="h-6.25 w-auto rounded border-2 border-gray-400 p-1 text-xs text-white">
							[CQC Image]
						</div>
					</a>
				</div>
			</div>

			<div>
				<h3 class="mb-4 font-medium text-white">Services</h3>
				<ul class="space-y-2">
					<li><a href="#" class="text-gray-400 hover:text-white">Vaccinations</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white">Immune Support</a></li>
					<li>
						<a href="#" class="text-gray-400 hover:text-white">Occupational Health</a>
					</li>
					<li><a href="#" class="text-gray-400 hover:text-white">Blood Tests</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 font-medium text-white">Company</h3>
				<ul class="space-y-2">
					<li><a href="#about" class="text-gray-400 hover:text-white">About Us</a></li>
					<li><a href="#services" class="text-gray-400 hover:text-white">Services</a></li>
					<li>
						<a href="#testimonials" class="text-gray-400 hover:text-white">Testimonials</a>
					</li>
					<li><a href="#contact" class="text-gray-400 hover:text-white">Contact</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 font-medium text-white">Contact</h3>
				<ul class="space-y-2">
					<li class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-2 h-5 w-5 text-gray-400"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							></path>
						</svg>
						<a href="tel:+441908032992" class="text-gray-400">+44 (0) 1908 03 2992</a>
					</li>
					<li class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-2 h-5 w-5 text-gray-400"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
						<a href="mailto:info@stemaxconsult.com" class="text-gray-400">info@stemaxconsult.com</a>
					</li>
					<li class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-2 h-5 w-5 text-gray-400"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<a
							href="https://maps.google.com/?q=Ground+Floor+Suite+F,+Old+Stratford+Business+Park,+Falcon+Drive,+Old+Stratford,+Milton+Keynes+MK19+6FG,+UK"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-white"
						>
							Milton Keynes MK19 6FG
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-800 pt-8">
			<p class="text-center text-sm text-gray-400">
				© {currentYear} Stemax Consult Healthcare Services Ltd. All rights reserved.
			</p>
			<p class="text-center text-sm text-gray-400">Made by Praful Munikumar</p>
		</div>
	</div>
</footer>
