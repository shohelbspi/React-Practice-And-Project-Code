import React,{useState} from 'react'

function SelectAllDeselectAll() {
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

      const allChecked = Object.values(isLanguage).every(function(item){
        return item===true
      })
      console.log(allChecked);
      
      return (
          <div>
              <label htmlFor="selectall">
                  <input type="checkbox"
                      id='selectall'
                      name='selectall'
                      checked={allChecked}
                      onChange={function(e){
                        setIsLanguage({
                            html : e.target.checked,
                            css : e.target.checked,
                            js : e.target.checked,
                        })
                      }}
                      className='m-4'
                  />
                  Select All
              </label>

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

               <div className='flex flex-col items-center'>
                <p>{isLanguage.html && "HTML Selected"}</p>
                <p>{isLanguage.css && "CSS Selected"}</p>
                <p>{isLanguage.js && "JS Selected"}</p>
            </div>
          </div>
      )
}

export default SelectAllDeselectAll
