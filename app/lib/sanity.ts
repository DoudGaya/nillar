import { createClient } from "next-sanity"

const dataset = 'production'
const apiVersion = '2023-01-01'
const projectId = 'c66h7hmf'


export const client = createClient({
    dataset,
    projectId,
    apiVersion,
    useCdn: true
})