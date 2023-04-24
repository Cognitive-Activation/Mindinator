import { writable, readable } from "svelte/store";

export let isModalOpen = writable(false);
export let toastText = writable("")
export let toastVisibility = writable(false)