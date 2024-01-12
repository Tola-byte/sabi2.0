import React from 'react';

const Select: React.FC<any> = ({ label, placeholder, options, value, onChange }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-bold text-gray-700 pb-4">{label}</label>}
            <div className="relative inline-block w-full">
                <select
                    value={value}
                    onChange={onChange}
                    className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-300"
                >
                    {placeholder && <option value="" className='font-extralight'>{placeholder}</option>}
                    {options.map((option: any) => (
                        <option key={option.value} className="text-xs" value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Select;
