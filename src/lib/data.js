// src/lib/data.js

export const sponsors = [
	{ name: 'Biohaven Pharmaceuticals' },
	{ name: 'Clinical Research Payment Network' },
	{ name: 'Accelsiors' },
	{ name: 'Moderna' }
];

export const pharmacovigilance = {
	intro: {
		title: 'Safeguarding Lives. Ensuring Drug Safety.',
		description:
			'With a strong commitment to patient safety and regulatory excellence, we provide comprehensive pharmacovigilance solutions to pharmaceutical companies, healthcare professionals, and research organizations worldwide.',
		subDescription:
			'Our expert team leverages advanced technologies and global regulatory standards to monitor, assess, and mitigate risks associated with medicinal products. Together, we ensure safer healthcare and full lifecycle drug safety compliance.',
		cta: 'We would love to hear from you — book a consultation to discuss your pharmacovigilance needs.'
	},
	values: {
		title: 'Our Values',
		description:
			'We are committed to maintaining the highest ethical and regulatory standards across all areas of our operations.',
		goal: 'Our goal is to work closely with sponsors, healthcare providers, and regulatory authorities, leveraging innovative technologies to deliver exceptional pharmacovigilance solutions while ensuring the safety, efficacy, and compliance of medicinal products through rigorous safety practices.'
	},
	services: [
		{
			title: 'Adverse Event Reporting and Management',
			items: [
				'Streamlined reporting systems for adverse drug reactions (ADRs)',
				'End-to-end case processing and lifecycle management',
				'Real-time safety monitoring and signal identification',
				'Global regulatory submission compliance'
			]
		},
		{
			title: 'Regulatory Compliance Support',
			items: [
				'Adherence to global pharmacovigilance regulations',
				'Customized solutions for local and international markets',
				'Audit preparation and inspection readiness',
				'QPPV support and pharmacovigilance system oversight'
			]
		},
		{
			title: 'Literature Monitoring and Medical Writing',
			items: [
				'Comprehensive scientific literature surveillance',
				'Preparation of high-quality pharmacovigilance documentation',
				'Narrative writing, aggregate reports, and regulatory submissions'
			]
		},
		{
			title: 'Risk Management Services',
			items: [
				'Development and implementation of Risk Management Plans (RMPs)',
				'Periodic Safety Update Reports (PSURs)',
				'Risk–Benefit Evaluation Reports',
				'Proactive safety strategies for high-risk medicinal products'
			]
		},
		{
			title: 'Signal Detection and Assessment',
			items: [
				'Advanced data mining and statistical safety analysis',
				'Early detection of emerging safety concerns',
				'Collaborative safety reviews with regulatory authorities'
			]
		}
	],
	inspectionReadiness: {
		title: 'Inspection Readiness Services',
		description:
			'Our customized programs help pharmaceutical companies prepare for regulatory inspections while ensuring full pharmacovigilance compliance.',
		items: [
			'Inspection readiness training',
			'Pharmacovigilance system master file (PSMF) support',
			'Internal audits',
			'Mock inspections and interviews',
			'Qualified Person for Pharmacovigilance (QPPV) representation'
		],
		conclusion: 'We help you achieve full regulatory confidence and inspection success.'
	},
	training: {
		title: 'Pharmacovigilance Training Programs',
		description:
			'Interested in pharmacovigilance training? We offer comprehensive training programs tailored for:',
		audiences: [
			'Professionals entering pharmaceutical safety roles',
			'Experienced pharmacovigilance specialists',
			'Senior management teams'
		],
		options: [
			'One-on-one sessions',
			'Small group workshops',
			'Introductory pharmacovigilance for non-scientists',
			'Drug safety and risk management training',
			'In-house corporate training',
			'SOP development and implementation training'
		],
		conclusion:
			'Strengthen your expertise. Advance your regulatory confidence. Elevate your pharmacovigilance systems.'
	}
};

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

export const team = [
	{
		name: 'Dr. Sarah Williams',
		role: 'Medical Director',
		bio: 'Dr. Williams has over 15 years of experience in clinical research and is a specialist in trial oversight.',
		color: 'bg-emerald-600'
	},
	{
		name: 'James Thompson',
		role: 'Head of Clinical Operations',
		bio: 'James specializes in trial management and regulatory compliance for international studies.',
		color: 'bg-emerald-700'
	},
	{
		name: 'Dr. Michael Chen',
		role: 'Principal Investigator',
		bio: 'Dr. Chen leads our clinical trials with extensive experience in immunology and internal medicine.',
		color: 'bg-emerald-800'
	},
	{
		name: 'Emma Roberts',
		role: 'Senior Research Nurse',
		bio: 'Emma coordinates patient care and ensures strict adherence to study protocols.',
		color: 'bg-emerald-600'
	}
];

// Retaining older data structures just in case, but they are not used in the new page
export const services = {};
export const serviceCategories = [];
export const stats = [];
export const features = [];
export const testimonials = [];
export function getCategoryLabel() {}
export function getAllServices() {}
