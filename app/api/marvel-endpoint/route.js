import { NextResponse } from "next/server";

export async function GET() {
    try{
        const tsHash = process.env.TS_HASH;
        const publickey = process.env.DISNEY_PUBLIC_KEY;
        const hash = process.env.HASH_MD5_MARVEL;
        const response = await fetch
        (`https://gateway.marvel.com/v1/public/comics?ts=${tsHash}&apikey=${publickey}&hash=${hash}`);
        const data = await response.json();
        return NextResponse.json(data);        
    } catch (error){
        return NextResponse.json({error:'Los héroes están de vacaciones'}, {status:500});
    }
}