import { FetchPlanesOptions, PlaneImageResponseProps } from "@/types";

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

export async function fetchPlaneImage(manufacturer: string, model: string): Promise<PlaneImageResponseProps> {
    const apiKey = process.env.UNSPLASH_ACCESS_KEY;

    if (!apiKey) {
        throw new Error('UNSPLASH_ACCESS_KEY is not defined');
    }

    const headers = {
        'Authorization': `Client-ID ${apiKey}`,
    };

    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(manufacturer + ' ' + model)}&per_page=1`;

    const response = await fetch(url, { method: 'GET', headers });

    const result = await response.json();

    if (result.results.length > 0) {
        return {
            manufacturer: manufacturer,
            model: model,
            image: result.results[0].urls.small
        };
    } else {
        return {
            manufacturer: manufacturer,
            model: model,
            image: '' // return empty string or a default image URL if no image found
            // Maybe add something like this: `https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
        };
    }
}