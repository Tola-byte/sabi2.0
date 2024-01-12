import { Footer } from "@/components/Footer"
import Benefit from "@/sections/Benefits"
import CourseSection from "@/sections/Courses"
import Curriculum from "@/sections/Curriculum"
import Enroll from "@/sections/Enroll"
import FacilityTrial from "@/sections/Experience"
import HeroSection from "@/sections/Hero"
import QuickReg from "@/sections/QuickEnroll"
import ModeOfTraining from "@/sections/Training"



const Home = () => {
    return (
        <div className="overflow-hidden!important">
            <HeroSection />
            <CourseSection />
            <Benefit />
            <ModeOfTraining />
            <FacilityTrial />
            <Enroll />
            <Curriculum/>
            <QuickReg />
            <Footer/>
        </div>
    )
}

export default Home