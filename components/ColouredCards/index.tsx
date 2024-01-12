import { ColoredCardTypes } from "@/types"

const CardColoured: React.FC<ColoredCardTypes> = ({
    title,
    background,
    color,
    Icon,
    body
}) => {
    console.log(background)
    return (
        <div className={`bg-[${background?.trim()}] p-5 rounded-[20px] h-fit`}>
            <span className="flex flex-row gap-3">
                <div>{<Icon/>}</div>
                <p className={`text-lg font-bold text-[${color.trim()}]`}>{title}</p>
            </span>
            <div className="w-full md:w-5/6">
                <p className={`text-[${color?.trim()}] ml-12 text-sm`}>
                    {body}
                </p>
            </div>
        </div>
    )
}

export default CardColoured