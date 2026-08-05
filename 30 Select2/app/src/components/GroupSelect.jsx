import React,{useState} from 'react'

function GroupSelect() {
  const [paymentMethod, setPaymentMethod] = useState('')
     console.log(paymentMethod);
 
     const paymentMethods = ['cod', 'rocket', 'bikash', 'nagad', 'card']
 
     return (
         <div>
 
             <label className='text-3xl text-black'>Select Payment Method </label>
 
             <select className='m-4 border border-amber-500 p-3' value={paymentMethod} onChange={function (e) {
                 setPaymentMethod(e.target.value)
             }}>
                 <option value="">Select Payment Method</option>
                 {
                     paymentMethods.map(function (item) {
                         return(
                            <option value={item} key={item}>{item.toUpperCase()}</option>
                         )
                     })
                 }
             </select>
 
         </div>
     )
}

export default GroupSelect
