import React, { useState } from 'react'

function GroupCheckBox() {
    const [isLanguage,setIsLanguage] = useState({
        html:true,
        css :true,
        js:true

    })

    function handleCheckBox(e){
        const key = e.target.name
        setIsLanguage({
            ...isLanguage,[key]:e.target.checked
        })
        
    }
    
    return (
        <div>
            <label htmlFor="html">
                <input type="checkbox"
                    id='html'
                    name='html'
                    checked={isLanguage.html}
                    onChange={handleCheckBox}
                    className='m-4'
                />
                HTML
            </label>

            <label htmlFor="css">
                <input type="checkbox"
                    id='css'
                    name='css'
                    checked={isLanguage.css}
                    onChange={handleCheckBox}
                    className='m-4'
                />
                CSS
            </label>
            <label htmlFor="js">
                <input type="checkbox"
                    id='js'
                    name='js'
                    checked={isLanguage.js}
                    onChange={handleCheckBox}
                    className='m-4'
                />
                CSS
            </label>
        </div>
    )
}

export default GroupCheckBox
