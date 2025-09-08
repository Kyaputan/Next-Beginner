'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCamp = async (prevData:any,formData:FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // const title = formData.get("title");
    // const location = formData.get("location");
    console.log("Creating camp...");
    // console.log("Title:", title);
    // console.log("Location:", location);
    const rawData = Object.fromEntries(formData);
    console.log(rawData);
    // prisma.camp.create({
    //     data: rawData,
    // });
    revalidatePath('/camp');
    // redirect('/');
    return "Camp created successfully";
};


export const fetchCamp = async () => {
    // const camps = await prisma.camp.findMany({});
    // return camps;
    // return [];
    const camps = [
        { id: 1, title: "Route 3060", location: "Korat" },
        { id: 2, title: "Phu Kradueng Trail", location: "Loei" },
        { id: 3, title: "Khao Yai National Park", location: "Nakhon Ratchasima" },
        { id: 4, title: "Doi Inthanon Base Camp", location: "Chiang Mai" },
        { id: 5, title: "Samet Island Beach Camp", location: "Rayong" },
        { id: 6, title: "Erawan Waterfall Camp", location: "Kanchanaburi" },
        { id: 7, title: "Sai Yok Riverside", location: "Kanchanaburi" },
        { id: 8, title: "Khao Sok Jungle Camp", location: "Surat Thani" },
    ];
    return camps;
};