import { ColoredCardTypes } from "@/types"

const CardColoured: React.FC<ColoredCardTypes> = ({
    title,
    background,
    color,
    Icon,
    body
}) => {
    return (
        <div className={`p-5 rounded-[20px] h-fit`} style={{background: `${background}`}}>
            <span className="flex flex-row gap-3">
                <div>{<Icon/>}</div>
                <p className={`text-lg font-bold font-sora`} style={{color: `${color}`}}>{title}</p>
            </span>
            <div className="w-full md:w-5/6">
                <p className={`ml-12 text-sm`} style={{color: `${color}`}}>
                    {body}
                </p>
            </div>
        </div>
    )
}

export default CardColoured