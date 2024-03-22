import { FetchPlanesOptions } from "@/types";

export async function fetchPlanes(options: FetchPlanesOptions = {}) {
    const apiKey = process.env.API_NINJAS_API_KEY;

    if (!apiKey) {
        throw new Error('API_NINJAS_API_KEY is not defined');
    }

    const headers = {
        'X-Api-Key': apiKey,
    };

    let url = 'https://api.api-ninjas.com/v1/aircraft?';

    // Add each option as a query parameter
    for (const [key, value] of Object.entries(options)) {
        url += `${key}=${encodeURIComponent(value)}&`;
    }

    const response = await fetch(url, { method: 'GET', headers });

    const result = await response.json();

    return result;
};