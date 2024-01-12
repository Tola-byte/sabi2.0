import { useRouter } from 'next/router';
import Sabilink from "@/public/icons/sabilink.svg";
import { PrimaryButton } from "../Button";
import { NavBarRoutes } from "@/utils/config";
import { NavBarRoutesTypes } from "@/types";
import Link from "next/link";

export const NavBar = () => {
    const router = useRouter();

    return (
        <div className="hidden md:flex justify-between mt-14 bg-[#fff] rounded-[20px] w-3/4 m-auto shadow-4xl">
            <Link className='md:mt-4 md:ml-5' href='/'>
                <Sabilink />
            </Link>
           
            <div className="md:flex gap-5 p-4">
                {NavBarRoutes.map((item: NavBarRoutesTypes) => (
                    <Link key={item.key} href={item.path}
                            className={`text-md font-kanit md: mt-3 ${router.pathname === item.path
                                ? 'text-[#028D8C] border-b-2 border-[#028D8C]' 
                                    : 'text-[#061C3D]'
                                }`}
                        >
                            {item.title}
                    
                    </Link>
                ))}
            </div>
            <div className='mr-3 pt-3.5'>
                <PrimaryButton title={"APPLY HERE"} isIconPresent={true} />
            </div>
            
        </div>
    );
};
