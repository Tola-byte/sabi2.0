// Accordion.tsx
import React, { useState } from 'react';
import Plus from "@/public/icons/Plus.svg"
import Minus from "@/public/icons/Minus.svg"
interface AccordionProps {
    title: string;
    week: number;
    children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, children, week }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-md overflow-hidden bg-[#fff] w-full max-h-[200px] mb-5 shadow-2xl">
            <input
                type="checkbox"
                id={`toggle-${title}`}
                className="hidden"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
            />
            <label
                htmlFor={`toggle-${title}`}
                className="flex justify-between items-center p-4 cursor-pointer font-sora hover:bg-gray-200 transition duration-300"
            >
                <span className='flex gap-2'>
                    <p className='text-xs md:text-lg font-semibold text-[#028D8C]'>
                        Week{" "}{week} {" "}
                    </p>
                    
                    <span className=' font-semibold text-xs md:text-xl '>
                       { " " } - {title}
                    </span>
                </span>
                <span className="text-xl">{isOpen ? <Minus/> : <Plus/>}</span>
            </label>
            <div className={`duration-[0.5s]ß transition-all text-xs ${isOpen ? 'h-fit p-4' : 'h-0'}`}>
                {isOpen ? children : null}
            </div>
        </div>
    );
};

export default Accordion;
