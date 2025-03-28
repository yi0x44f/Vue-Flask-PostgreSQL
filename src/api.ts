const API_HOST = 'http://10.8.0.10:5000';

export async function apiFetch<T>(path: string, options: RequestInit={}): Promise<T>{
    const url = `${API_HOST}/${path}`;

    const response = await fetch(url,{
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
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