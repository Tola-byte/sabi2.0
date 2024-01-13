import { BenefitsDataTypes, ColoredCardTypes, CoursesDataTypes, NavBarRoutesTypes, PlainCardTypes } from "@/types";
import ProgrammingIcon from "../public/icons/programming.svg"
import SystemIcon  from "../public/icons/operatingsystem.svg"
import CloudIcon from "../public/icons/cloud.svg"
import TerraformIcon from "../public/icons/terraform.svg"
import FactoryIcon from "../public/icons/factory.svg"
import One from "../public/icons/one.svg"
import Two from "../public/icons/two.svg"
import Three from "../public/icons/three.svg"
import Four from "../public/icons/four.svg"

export const NavBarRoutes: NavBarRoutesTypes[] = [
    {
        title: "Home",
        path: "/",
        key: 1
    },
    {
        title: "Foundation Class",
        path: "#",
        key:2
    },
    {
        title: "Executive Training",
        path: "#",
        key: 3
    },
    {
        title: "About US",
        path: "#",
        key:4
    }
]

export const CoursesData : CoursesDataTypes[] = [
    {
        title: "Introduction to Programming Languages",
        Icon: ProgrammingIcon ,
        location: "Physical",
        id: 1,
        body: "Introduction to Problem Solving with Java, Participants would understand Object Oriented Programming and build a Breakout Game. This project requires understanding of basic Maths",
    },
    {
        title: "Operating System - Linux and Unix",
        Icon: SystemIcon,
        id:2,
        location: "Physical",
        body: "Participants would learn basic Linux commands, Participants would learn and use virtual machines to understand basic Linux Networking and Client-Server model.",
    },
    {
        title: "Cloud Computing - Amazon Web Services",
        Icon: CloudIcon,
        location: "Virtual",
        id:3,
        body: "Currently, Amazon Web Service (AWS) is the top rank compared to other cloud services providers like IBM, Microsoft, Google, HP, etc. Currently, Amazon Web Serv ice (AWS) is the top rank.",
    },
    {
        title: "Code Infrastructure - Terraform",
        Icon: TerraformIcon,
        location: "Virtual",
        id:4,
        body: "This helps participants build on their knowledge of programming and AWS to automate Infrastructure, they will be introduced to AWS Cloud formation and Terraform ",
    }
]

export const BenefitData: BenefitsDataTypes[] = [
    {
        title: "Equipped Facility",
        body: "Immerse yourself in a top-notch learning environment. Tuition includes access to our Abuja facility, equipped with iMacs for hands-on learning and collaboration.",
        Icon: FactoryIcon,
        id: 1,
    },
    
    {
        title: "One-Year Program Coverage",
        body: "Secure your spot for a one-year training program. Tuition of C$4,000 covers the entire duration, ensuring ample time to master essential tech skills",
        Icon: FactoryIcon,
        id:2
    },
    {
        title: "Curriculum Excellence",
        body: "Unlock a comprehensive curriculum led by industry-standard instructors. Your investment guarantees access to top-notch tech education, guided by passionate experts.",
        Icon: FactoryIcon,
        id:3
    }
]

export const TrainingCardData = [
    {
        title: "9am - 3pm (Mon - Saturday)",
        session: "MORNING SESSION",
        id: 1,
        mode: "Physical Class",
        students: 10
    },
    {
        title: "4pm - 5pm(Mon - Saturday)",
        session: "AFTERNOON SESSION",
        mode: "Physical Class",
        students: 10,
        id: 2
    }
]

export const AccordionData = [
    {
        week: 1,
        key:1,
        title: "Introduction to Programming",
        body: "We will talk about brief history of Linux and UNIX understand basic concept of operating system, kernel, shell and file system structure then we explore different method of installing Linux using both GUI and Text Editor"
    },

    {
        week: 2,
        key:2,
        title: "Introduction and Installation of Linux",
        body: "We will talk about brief history of Linux and UNIX understand basic concept of operating system, kernel, shell and file system structure then we explore different method of installing Linux using both GUI and Text Editor"
    },
    {
        week: 3,
        key:3,
        title: "Data Structures and Algorithms",
        body: "We will talk about brief history of Linux and UNIX understand basic concept of operating system, kernel, shell and file system structure then we explore different method of installing Linux using both GUI and Text Editor"
    },
    {
        week: 4,
        key:4,
        title: "Azure DevOps",
        body: "We will talk about brief history of Linux and UNIX understand basic concept of operating system, kernel, shell and file system structure then we explore different method of installing Linux using both GUI and Text Editor"
    }
]
export const PlainCardData: PlainCardTypes[] = [
    {
        title: "Paid Internship",
        body: "We guarantee paid internship opportunity with Sabilink after completing our 1yr intensive training while we assist you with job placement "
    },

    {
        title: "Study Computer Science in Canada",
        body: "After Sabilink training, we connect you with schools in Canada to study Computer Science"
    },
    {
        title: "Entrepreneur: Build your business idea",
        body: "After Sabilink training, we work with entrepreneurs to accelerate building their Minimum Viable Product and support their business to expand to Canada."
    }
]
export const DataCard = [
    {
        title: "Introduction to Programming Languages",
        color: "#028D8C",
        background: "#fff",
        text: "black",
        body: "Master the basics of programming, algorithms, and problem-solving to build a strong coding foundation."
    },
    {
        title: "Operating System - Linux and Unix",
        color: "#DFFFFF",
        text: "white",
        background: "#061C3D",
        body: "Navigate the Unix environment, delve into scripting, and gain proficiency in system administration."
    },
    {
        title: "Cloud Computing - Amazon Web Services",
        color: "#DFFFFF",
        text: "white",
        background: "#061C3D",
        body: " Understand the architecture of large-scale code infrastructure and develop skills for scalable systems."
    }
]
export const DateData = [
    {
        title: "5th Mar - 9th Mar 2024",
        morning: "MORNING (9am - 3pm)",
        morningtime: "6/10",
        evening: "EVENING (4pm - 8pm)",
        eveningtime: "4/10"
    },

    {
        title: "12th Mar - 16th Mar 2024",
        morning: "MORNING (9am - 3pm)",
        morningtime: "6/10",
        evening: "EVENING (4pm - 8pm)",
        eveningtime: "4/10"
    },

    {
        title: "19th Mar - 23rd Mar 2024",
        morning: "MORNING (9am - 3pm)",
        morningtime: "6/10",
        evening: "EVENING (4pm - 8pm)",
        eveningtime: "4/10"
    }
]
export const ColoredCardData : ColoredCardTypes[] = [
    {
        title: "Register and Pay ₦100K Registration Fee",
        color: "#892929",
        background: "#FCECEC",
        id: 1,
        Icon: One,
        body: "Begin your journey by registering for the Sabilink Foundation Class. Upon registration, a ₦100,000 registration fee secures your spot in the program."
    },
    {
        title: "1 Week of Training in Our Digital Hub ",
        color: "#056A68",
        background: "#B9E3E1",
        id: 2,
        Icon: Two,
        body: "Embark on a one-week training in our Digital Hub, focusing on logic and Javascript. This immersive experience sets the stage for the challenges ahead."
    },
    {
        title: "Two Assessments",
        color: "#833500",
        background: "#FFCD9D",
        id: 3,
        Icon: Three,
        body: "Demonstrate your skills through two targeted assessments. These assessments ensure you're well-prepared for the Sabilink Foundation Class."
    },
    {
        title: "Successful Participants Pay ₦3,500,000 ($4000 CAD) for 1 Year Intense Training",
        color: "#DFFFFF",
        Icon: Four,
        background: "#061C3D",
        id: 4,
        body: "Congratulations! Successful participants are invited to enroll in the intensive one- year training program.The tuition fee for this transformative journey is ₦3, 500,000(or $4000 CAD)."
    }
]