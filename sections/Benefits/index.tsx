import { BenefitsDataTypes } from "@/types"
import { BenefitData } from "@/utils/config"

const Benefit = () => {
    return (
        <div className="bg-[#005B58] p-10">
            <div className="flex flex-col justify-center">
                <div className="m-auto w-full md:w-1/2 text-center font-bold">
                    <span className="text-[#e97500] font-sora text-sm md:text-2xl">
                        At Sabilink, we believe in making quality tech education accessible.
                        The tuition for the Sabilink Foundation Class is set at
                    </span>
                </div>
                <span className="text-[#dfffff] text-center font-extrabold font-sora p-8 text-xl md:text-3xl">C$4,000  || N3.5 million </span>
               
                <div className="flex flex-col md:flex-row gap-5 md:w-3/4  m-auto">

                    {
                        BenefitData.map((item: BenefitsDataTypes) => (
                            <div key={item.id} className="bg-white p-7 md:p-8 m-auto rounded-[20px]">
                                <div className="flex flex-col justify-center">
                                    <span className="m-auto p-6">
                                        <item.Icon />
                                    </span>
                                    <p className="font-bold text-lg md:text-xl text-center  font-sora mb-3">{item.title}</p>
                                    <div className="text-sm w-full md:w-3/4 text-center font-light m-auto">
                                        {item.body}
                                    </div>
                                </div>
                            </div>
                ))    
                }
                </div>

            </div>

        </div>
    )
}

export default Benefit