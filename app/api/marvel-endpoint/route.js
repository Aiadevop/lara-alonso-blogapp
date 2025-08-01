import { NextResponse } from "next/server";

export async function GET() {
    try{
        const tsHash = process.env.TS_HASH;
        const apikey = process.env.DISNEY_PUBLIC_KEY;
        const hash = process.env.HASH_MD5_MARVEL;
        const url = `https://gateway.marvel.com/v1/public/comics?ts=${tsHash}&apikey=${apikey}&hash=${hash}`
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Lara-Alonso-Blog/1.0'
            }
        });
        console.log(url);
        const data = await response.json();
        
        // Si hay error de credenciales, usar datos de prueba para desarrollo
        if (data.code === "InvalidCredentials" && process.env.NODE_ENV === "development") {
            console.log("Usando datos de prueba para desarrollo");
            return NextResponse.json({
                data: {
                    results: [
                        {
                            id: 1,
                            title: "Spider-Man: Homecoming",
                            thumbnail: {
                                path: "https://picsum.photos/300/450",
                                extension: "jpg"
                            },
                            urls: [{ url: "https://marvel.com" }]
                        },
                        {
                            id: 2,
                            title: "Iron Man: Armor Wars",
                            thumbnail: {
                                path: "https://picsum.photos/300/450",
                                extension: "jpg"
                            },
                            urls: [{ url: "https://marvel.com" }]
                        },
                        {
                            id: 3,
                            title: "Captain America: Civil War",
                            thumbnail: {
                                path: "https://picsum.photos/300/450",
                                extension: "jpg"
                            },
                            urls: [{ url: "https://marvel.com" }]
                        },
                        {
                            id: 4,
                            title: "Black Panther: Wakanda Forever",
                            thumbnail: {
                                path: "https://picsum.photos/300/450",
                                extension: "jpg"
                            },
                            urls: [{ url: "https://marvel.com" }]
                        },
                        {
                            id: 5,
                            title: "Thor: Love and Thunder",
                            thumbnail: {
                                path: "https://picsum.photos/300/450",
                                extension: "jpg"
                            },
                            urls: [{ url: "https://marvel.com" }]
                        },
                        {
                            id: 6,
                            title: "Doctor Strange: Multiverse of Madness",
                            thumbnail: {
                                path: "https://picsum.photos/300/450",
                                extension: "jpg"
                            },
                            urls: [{ url: "https://marvel.com" }]
                        }
                    ]
                }
            }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            });
        }
        
        return NextResponse.json(data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        });        
    } catch (error){
        return NextResponse.json({error:'Los héroes están de vacaciones'}, {status:500});
    }
}