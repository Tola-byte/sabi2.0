import { ButtonTypes } from "@/types"
import ArrowRight from "@/public/icons/ArrowRight.svg"

export const PrimaryButton : React.FC<ButtonTypes>= ({title, isIconPresent,type,action}) => {
    return (
        <button className="bg-[#028d8c] rounded-[10px] md:mb-4 cursor-pointer" type={type ? type : "button" }>
            <a href={action}>

          
            <div className="flex text-center p-3 gap-3 md">
            <p className="text-white m-auto text-sm font-sora font-bold">{title}</p>
            {
                isIconPresent ? <ArrowRight/> : ""
            }
                </div>
                  </a>
        </button>
        )
}
