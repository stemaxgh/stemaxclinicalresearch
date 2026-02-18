<script>
	// Using Svelte 5 state matching your +layout.svelte
	import { page } from '$app/state';
	import { AlertCircle, Home } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center px-4 text-center">
	<AlertCircle class="mb-6 h-20 w-20 text-emerald-700" />

	<h1 class="mb-2 text-7xl font-extrabold tracking-tight text-slate-900">
		{page.status}
	</h1>

	<h2 class="mb-6 text-2xl font-semibold tracking-tight text-slate-700 sm:text-3xl">
		{page.error?.message || 'Oops! Page not found.'}
	</h2>

	<p class="mb-8 max-w-md text-slate-500">
		The page you are looking for might have been removed, had its name changed, or is temporarily
		unavailable.
	</p>

	<a
		href="/"
		class="inline-flex items-center gap-2 bg-emerald-700 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-emerald-800 md:px-10 md:py-4 md:text-lg"
	>
		<Home class="h-5 w-5" />
		Back to Homepage
	</a>
</div>
