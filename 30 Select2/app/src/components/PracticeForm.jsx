import React, { useState } from 'react'

function PracticeForm() {

    // ১. ফর্মে সমস্ত ইনপুটের জন্য একটি মাত্র স্টেট
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        gender: 'male',          // Radio
        country: 'Bangladesh',   // Select Dropdown
        skills: {                // Group Checkbox (Multiple)
            react: true,
            laravel: false,
            node: false
        },
        agreeTerms: false        // Single Checkbox
    });

    // 🎯 ১টি ইউনিভার্সাল হ্যান্ডলার ফাংশন
    function handleChange(e) {
        const { name, type, checked, value, dataset } = e.target;
        const group = dataset.group;
        console.log(dataset,group);
        

        setFormData(function (prevData) {
            // Group Checkbox-এর জন্য
            if (group) {
                return {
                    ...prevData,
                    [group]: {
                        ...prevData[group],
                        [name]: checked
                    }
                };
            }

            // সাধারণ Checkbox-এর জন্য
            const inputValue = type === 'checkbox' ? checked : value;

            return {
                ...prevData,
                [name]: inputValue
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted Form Data:", formData);
        alert("ফর্ম সফলভাবে জমা হয়েছে! Console চেক করুন।");
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 border border-gray-200">

                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-3">
                    User Registration Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* 1. Text Input (Full Name) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-500 outline-none"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 2. Email & Password Input */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-500 outline-none"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-500 outline-none"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* 3. Radio Buttons (Gender) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Gender (Radio Input)
                        </label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    className="accent-amber-500 w-4 h-4"
                                />
                                Male
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    className="accent-amber-500 w-4 h-4"
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* 4. Select Dropdown (Country) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Select Country
                        </label>
                        <select
                            name="country"
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-500 outline-none bg-white cursor-pointer"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>

                    {/* 5. Group Checkboxes (Skills) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Skills (Group Checkbox)
                        </label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input
                                    type="checkbox"
                                    name="react"
                                    data-group="skills"
                                    checked={formData.skills.react}
                                    onChange={handleChange}
                                    className="accent-amber-500 rounded w-4 h-4"
                                />
                                React JS
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input
                                    type="checkbox"
                                    name="laravel"
                                    data-group="skills"
                                    checked={formData.skills.laravel}
                                    onChange={handleChange}
                                    className="accent-amber-500 rounded w-4 h-4"
                                />
                                Laravel
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input
                                    type="checkbox"
                                    name="node"
                                    data-group="skills"
                                    checked={formData.skills.node}
                                    onChange={handleChange}
                                    className="accent-amber-500 rounded w-4 h-4"
                                />
                                Node JS
                            </label>
                        </div>
                    </div>

                    {/* 6. Single Checkbox (Terms & Conditions) */}
                    <div className="pt-2">
                        <label className="flex items-center gap-2 cursor-pointer text-sm">
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                className="accent-amber-500 rounded w-4 h-4"
                                required
                            />
                            I agree to the Terms & Conditions
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
                    >
                        Submit Form
                    </button>

                </form>
            </div>
        </div>
    );
}

export default PracticeForm
