import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL

const client = axios.create({
    baseURL
})

export{client}