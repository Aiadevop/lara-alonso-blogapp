import { NextResponse } from "next/server";

export async function GET() {
    try{
        const tsHash = process.env.TS_HASH;
        const apikey = process.env.DISNEY_PUBLIC_KEY;
        const hash = process.env.HASH_MD5_MARVEL;
        const url = `https://gateway.marvel.com/v1/public/comics?ts=${tsHash}&apikey=${apikey}&hash=${hash}`
        const response = await fetch(url);
        console.log(url);
        const data = await response.json();
        return NextResponse.json(data);        
    } catch (error){
        return NextResponse.json({error:'Los héroes están de vacaciones'}, {status:500});
    }
}