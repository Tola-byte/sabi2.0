import { TrainingCardData } from "@/utils/config"

const ModeOfTraining = () => {
    return (
        <div className="bg-white flex flex-col p-10">

            <p className="text-center text-xl md:text-4xl text-[#005B58] font-bold p-5"> Mode of Training</p>

            <span className="md:m-auto text-[8px] font-semibold md:text-lg text-center w-full md:w-1/2">
                Sabilink Foundation Class is a physical training program located in Abuja, Nigeria.
                This immersive experience is limited to 20 participants, ensuring personalized attention and a collaborative learning.
            </span>
            <div className="m-auto mt-7 flex flex-col md:flex-row gap-3">
            {
                TrainingCardData.map((item) => (
                    <div className="bg-[whitesmoke] flex flex-col gap-3 p-6 rounded-[20px] w-full md:w-[600px] shadow-2xl" key={item.id} >
                        <span className={item.session?.toLowerCase()?.includes("morning") ? "bg-[#FFE5DF] rounded-[20px] text-center w-2/5 md:w-1/5 px-2 text-[#FF6361] font-bold py-0.5" :
                            "bg-[#FFCD9D] text-[#A94C00] font-bold text-center w-1/2 md:w-1/4 rounded-[20px] md:px-2 py-0.5"}>
                            <p className="text-[8px]">
                                {item.session}
                            </p>
                         
                        </span>

                        <p className="text-[#061C3D] font-bold text-lg md:text-2xl">{item.title}</p>
                        <p className="text-[8px] font-extralight">Mode : <strong>{item.mode}</strong> • No of participants : <strong>{item.students}</strong></p>
                     </div>
                ))
                }
            </div>

        </div>
    )
}

export default ModeOfTraining