import { PlainCardTypes } from "@/types"

export const Card: React.FC<PlainCardTypes> = ({
    title, body
}) => {
    return (
        <div className="bg-[#fff] p-4 shadow-2xl h-fit w-full md:w-1/4 rounded-[20px]">
            <div className="flex flex-col">
                <p className="text-[#056A68] text-xl md:text-2xl w-5/6 font-bold font-sora md:font-extrabold">
                    {title}
                </p>
                <p className="text-sm w-full md:font-light mt-2 md:mt-3">
                    {body}
                </p>

            </div>
          

        </div>
    )
}