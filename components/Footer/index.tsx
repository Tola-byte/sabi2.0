import Sabilink from "@/public/icons/sabilink.svg"
import { SecButton } from "../SecondaryButton"
import Link from "next/link"
import Twitter from "@/public/icons/twitter.svg"
import LinkedIn from "@/public/icons/linkedin.svg"
import Facebook from "@/public/icons/facebook.svg"
import Instagram from "@/public/icons/instagram.svg"
import Mail from "@/public/icons/mail.svg"
import Phone from "@/public/icons/phone.svg"

export const Footer = () => {
    return (
        <div className="bg-[#2c3131]">
            <div className="flex flex-col pb-20 p-5 md:p-16 md:m-auto md:justify-around">
                

                <div className="flex flex-col md:flex-row justify-around">
                    <div className="flex flex-col md:mx-5">
                        <span className="ml-4">
                            <Sabilink />
                        </span>
                        <p className="text-xl md:text-3xl text-white p-5 font-bold"> Be the first to know </p>
                        <span className="mx-6 md:mx-5">
                            <SecButton
                                title="Join Our Newsletter"
                                textsize="text-sm"
                                width="120px"
                                px="5"
                                py="4" />
                        </span>

                        <span className="mx-5 mt-6">

                            <p className="text-xl md:text-2xl text-white font-medium ">Contact Us</p>

                            <div className="flex gap-3 mt-4">
                                <span className="flex flex-col mt-1 gap-3">
                                    <Phone />
                                    <Mail />
                                </span>
                                <span className="flex flex-col gap-2">
                                    <a href="tel:+1 604-338-3684" className="hover:text-[#DF8619] text-white">+1 604-338-3684</a>
                                    <a href="mailto:info@sabilink.com" className="text-[#DF8619] hover:text-[#fff]">info@sabilink.com</a>
                                </span>
                                
                            </div>
                           

                            
                        </span>
                    </div>
                    <div className="flex gap-8 pl-5">
                        <div className="flex flex-col mt-5">
                            <p className="font-semibold text-lg md:text-2xl text-white">Company</p>

                            <span className="flex flex-col gap-2 md:gap-4 pt-1 md:pt-4 cursor-pointer md:px-1 ">
                                <Link href={""} className="text-xs md:text-sm text-white hover:text-[#df8619]">  Blog </Link>
                                <Link href={""} className="text-xs md:text-sm text-white hover:text-[#df8619]"> About us </Link>
                                
                                <span className="flex gap-2 mt-5">
                                    <Twitter />
                                    <LinkedIn />
                                    <Facebook />
                                    <Instagram/>

                                </span>
                            </span>
                        </div>
                      <div className="flex flex-col mt-5">
                        <p className="font-semibold text-lg md:text-2xl text-white">Services</p>
                        <span className="flex flex-col gap-4 pt-1 md:pt-4 cursor-pointer md:px-1">
                                <Link href={""} className="text-xs md:text-sm text-white hover:text-[#df8619]"> Tech Talent Recruitment</Link>  
                                <Link href={""} className="text-xs md:text-sm text-white hover:text-[#df8619]"> Tech Training/Certification</Link>  
                                <Link href={""} className="text-xs md:text-sm text-white hover:text-[#df8619]"> Startup/MVP Building</Link>  
                        </span>
                    </div>

                    </div>

                </div>
               

            </div>
            <p className="text-center p-5 text-xs md:text-sm md:text-center text-white">
                Copyright (c) 2024 <span className="text-[#F28705]">Sabilink.</span> All rghts reserved
            </p>
    
    
    </div>
    )
}