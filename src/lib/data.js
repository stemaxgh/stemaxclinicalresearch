// src/lib/data.js

export const services = {
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
			details: 'Comprehensive blood test assessing liver function and general biochemistry markers.'
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

export const serviceCategories = [
	{ id: 'all', label: 'All Services' },
	{ id: 'vaccines', label: 'Vaccinations' },
	{ id: 'immune', label: 'Immune Support' },
	{ id: 'occupational', label: 'Occupational Health' },
	{ id: 'bloodtests', label: 'Blood Tests' },
	{ id: 'consultation', label: 'Consultations' },
	{ id: 'diagnostic', label: 'Diagnostic Tests' }
];

export const stats = [
	{ value: '15+', label: 'Years Experience' },
	{ value: '500+', label: 'Corporate Clients' },
	{ value: '25k+', label: 'Vaccinations' },
	{ value: '98%', label: 'Client Satisfaction' }
];

export const features = [
	{
		title: 'Corporate Vaccinations',
		description:
			'Protect your workforce from preventable diseases with our comprehensive vaccination programs delivered at your workplace.'
	},
	{
		title: 'Occupational Health',
		description:
			'Ensure your employees are fit for their roles with our detailed medical assessments tailored to your industry requirements.'
	},
	{
		title: 'Mobile Clinic Services',
		description:
			'Our healthcare professionals can visit your workplace, minimizing disruption and maximizing convenience for your team.'
	},
	{
		title: 'Industry Solutions',
		description:
			'Specialized services for oil & gas, transportation, healthcare, and other sectors with unique health and safety requirements.'
	}
];

export const team = [
	{
		name: 'Dr. Sarah Williams',
		role: 'Medical Director',
		bio: 'Dr. Williams has over 15 years of experience in occupational health and is a specialist in corporate wellness programs.',
		color: 'bg-emerald-600'
	},
	{
		name: 'James Thompson',
		role: 'Head of Occupational Health',
		bio: 'James specializes in health surveillance and workplace assessments for high-risk industries including oil and gas.',
		color: 'bg-emerald-700'
	},
	{
		name: 'Dr. Michael Chen',
		role: 'Vaccination Specialist',
		bio: 'Dr. Chen leads our vaccination program and has extensive experience in travel medicine and immunology.',
		color: 'bg-emerald-800'
	},
	{
		name: 'Emma Roberts',
		role: 'Senior Nurse Practitioner',
		bio: 'Emma has specialized in occupational health for 10 years and coordinates our on-site vaccination programs.',
		color: 'bg-emerald-600'
	}
];

export const testimonials = [
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

export const studies = [
	{
		title: 'Chronic Obstructive Pulmonary Disease (COPD)',
		status: 'Enrolling',
		description:
			'Clinical study for individuals aged 40-80 diagnosed with moderate to severe COPD and a history of smoking (10+ years).',
		link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=7SrJMp_Y9E-00dDZb8k73y_lJxBdoUtHiOhODDGZZjhUMTRYTlNTQVZGOVlYNDdQSkRSUDBITFlLTi4u&'
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
		description: 'Clinical trial study for adults and children over 12 regarding vaccine boosters.',
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

export function getCategoryLabel(categoryId) {
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

export function getAllServices() {
	return Object.keys(services).flatMap((category) =>
		services[category].map((service) => ({
			...service,
			category
		}))
	);
}
