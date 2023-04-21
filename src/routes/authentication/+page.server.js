import { redirect } from '@sveltejs/kit'
import axios from 'axios'

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request, cookies }) => {
        axios.defaults.withCredentials = true
        const { data } = await axios.post('http://localhost:3000/api/auth/login', {
            email: 'malurr@rknec.edu',
            password: 'Tekademcpatanahikyukaamnahikarta'
        }, { withCredentials: true })
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
        throw redirect(303, '/')
    }
}

// register => name email pass
// /api/auth/register
// login => email pass
// /api/auth/login
// /api/auth/refresh
// /api/user => returns user