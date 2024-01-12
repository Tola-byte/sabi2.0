import { ReactComponentElement } from "react";


export interface ButtonTypes {
    title: string;
    isIconPresent: boolean;
    action?: string;
    type?: any
}

export interface NavBarRoutesTypes{
    title: string;
    path: string
    key: number
}

export interface CoursesDataTypes {
    title: string;
    location: string;
    body: string;
    id: number;
    Icon: React.FC<React.SVGProps<SVGSVGElement>> | any
}

export interface BenefitsDataTypes {
    title: string;
    body: string;
    id: number;
    Icon: React.FC<React.SVGProps<SVGSVGElement>> | any
}

export interface ColoredCardTypes {
    title: string;
    background: string;
    color: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>> | any;
    id?: number;
    body: string
}
export interface CurriculumCardTypes {
    title: string;
    id: number | string;
    body: string
    color: string;
    background: string;
    key?: string;
    text: string;
}


export interface PlainCardTypes {
    title: string;
    body: string
   
 
}
export interface InputTypes{
    title: string;
    placeholder: string;
    value: string | number;
    onChange: any;

}


export interface DateComponentProps {
    onDateChange: (selectedDate: string) => void;
}
