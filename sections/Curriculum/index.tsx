import Accordion from "@/components/Accordion"
import CardColoured from "@/components/ColouredCards"
import CardCurriculum from "@/components/CurriculumCards"
import { AccordionData, DataCard } from "@/utils/config"



const Curriculum = () => {
    return (
        <div className="bg-[#F5F6F7] mt-10 md:p-10">
            <p className="text-xl md:text-4xl text-[#005B58] w-full text-center font-bold mt-5">Sabilink Foundation Class Curriculum Details</p>
            <div className="m-auto flex-col-reverse flex md:flex-row p-3 justify-around md:p-10">
                <div className="flex flex-col gap-10 mb-5 ">
                    {
                        DataCard?.map((item) => (
                            <CardCurriculum
                                key={item.title}
                                title={item.title}
                                background={item.background}
                                text={item.text}
                                color={item.color}
                                body={item.body}
                                id={item.title} />
                        ))
                    }
                </div>
               

                <div className="w-full md:w-1/2">
                    {
                        AccordionData.map((item) => (
                            <div className="gap-5" key={item.key}>
                                <Accordion title={item.title} children={item.body} key={item.key} week={item.week} />
                                </div>
                        ))
                    }
                
                </div>
            </div>
        </div>
    )
}


export default Curriculum