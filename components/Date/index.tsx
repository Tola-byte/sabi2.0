// DateComponent.tsx
import { DateComponentProps } from '@/types';
import React, { ChangeEvent } from 'react';

const DateComponent: React.FC<DateComponentProps> = ({ onDateChange }) => {
    return (
        <div className="">
            <label htmlFor="datePicker" className="block text-gray-700 text-sm font-bold mb-2">
                Select a date:
            </label>
            <input
                type="date"
                id="datePicker"
                className="border rounded py-2 px-3 text-gray-700 w-full leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onDateChange(e.target.value)}
            />
        </div>
    );
};

export default DateComponent;
