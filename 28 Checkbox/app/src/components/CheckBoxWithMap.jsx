import React, { useState } from 'react'

function CheckBoxWithMap() {

  const [languages, setLanguage] = useState({
    html: true,
    css: true,
    js: true
  })

  const allChecked = Object.values(languages).every(function (item) {
    return item === true
  })

  function handleCheckBox(e) {
    const name = e.target.name
    setLanguage({
      ...languages, [name]: e.target.checked
    })
  }

  function handleAllSelectCheckBox(e) {
    setLanguage({
      html: e.target.checked,
      css: e.target.checked,
      js: e.target.checked
    })

  }



  return (

    <div>
      <label htmlFor="all-select">
        <input type="checkbox"
          className='mx-4'
          id='all-select'
          name='all-select'
          checked={allChecked}
          onChange={handleAllSelectCheckBox}
        />
        All Select
      </label>

      {
        Object.keys(languages).map(function (item, index) {
          return (
            <label key={index} htmlFor={item}>
              <input type="checkbox"
                className='mx-4'
                id={item}
                name={item}
                checked={languages[item]}
                onChange={handleCheckBox}
              />
              {item.toUpperCase()}
            </label>
          )
        })
      }


    </div>
  )
}

export default CheckBoxWithMap
