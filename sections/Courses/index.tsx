import { CoursesDataTypes } from "@/types"
import { CoursesData } from "@/utils/config"
import LocationIcon from "@/public/icons/location.svg"
import RightArrow from "@/public/icons/greenright.svg"
import Link from "next/link"
import Image from "next/image"


const CourseSection = () => {
    return (
        <div className="bg-[#fff] md:rounded-t-[70px] p-5 md:p-10">
            <div className="flex flex-col md:flex-row justify-center md:m-auto w-full md:w-3/5">
                <span>
                <p className="text-center p-3 w-full text-xl md:text-4xl md:p-10 font-extrabold font-sora text-[#056a68]">
                    Your Gateway to Tech Excellence: A Glimpse into Sabilink Foundation Class
                    </p>
                    </span>
                
                <span className="w-full md:pt-8">
                <p className="text-xs text-center">
                    Explore a comprehensive curriculum spanning four key topics over the course of a year.
                    Immerse yourself in the fundamentals of programming languages,
                    dive into the world of Cloud Computing with a focus on AWS,
                    master the Unix Operating System, and gain expertise in Code Infrastructure.
                </p>
                    </span>
            </div>
            <div className="flex flex-col md:flex-row p-10 m-auto">
            {
                CoursesData?.map((item: CoursesDataTypes) => (
                    <div className="flex flex-col gap-5 mt-14 md:gap-3" key={item.id}>
                        <span className="bg-[#DFFFFF] w-[80px] flex justify-center p-3 rounded-md">
                            <item.Icon />
                        </span>
                        
                        <p className="text-[#028d8c] w-full md:w-3/4 text-xl font-semibold font-sora md:font-bold">{item.title}</p>
                        <span className="flex gap-3"><LocationIcon /> {item.location}</span>
                        <p className="text-sm w-full md:w-3/4">{item.body}</p>
                        
                    
                        <Link href={""} className="text-[#028d8c] flex gap-5 md:gap-3">Learn More <RightArrow />
                        
                        </Link>
                        
                    </div>

                ))
                  
            }
                </div>
            </div>
    )
}

export default CourseSection