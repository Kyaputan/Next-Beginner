import { fetchCamp } from "@/utils/actions";


const Camplist = async () => {
    const camps = await fetchCamp();
    return (
        <>
            {
                camps.map((camp:any,index:number) => {
                    return (
                        <div key={index}>{index + 1}. {camp.title} - {camp.location}</div>
                    )
                })
            }
        </>
    )
}

export default Camplist