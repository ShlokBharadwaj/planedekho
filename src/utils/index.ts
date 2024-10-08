import { FetchPlanesOptions, PlaneImageResponseProps } from "@/types";

export async function fetchPlanes(options: FetchPlanesOptions = {}) {

    const { manufacturer, model, engine_type, min_speed, max_speed, min_range, max_range, min_length, max_length, min_height, max_height, min_wingspan, max_wingspan, limit } = options;

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

    // Remove the last '&' character
    url = url.slice(0, -1);

    // console.log(url);

    const response = await fetch(url, { method: 'GET', headers });

    const result = await response.json();

    return result;
};

export async function fetchPlaneImage(manufacturer: string, model: string): Promise<PlaneImageResponseProps> {
    const apiKey = process.env.UNSPLASH_ACCESS_KEY;

    // console.log("Data: ", manufacturer, model);

    if (!apiKey) {
        throw new Error('UNSPLASH_ACCESS_KEY is not defined');
    }

    const headers = {
        'Authorization': `Client-ID ${apiKey}`,
    };

    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(manufacturer + ' ' + model)}&per_page=1`;

    const response = await fetch(url, { method: 'GET', headers });

    const result = await response.json();

    // console.log(result.results);

    if (result.results.length > 0) {
        return {
            manufacturer: manufacturer,
            model: model,
            imageSmall: result.results[0].urls.small,
            imageRegular: result.results[0].urls.regular,
            photographer: result.results[0].user.name,
            photographerUsername: result.results[0].user.username,
        };
    } else {
        const randomImageResponse = await fetch('https://api.unsplash.com/photos/random?query=airplane', { method: 'GET', headers });
        const randomImageResult = await randomImageResponse.json();
        return {
            manufacturer: manufacturer,
            model: model,
            imageSmall: randomImageResult.urls.thumb, // return random airplane image URL if no image found
            imageRegular: randomImageResult.urls.regular // return random airplane image URL if no image found
        };
    }
}