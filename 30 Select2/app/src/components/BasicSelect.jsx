import React, { useState } from 'react'

function BasicSelect() {
    
    const[paymentMethod,setPaymentMethod] = useState('')
    console.log(paymentMethod);
    
  return (
    <div>

        <label className='text-3xl text-black'>Select Payment Method </label>

        <select className='m-4 border border-amber-500 p-3' value={paymentMethod} onChange={function(e){
            setPaymentMethod(e.target.value)
        }}>
            <option value="">Select Payment Method</option>
            <option value="cod">COD</option>
            <option value="rocket">ROCKET</option>
            <option value="bikash">BIKASH</option>
            <option value="nagad">NAGAD</option>
        </select>

    </div>
  )
}

export default BasicSelect
