import axios from "axios";

async function request(data: any, urls: string) {
    const localUrl = 'http://host.docker.internal:7000';
    const url = `${localUrl}${urls}`;
    const jsonData = JSON.stringify(data, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    );
    axios.post(url, jsonData, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => console.log('Event data sent to Django:', response.data))
        .catch(error => console.error('Failed to send event data to Django:', error));
}

export async function TokenTransfers(data: any){

    await request(data, '/api/transfers/')
}

export async function GreenPointTransfers(data: any){
    await request(data, '/api/green/point/transfers/')
}

export async function SwapTransfers(data: any){
    await request(data, '/api/swap/transfers/')
}