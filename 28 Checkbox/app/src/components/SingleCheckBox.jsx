import React, { useState } from 'react'

function SingleCheckBox() {

    const [isChecked,setIsChecked] = useState(true)
    console.log(isChecked);
    
  return (
    <div>
        <label htmlFor="singleCheckBox">
            <input type="checkbox" className='mx-4' id='singleCheckBox' checked={isChecked} onChange={function(e){
                setIsChecked(e.target.checked)
            }}/>

            Terms & Condition
        </label>
      
    </div>
  )
}

export default SingleCheckBox
