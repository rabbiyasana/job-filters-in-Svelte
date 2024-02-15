<script>
	import "../../app.css"
	import { onMount } from 'svelte';
	import { jobDataStore } from '../../store';
	import { expLevel } from '../../store';
	import { jobs } from '../../store';
	import { salaryRange } from '../../store';

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
	<link href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet" />
</svelte:head>

<div class="w-full bg-blue-100 p-5 flex justify-around items-stretch content-between">
	<div class="container w-80vw ">
		<div class="mx-5 px-5">
			<h1 class="text-3xl font-semibold">Search Jobs</h1>
		</div>
		<div class="px-5 py-3 bg-white rounded-3xl lg:rounded-full  my-5">
			<form>
				<div class="lg:flex justify-between items-center">
					<!-- First Search Bar -->
					<div class=" w-full lg:border-r border-Gray">
						<i class="fa fa-search"></i>
						<input type="text" class="my-2 mx-2 lg:mx-0 focus:outline-none" placeholder="jobtitle or keyword" />
					</div>
					<!-- Second Search Bar -->
					<div class="w-full lg:border-r border-Gray ml-1">
						<i class="fa fa-globe"></i>
						<input type="text" class="my-2 mx-2 lg:mx-0 focus:outline-none" placeholder="Location " />
					</div>

					<!-- Dropdown -->
					<div class=" w-full ml-1">
						<i class="fa fa-folder"></i>
						<select class="my-2 mx-2 lg:mx-0 focus:outline-none">
							<option selected>All Categorye</option>
							{#each $jobs as job}
								{#if job.categories && job.categories.length > 0}
									{#each job.categories.slice(0, 6) as category, index (category.id)}
										<div>{category.name}</div>
										<option value="1">{category.name}</option>
									{/each}
								{/if}
							{/each}
						</select>
					</div>
					<!-- Submit Button -->
					<div class="w-full sm:w-full flex-col flex sm:flex-row justify-end items-end">
						<button type="submit" class=" w-full  md:w-auto border rounded-full bg-blue-600 text-white px-5 py-4">Find Jobs</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<section class="w-full p-5 flex justify-center items-center">
	<div class="mt-5 container w-80vw ">
		<div class="flex ">
			<div class="m-2 w-3/12 ">
				<div>
					<div class="flex block lg:hidden">
						<div>Filter Jobs</div>
						<button>
							<span class="fa fa-sliders"></span>
						</button>
					</div>
					<div class="bg-blue-100 mt-4 mt-lg-0 rounded py-4 px-3">
						<div class="mt-2 mt-lg-3">
							<h4 class="text-2xl ml-2">Type of Employment</h4>
						</div>
						<div class="mt-2 mt-lg-3">
							{#each $jobDataStore as Jobtype}
								<div class="flex p-2 justify-between">
									<span>
										<input class=" h-4 w-4 border-2 border-white rounded" type="checkbox" />
										{Jobtype.value}
									</span>
									<span class="bg-white rounded-full p-1">0{Jobtype.count} </span>
								</div>
							{/each}
						</div>
						<div class="mt-2 mt-lg-3">
							<h4 class="text-2xl  ml-2">Experience Level</h4>
						</div>
						<div class="mt-2 mt-lg-3">
							{#each $expLevel as experience}
								<div class="flex p-2 justify-between">
									<span>
										<input class=" h-4 w-4 border-2 border-white rounded" type="checkbox" />
										{experience.value}
									</span>
									<span class="bg-white rounded-full p-1">0{experience.count} </span>
								</div>
							{/each}
						</div>
						<div class=" mt-2 mt-lg-3">
							<h4 class="text-2xl  ml-2">Salary Range</h4>
						</div>
						<div class="mt-2 mt-lg-3">
							{#each $salaryRange as salary}
								<div class="flex p-2 justify-between">
									<label  for={`salary-${salary}`}>
										<input
											class=" h-4 w-4 border-2 border-whiter "
											type="radio"
											name="salary"
											id={`salary-${salary}`}
											value={salary}
										/>
										{salary}
									</label>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- The job listing part -->
			<div class="m-2 w-9/12">
				<div class=" mt-4 mt-lg-0">
					<div class="flex flex-wrap justify-between ">
						<div class="col-auto">
							<h2 class="text-2xl">
								Showing
								<span class="text-bold">{$jobs.length}</span>
								jobs
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
					<div class="rounded-xl py-5 my-4 px-3 border">
						<div class="flex items-center justify-between">
							<div class="">
								<a href="a">
									<img class="rounded-lg w-20" src={image} alt="" />
								</a>
							</div>
							<div class="">
								<a class=" mt-3 mt-sm-0" href="a">
									<h5>{job.experience_level}</h5>
								</a>
								<div class="flex justify-between">
									<a  href="a">
										<span class="fa fa-globe"></span>
										<b>{job.organization_address}</b>
									</a>
									<div class="ml-1">
										{job.employment_type}
									</div>
								</div>
							</div>
							<div >
								<a  href="rfrf">
									<div>
										{#if job.categories && job.categories.length > 0}
											{#each job.categories.slice(0, 6) as category, index (category.id)}
												<div>{category.name}</div>
											{/each}
										{/if}
									</div>
								</a>
								<div >
									<span >
										{job.created_at}
									</span>
									<a href="dc">
										<strong>{job.organization_name}</strong>
									</a>
								</div>
							</div>
							<div>
								<a
									href={`/jobdetail/${job.id}`}
									class="border  rounded-full bg-blue-600  text-white px-4 py-2">Apply</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>


