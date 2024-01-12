import { ColoredCardTypes } from "@/types"

const CardColoured: React.FC<ColoredCardTypes> = ({
    title,
    background,
    color,
    Icon,
    body
}) => {
    return (
        <div className={`${background.trim()} p-5 rounded-[20px] h-fit`}>
            <span className="flex flex-row gap-3">
                <div>{<Icon/>}</div>
                <p className={`text-lg font-bold ${color.trim()} font-sora`}>{title}</p>
            </span>
            <div className="w-full md:w-5/6">
                <p className={`${color.trim()} ml-12 text-sm`}>
                    {body}
                </p>
            </div>
        </div>
    )
}

export default CardColoured