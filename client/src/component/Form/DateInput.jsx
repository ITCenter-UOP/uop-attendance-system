import React from 'react';

const DateInput = ({ label, name, value, onChange, required = false }) => {
    return (
        <div className="mb-5">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-semibold text-[#560606] mb-2"
                >
                    {label}
                </label>
            )}
            <input
                type="date"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-xl border border-[#e0bcbc] bg-white text-gray-900 
                           focus:outline-none focus:border-[#560606] focus:ring-2 focus:ring-[#560606]/40 
                           transition-all duration-200 shadow-sm hover:shadow-md"
            />
        </div>
    );
};

export default DateInput;
