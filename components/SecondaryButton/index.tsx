

export const SecButton: React.FC<{
    title: string, width?: string,
    textsize?:string, 
    px?: string, py?: string
}> = ({ title, width, px, textsize, py }) => {
    return (
        <button className={`bg-[#F28705] rounded-[30px]  ${px ? `px-${px}` : "px-1"}  ${width ? width : "w-[80px]"} md:rounded-[30px] md:w-full cursor-pointer`}>
            <div className={`text-center w-full ${py ? `py-3` : " py-1"} md:p-4 gap-3`}>
                <p className={`text-white ${textsize ?  textsize : `text-[8px]`} md:text-sm font-light`}>{title}</p>
              
            </div>
        </button>
    )
}
