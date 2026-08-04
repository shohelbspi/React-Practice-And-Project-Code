import React, { useState } from 'react'

function MultiCheckBox() {
    const [isHtml, setisHtml] = useState(true)
    const [isCss, setIsCss] = useState(true)
    const [isJs, setIsJs] = useState(true)
    return (
        <div>
            
            <label htmlFor="html">
                <input type="checkbox"
                    id='html'
                    checked={isHtml}
                    onChange={function (e) {
                        setisHtml(e.target.checked)
                    }}
                    className='m-4'
                />
                HTML
            </label>

            <label htmlFor="css">
                <input type="checkbox"
                    id='css'
                    checked={isCss}
                    onChange={function (e) {
                        setIsCss(e.target.checked)
                    }}
                    className='m-4'
                />
                CSS
            </label>
            <label htmlFor="js">
                <input type="checkbox"
                    id='js'
                    checked={isJs}
                    onChange={function (e) {
                        setIsJs(e.target.checked)
                    }}
                    className='m-4'
                />
                CSS
            </label>

            <div className='flex flex-col items-center'>
                <p>{isHtml && "HTML Selected"}</p>
                <p>{isCss && "CSS Selected"}</p>
                <p>{isJs && "JS Selected"}</p>
            </div>

        </div>
    )
}

export default MultiCheckBox
