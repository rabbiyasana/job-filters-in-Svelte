<script>
	// Adjust based on your router
	import { onMount } from 'svelte';
	import { jobDataStore } from '../../store';
	import { expLevel } from '../../store';
	import { jobs } from '../../store';
	import image from '../../lib/images/jobs.png';
	async function fetchJobData() {
		try {
			const response = await fetch('http://51.20.72.242/api/v1/jobs/employment-types/');
			if (response.ok) {
				const jsonData = await response.json();
				jobDataStore.set(jsonData.data);
				console.log(jsonData.data);
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
				const jsonData = await response.json();
				expLevel.set(jsonData.data);
				console.error('Failed to fetch job data:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching job data:', error);
		}
	}
	async function fetchJobs() {
		try {
			const response = await fetch('http://51.20.72.242/api/v1/jobs/?');
			if (response.ok) {
				const jsonData = await response.json();
				jobs.set(jsonData.data.results);
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
	onMount(fetchJobs);
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
						<select class="form-select select-width">
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
				<div class=" mt-4 mt-lg-0">
					<div class="row justify-content-between align-items-center">
						<div class="col-auto">
							<h2>
								<span class="pxp-text-light">Showing</span>{' '}
								{$jobs.length}
								<span class="pxp-text-light">jobs</span>
							</h2>
						</div>
						<div class="col-auto">
							<select class="form-select">
								<option value="0" selected> Most relevant </option>
								<option value="1">Newest</option>
								<option value="2">Oldest</option>
							</select>
						</div>
					</div>
				</div>
				{#each $jobs as job}
					<div class="card my-4 px-3 py-4 border">
						<div class="row align-items-center justify-content-between">
							<div class="col-sm-3 col-md-2 col-lg-3 col-xl-2 col-xxl-auto">
								<a class="pxp-jobs-card-3-company-logo compLogoOne" href="a">
									<!-- The style can be set directly in the class or inline using `style` attribute -->
									<!-- style="background-image: url(images/company-logo-1.png);" -->
									<img class="img" src={image} alt="" />
								</a>
							</div>
							<div class="col-sm-9 col-md-10 col-lg-9 col-xl-10 col-xxl-4">
								<a class="pxp-jobs-card-3-title mt-3 mt-sm-0" href="a">
									<h5>{job.experience_level}</h5>
								</a>
								<div class="pxp-jobs-card-3-details">
									<a class="pxp-jobs-card-3-location" href="a">
										<span class="fa fa-globe"></span>
										<b>{job.organization_address}</b>
									</a>
									<div class="pxp-jobs-card-3-type">
										{job.employment_type}
									</div>
								</div>
							</div>
							<div class="col-sm-8 col-xl-6 col-xxl-4 mt-3 mt-xxl-0">
								<a class="pxp-jobs-card-3-category" href="rfrf">
									<div class="pxp-jobs-card-3-category-label">
										{#if job.categories && job.categories.length > 0}
											{#each job.categories.slice(0, 6) as category, index (category.id)}
												<div>{category.name}</div>
											{/each}
										{/if}
									</div>
								</a>
								<div class="pxp-jobs-card-3-date-company">
									<span class="pxp-jobs-card-3-date pxp-text-light">
										{job.created_at}
									</span>
									<a class="pxp-jobs-card-3-company" href="dc">
										<strong>{job.organization_name}</strong>
									</a>
								</div>
							</div>
							<div class="col-sm-4 col-xl-2 col-xxl-auto mt-3 mt-xxl-0 pxp-text-right">
								<a
									href={`/jobdetail/${job.id}`}
									class="btn text-white btn-primary rounded-pill pxp-card-btn">Apply</a
								>
							</div>
						</div>
					</div>
				{/each}
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
	.select-width {
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
	img {
		border-radius: 20px;
		width: 80px;
	}
	a {
		text-decoration: none;
		color: #000;
	}
</style>
