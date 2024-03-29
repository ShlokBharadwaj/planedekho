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
            image: result.results[0].urls.small,
            photographer: result.results[0].user.name,
        };
    } else {
        const randomImageResponse = await fetch('https://api.unsplash.com/photos/random?query=airplane', { method: 'GET', headers });
        const randomImageResult = await randomImageResponse.json();
        return {
            manufacturer: manufacturer,
            model: model,
            image: randomImageResult.urls.small // return random airplane image URL if no image found
        };
    }
}