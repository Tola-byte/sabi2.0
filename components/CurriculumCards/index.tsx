import { CurriculumCardTypes } from "@/types"

const CardCurriculum: React.FC<CurriculumCardTypes> = ({
    title,
    background,
    color,
    body,
    text
}) => {
    return (
        <div className={`p-5 md:p-5 rounded-[20px] w-full gap-3 md:mt-3 md:w-[400px] h-fit shadow-2xl`} style={{background: `${background}`}}>
            <span className="flex flex-row ">
                <p className={`text-lg font-bold font-sora w-full md:w-5/6`} style={{color: `${color}`}}>{title}</p>
            </span>
            <div className="">
                <p className={`text-[10px] w-full`} style={{color: `${text}`}}>
                    {body}
                </p>
            </div>
        </div>
    )
}

export default CardCurriculum