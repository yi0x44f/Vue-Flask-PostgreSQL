const API_HOST = 'http://localhost:5000';

export async function apiFetch<T>(path: string, options: RequestInit={}): Promise<T>{
    const url = `${API_HOST}/${path}`;

    const token = localStorage.getItem('token');

    const response = await fetch(url,{
        headers: {
            'Content-Type': 'application/json',
            ...(token? {'Authorization': `Bearer ${token}`}: {}),
            ...(options.headers || {})
        },
        ...options
    });

    if (!response.ok){
        throw new Error("Fetch failed with status: " + response.status);
    }

    else{
        return await response.json() as T;
    }

}