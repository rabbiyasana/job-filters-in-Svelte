import { writable } from 'svelte/store';
export const jobDataStore = writable([]);
export const expLevel = writable([]);
export const jobs = writable([]);
export const salaryRange = writable([
	'Less than 40K Rs',
	'40K Rs - 60K Rs',
	'60K Rs - 100K Rs',
	'100K Rs - 500K Rs',
	'500K+ Rs',
	'Custom'
]);
