import { writable } from "svelte/store";

export let isWiredIn = writable(false)
export let user = writable({})
