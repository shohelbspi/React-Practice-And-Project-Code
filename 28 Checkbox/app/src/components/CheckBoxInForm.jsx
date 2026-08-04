import React, { useState } from 'react'

function CheckBoxInForm() {
    const [formData, setFormData] = useState({
        email: '',
        tc: false
    })

    function handleChange(e) {
        const { name, type, value, checked } = e.target

        console.log(name, type, value, checked);

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData);
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter Your Email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="tc">
                    <input
                        type="checkbox"
                        className='m-4' 
                        name='tc'
                        value={formData.tc}
                        id='tc'
                        onChange={handleChange}
                    />
                    TC
                </label>
                    <br /><br />
                <button type="submit" className='bg-[tomato] text-white p-4 rounded-2xl'>Submit</button>
            </form>

        </div>
    )
}

export default CheckBoxInForm
