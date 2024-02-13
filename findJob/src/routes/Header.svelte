<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof document !== 'undefined') {
			import('bootstrap/dist/css/bootstrap.min.css');
			import('bootstrap/dist/js/bootstrap.bundle.min.js');
		}
	});
</script>

<header>
	<div class="container-fluid">
		<div class="container">
			<div class="row">
				<nav class="navbar navbar-expand-lg">
					<div class="container-fluid">
						<a class="navbar-brand" href="/"> </a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavDropdown">
							<ul class="navbar-nav">
								<li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
									<a class="nav-link" href="/"><span class="logo-head">Jobster</span></a>
								</li>

								<li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
									<a class="nav-link" href="/">Home</a>
								</li>
								<li
									class="nav-item"
									aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
								>
									<a class="nav-link" href="/about">About</a>
								</li>
								<li
									class="nav-item"
									aria-current={$page.url.pathname === '/findJob' ? 'page' : undefined}
								>
									<a class="nav-link" href="/findJob">FindJob</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
</header>

<style>
	.container-fluid {
		background-color: #ffffff !important;
	}
	.logo-head {
		font-size: 30px;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 30 0.5px;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
