import React from 'react';

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
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
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-900 border border-[#e0bcbc] rounded-xl bg-white 
                           file:px-4 file:py-2 file:mr-4 file:border-0 
                           file:bg-[#560606] file:text-white file:rounded-md 
                           hover:file:bg-[#3f0303] focus:outline-none 
                           focus:border-[#560606] focus:ring-2 focus:ring-[#560606]/40 
                           transition-all duration-200 shadow-sm hover:shadow-md"
            />
        </div>
    );
};

export default FileInput;
