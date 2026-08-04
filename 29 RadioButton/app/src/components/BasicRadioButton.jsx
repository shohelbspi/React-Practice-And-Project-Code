import React, { useState } from 'react'

function BasicRadioButton() {

    const [gender, setGender] = useState('other')

    function handleOnChange(e) {
        setGender(e.target.value)
    }

    return (
        <div className='flex flex-col items-center'>

            <label htmlFor="male" >
                <input
                    type="radio"
                    id='male'
                    value='male'
                    className='m-4'
                    name='gender'
                    checked={gender === 'male'}
                    onChange={handleOnChange}
                />
                Male
            </label>

            <label htmlFor="female" >
                <input
                    type="radio"
                    id='female'
                    value='female'
                    className='m-4'
                    name='gender'
                    checked={gender === 'female'}
                    onChange={handleOnChange}

                />
                Female
            </label>

            <label htmlFor="other" >
                <input
                    type="radio"
                    id='other'
                    value='other'
                    className='m-4'
                    name='gender'
                    checked={gender === 'other'}
                    onChange={handleOnChange}

                />
                Other
            </label>

        </div>
    )
}

export default BasicRadioButton
