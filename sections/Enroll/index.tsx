import { Form } from "@/components/Form"
import { Card } from "@/components/PlainCards"
import Coder from "@/public/icons/coder.svg"
import { PlainCardTypes } from "@/types"
import { DateData, PlainCardData } from "@/utils/config"
const Enroll = () => {
    return (
        <div className="bg-white md:p-10 mt-16">
            <div>
            <p className="text-[#005B58] m-auto text-center p-5 text-xl md:text-4xl font-bold w-full md:w-1/2">Register Now: Sabilink Foundation Class Application Form</p>
            <p className="text-center text-[10px] font-semibold p-5 md:text-lg md:w-2/5 md:font-light m-auto">Upon completing the form, you will be directed to our secure payment gateway to process the
                <span className="text-[#005b58]">{" "}₦100,000{" "}</span>registration fee. This fee covers one week of learning Logic and JavaScript in our facility.
                </p>
            </div>

            <div className="flex flex-col w-full md:flex-row m-auto md:w-3/4 p-2 md:p-8  ">
                <span className="hidden md:block relative top-16">
                    <Coder />
                </span>
              
                <div className="w-full md:w-1/2">
                    <Form />
                </div>
               
            </div>

            <div className="flex flex-col p-5 md:flex-row justify-center m-auto mt-[100px] gap-5">
                {
                    DateData.map((item: any) => (
                        <div key={item.title} className="border-solid border-2 rounded-[10px] p-5">
                            <p className="text-[#061C3D] text-lg md:text-2xl font-extrabold p-4">{item.title}</p>
                            <div className="flex flex-col gap-3">
                            <span className="bg-[#FFCDC4] rounded-[20px] text-sm text-center w-5/6 text-[#FF6361] p-2 font-semibold">
                                {item.morning}
                                <span className="text-[#D14A4A] font-semibold">
                                    { " " }{item.morningtime}
                                </span>
                            </span>

                                <span className="bg-[#FFE2BF] text-sm rounded-[20px] text-center w-3/4 text-[#F7994B] p-1.5 font-semibold">
                                {item.evening}
                                <span className="text-[#A94C00] font-semibold">
                                    { " " }{item.eveningtime}
                                </span>
                            </span>
                                </div>
                        </div>
                       

                    ))
                }
            
               
            </div>



            <p className="text-[#005B58] text-center p-5 text-xl md:text-4xl m-auto font-bold md:mt-[150px] mb-5 w-full md:w-2/5">Why should you invest in Sabilink Foundation Class</p>
            <div className="flex gap-3 flex-col pb-10 p-3 md:flex-row w-full justify-center m-auto">
                {
                    PlainCardData.map((item: PlainCardTypes) => (
                        <Card title={item.title} body={item.body} key={item.title} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Enroll