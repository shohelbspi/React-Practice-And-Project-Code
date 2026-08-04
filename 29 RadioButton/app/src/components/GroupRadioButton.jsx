import React, { useState } from 'react'

function GroupRadioButton() {
    const [language, setLanguage] = useState('python')

    const languages = ['html', 'css', 'js', 'react', 'next', 'node', 'express']


    function handleOnChange(e) {
        console.log(e.target.value);
        
        setLanguage(e.target.value)
    }

    return (
        <div className='flex flex-col items-center'>

            {
                languages.map(function (lang) {
                    return (
                        <label key={lang} htmlFor={lang} >
                            <input
                                type="radio"
                                id={lang}
                                value={lang}
                                className='m-4'
                                name='gender'
                                checked={language === lang}
                                onChange={handleOnChange}
                            />
                            {lang.toLocaleUpperCase()}
                        </label>
                    )
                })
            }


        </div>
    )
}

export default GroupRadioButton
