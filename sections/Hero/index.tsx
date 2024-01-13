import { NavBar } from "@/components/Navigation"
import HeroSVG from "../../public/icons/herobg.svg"
import { PrimaryButton } from "@/components/Button"
import MobileBG from "../../public/icons/mobilebackground.svg"
import { HamburgerMenu } from "@/components/HamburgerMenu"
import ScrollToComponentButton from "@/components/ScrollToComponent"



const HeroSection = () => {
    return (
        <div className="bg-herobg">
            <div className="hidden md:block">
                <NavBar />
            </div>
            <div className="block md:hidden">
                <HamburgerMenu/>
            </div>
            <div className="flex flex-col justify-center mt-10 md:flex-row">
            <div className="md:w-1/2">
                    <p className="text-2xl p-5 md:text-6xl font-extrabold font-sora md:p-10 text-[#056a68] text-center md:text-left">
                        Get Trained to Become a World Class Developer With
                        <span className="md:px-3 text-[#d76a00]">
                            {" "}Guaranteed Paid Internship
                        </span>
                    </p>

                    <div className="flex items-center md:w-1/2 px-10 md:flex md:items-start flex-col gap-5">
                    <p className="text-sm md:text-base">
                        Study Computer Science in Canada or Build your startup Idea in Nigeria & Expand to Canada
                        </p>
                        <span className="w-full flex justify-center md:justify-start md:w-1/2">

                            {/* <ScrollToComponentButton targetId="form" buttonText="Scroll to Form" /> */}

                    <PrimaryButton
                        title={"APPLY HERE"}
                                isIconPresent={true}
                                
                            />
                            </span>
                    </div>
                </div>
                <div className="hidden md:block">
                    <HeroSVG />
                </div>
                <div className="mt-5 md:hidden grid place-items-center">
                    <span className="">
                        <MobileBG />
                    </span>
                </div>
                
            </div>
          
            
            
        
        </div>
    )
}

export default HeroSection