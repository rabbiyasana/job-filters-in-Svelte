<script>
	// Adjust based on your router
	import { onMount } from 'svelte';
	import { jobDataStore } from '../../store';
	import { expLevel } from '../../store';
	async function fetchJobData() {
		try {
			const response = await fetch('http://51.20.72.242/api/v1/jobs/employment-types/');
			if (response.ok) {
				const jsonData = await response.json(); // Use a temporary variable for clarity
				jobDataStore.set(jsonData.data); // Update the reactive variable
				console.log(jsonData.data); // Log the fetched data
			} else {
				console.error('Failed to fetch job data:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching job data:', error);
		}
	}
	async function fetchexpLevel() {
		try {
			const response = await fetch('http://51.20.72.242/api/v1/jobs/career-levels/');
			if (response.ok) {
				const jsonData = await response.json(); // Use a temporary variable for clarity
				expLevel.set(jsonData.data); // Update the reactive variable
			} else {
				console.error('Failed to fetch job data:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching job data:', error);
		}
	}

	// Call fetchJobData when component mounts
	onMount(fetchJobData);
	onMount(fetchexpLevel);
</script>

<svelte:head>
	<title>find Job</title>
	<meta name="description" content="find Job " />
</svelte:head>

<div class="continer-fluid head-bg py-5">
	<div class="container">
		<div class="row">
			<h1>Search Jobs</h1>
		</div>
		<div class="row form-row my-5">
			<form>
				<div class="row align-items-center gx-0">
					<!-- First Search Bar -->
					<div class="col line">
						<input type="text" class="form-control" placeholder="jobtitle or keyword" />
					</div>
					<!-- Second Search Bar -->
					<div class="col line">
						<input type="text" class="form-control" placeholder="Location " />
					</div>

					<!-- Dropdown -->
					<div class="col">
						<select class="form-select">
							<option selected>All Categorye</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
						</select>
					</div>
					<!-- Submit Button -->
					<div class="col-auto">
						<button type="submit" class="btn btn-lg btn-primary">Search</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<section class="mt-5">
	<div class="container">
		<div class="row">
			<div class="col-lg-5 col-xl-4 col-xxl-4">
				<div class="pxp-jobs-list-side-filter">
					<div class="pxp-list-side-filter-header d-flex d-lg-none">
						<div class="pxp-list-side-filter-header-label">Filter Jobs</div>
						<button>
							<span class="fa fa-sliders"></span>
						</button>
					</div>
					<div class="mt-4 mt-lg-0 d-lg-block pxp-list-side-filter-panel head-bg px-2 border py-4">
						<div class="list-group mt-2 mt-lg-3">
							<h4 class="ml-3">Type of Employment</h4>
						</div>
						<div class="list-group mt-2 mt-lg-3">
							{#each $jobDataStore as Jobtype}
								<div class="d-flex p-2 justify-content-between">
									<span>
										<input class="form-check-input me-2" type="checkbox" />
										{Jobtype.value}
									</span>
									<span class="badge rounded-pill bg-light text-dark">0{Jobtype.count} </span>
								</div>
							{/each}
						</div>
						<div class="list-group mt-2 mt-lg-3">
							<h4>Experience Level</h4>
						</div>
						<div class="list-group mt-2 mt-lg-3">
							{#each $expLevel as experience}
								<div class="d-flex p-2 justify-content-between">
									<span>
										<input class="form-check-input me-2" type="checkbox" />
										{experience.value}
									</span>
									<span class="badge rounded-pill bg-light text-dark">0{experience.count} </span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- The job listing part -->
			<div class="col-lg-7 col-xl-8 col-xxl-8">
				<!-- Jobs list top -->
				<!-- Job cards -->
				<!-- {#each jobData as job} -->
				<div class="pxp-jobs-card-3 pxp-has-border">
					<!-- Job card content -->
				</div>
				<!-- {/each} -->
			</div>
		</div>
	</div>
</section>

<style>
	.head-bg {
		background-color: #e6f0f9;
	}
	.form-row {
		padding: 20px 20px;
		background-color: #fff;
		border-radius: 50px;
	}
	.form-select {
		width: 70% !important ;
	}
	.form-control,
	.form-select {
		border: none;
		border: none !important;
		box-shadow: none !important;
	}
	.form-control:hover {
		border: none !important;
		outline: none !important;
		box-shadow: none !important;
	}
	button {
		border-radius: 50px;
	}
	.line {
		border-right: 1px solid rgb(70, 68, 68);
	}
	.border {
		border-radius: 30px;
	}
	h4 {
		margin-left: 10px;
	}
</style>
