export async function fetchPlanes() {
    const apiKey = process.env.API_NINJAS_API_KEY;

    if (!apiKey) {
        throw new Error('API_NINJAS_API_KEY is not defined');
    }

    const headers = {
        'X-Api-Key': apiKey,
    };

    const url = 'https://api.api-ninjas.com/v1/aircraft?manufacturer=Boeing&limit=1';

    const response = await fetch(url, { method: 'GET', headers });

    const result = await response.json();

    return result;
};