import { SetStateAction, useState } from "react";
import { PrimaryButton } from "../Button"
import { InputFields } from "../InputField"
import Dropdown from "../Select"
import Select from "../Select";
import DateComponent from "../Date";

export const Form = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDate, setSelectedDate] = useState('')
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [background,setBackground] = useState("")

    const handleSelectChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedOption(e.target.value);
    };


    const handleSelectedDate = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Submitted:', { fullname, email, phoneNo, background, selectedDate, selectedOption });
       
    };


    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const handleDateChange = (selectedDate: string) => {
        console.log('Selected date:', selectedDate);
        
    };

    return (
        <div className="flex flex-col">
             <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full p-5 gap-10">
           
            <InputFields
                    title={"Full Name"}
                    value={fullname}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setFullname(e.target.value)}
                    placeholder={"Enter your full name"} />
            
            <InputFields
                    title={"Email"}
                    placeholder={"Enter your email address"}
                    value={email}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)} />
            
            <InputFields
                    title={"Phone Number"}
                    placeholder={"Enter your phone number"}
                    value={phoneNo}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPhoneNo(e.target.value)} />
            
            <InputFields
                    title={"Education Background"}
                    placeholder={"Enter your educational background"}
                    value={background}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setBackground(e.target.value)} />
                    
                  

            </div>

            <div className="flex flex-col p-5 gap-5">
                <p className="text-md font-bold"> Batch and Session Selection</p>
                <div className="flex flex-col gap-5">
            
                    {/* <DateComponent onDateChange={handleDateChange} /> */}

                    <Select
                        label="Date"
                        placeholder="Select Date"
                        options={options}
                        value={selectedDate}
                        onChange={handleSelectedDate}
                    />
                    
                    <Select
                        label="Session"
                        placeholder="Select Session"
                        options={options}
                        value={selectedOption}
                        onChange={handleSelectChange}
                    />
                    
                </div>
                <PrimaryButton
                    title={"Continue to Pay"}
                    isIconPresent={false}
                    type="submit"
                
                />
                
            </div>
           </form>
            </div>
    )
}