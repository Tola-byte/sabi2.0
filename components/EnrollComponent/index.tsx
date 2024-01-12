import { SecButton } from "../SecondaryButton"

export const EnrollNow: React.FC<{title: string}> = ({title}) => {
    return (
        <div className="bg-[#156463] rounded-lg gap-5 p-4 md:p-8 w-full flex md:m-auto items-center md:w-3/4 md:flex justify-around shadow-2xl">
            <div className="w-3/5 md:w-2/5">
            <p className="text-xs md:text-3xl font-bold text-white">{ title }</p>
            </div>
            <div className="flex items-center md:mt-4">
                <SecButton title={"Enroll now"} />
            </div>
      
        </div>
    )
}