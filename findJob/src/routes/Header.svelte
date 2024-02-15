<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import "../app.css"
	function toggleNavbar() {
    const navbarCollapse = document.getElementById('navbarNavDropdown');
    // @ts-ignore
    navbarCollapse.classList.toggle('hidden');
    // @ts-ignore
    navbarCollapse.classList.toggle('flex');
  }
</script>

<header>
	<div class="w-full mx-auto bg-white">
				<nav class="container mx-auto my-auto flex flex-wrap items-center justify-start py-3 ">
						<a class="lg:w-2/12 sm:w-6/12 font-bold ml-5" href="/"
							><strong class="text-blue-800 text-3xl" >J</strong><strong class=" text-3xl">obster</strong></a>
						
						<div class="navbar-collapse hidden lg:block lg:w-6/12" id="navbarNavDropdown">
							<ul class="lg:flex flex-col lg:flex-row list-none lg:ml-auto">
								<li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
									<a class="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75" href="/">Home</a>
								</li>
								<li
									class="nav-item"
									aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
								>
									<a class="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75" href="/about">About</a>
								</li>
								<li
									class="nav-item"
									aria-current={$page.url.pathname === '/findJob' ? 'page' : undefined}
								>
									<a class="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75" href="/findJob">FindJob</a>
								</li>
							</ul>
						</div>
					    <button
							class="navbar-toggler block lg:hidden px-2 py-1 lg:w-3/12 sm:w-6/12 "
							type="button"
							on:click={toggleNavbar}
						>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
						</button>
				</nav>
	</div>
</header>

<style>

</style>
