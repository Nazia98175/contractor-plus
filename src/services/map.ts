import axios from "axios"

export const getUserLoc = async ()=>{
    try {
    const credentials = `${process.env.NEXT_PUBLIC_API_MAXMIND_ID}:${process.env.NEXT_PUBLIC_API_MAXMIND_KEY}`;
    const encoded = Buffer.from(credentials).toString('base64');

    const response = await axios.get('https://geoip.maxmind.com/geoip/v2.1/city/me?pretty', {
      headers: {
        'Authorization': `Basic ${encoded}`
      }
    });

    console.log(response.data);
    return response.data;
  } catch (error:any) {
    console.error("Error fetching user location:", error);
  }
}