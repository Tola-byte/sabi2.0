import { InputTypes } from "@/types"

export const InputFields: React.FC<InputTypes> = ({title, placeholder,value, onChange}) => {
    return (
                <div className=" w-full">
                <label htmlFor="input" className="block text-gray-700 text-sm font-bold mb-2">{title}</label>
                    <input
                        type="text"
                        id="input"
                        name="input"
                        className="w-full px-4 py-2 border text-xs rounded-md focus:outline-none focus:border-[#005b58]"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}

                    />
            </div>
    )
}
