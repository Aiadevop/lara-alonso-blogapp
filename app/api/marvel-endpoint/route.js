import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Función para crear la URL con parámetros
async function createURL() {
    const publickey = process.env.DISNEY_PUBLIC_KEY;
    const privatekey = process.env.DISNEY_PRIVATE_KEY;
    const apiBaseUrl = "https://gateway.marvel.com/v1/public/comics";

    const ts = Date.now().toString();

    try {
        // Crear el hash MD5 usando crypto
        const hash = crypto.createHash('md5')
                           .update(ts + privatekey + publickey)
                           .digest('hex');

        // Crear los parámetros de la URL
        const params = new URLSearchParams({
            ts: ts,
            apikey: publickey,
            hash: hash,
        });

        // Construir la URL completa
        const url = `${apiBaseUrl}?${params.toString()}`;

        return url;
    } catch (error) {
        console.error('Error creating URL:', error);
        throw error;
    }
}

// Manejar la solicitud GET
export async function GET() {
    try {
        const url = await createURL(); // Llama a createURL para obtener la URL
        console.log("Generated URL:", url); // Opcional: Para depuración

        const response = await fetch(url); // Usa la URL generada
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log("API Response Data:", data); // Opcional: Para depuración
        
        return NextResponse.json(data); // Devuelve los datos en formato JSON
    } catch (error) {
        console.error('Error in GET function:', error); // Opcional: Para depuración
        return NextResponse.json({ error: 'Los héroes están de vacaciones' }, { status: 500 });
    }
}
