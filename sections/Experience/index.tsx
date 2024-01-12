import CardColoured from "@/components/ColouredCards"
import { ColoredCardTypes } from "@/types"
import { ColoredCardData } from "@/utils/config"

const FacilityTrial = () => {
    return (
        <div className="bg-[#F5F6F7]">
            <div className="m-auto flex flex-col">
                <p className="text-xl md:text-4xl text-[#005B58] text-center font-bold font-sora w-full md:w-1/2 m-auto mt-5 p-5">Experience Excellence: Your One-Week Facility Trial at Sabilink</p>

                <p className="text-center w-full md:w-1/3 text-[11px] md:font-semibold md:text-lg m-auto p-5"> Joining the Sabilink Foundation Class is a straightforward process. Here's how you can secure your spot</p>
                <div className="m-auto flex flex-col md:grid grid-cols-2 w-full p-3 md:w-3/5 gap-5">
                {
                        ColoredCardData?.map((item: ColoredCardTypes) => (
                      
                        <CardColoured
                            key={item.id}
                            Icon={item.Icon}
                            title={item.title}
                            background={item.background}
                            color={item.color} 
                            body={item.body} />
                    ))
                }
                    
            </div>
            </div>
        </div>
    )
}


export default FacilityTrial