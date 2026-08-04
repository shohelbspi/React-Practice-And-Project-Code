import React, { useState } from 'react'

function UPIInfo() {

    const [payments,setPayment] = useState('ROCKET')

    const paymentMethods = [
        {
            id: "COD",
            name: "Cash on Delivery",
            info: "Pay with cash upon delivery of your product."
        },
        {
            id: "ROCKET",
            name: "Dutch-Bangla Rocket",
            info: "Pay instantly using your Rocket mobile wallet."
        },
        {
            id: "BKASH",
            name: "bKash Payment",
            info: "Fast and secure payment via bKash gateway."
        },
        {
            id: "NAGAD",
            name: "Nagad Wallet",
            info: "Easy digital payment through Nagad account."
        }
    ];

        function handleOnChange(e) {
        console.log(e.target.value);
        
        setPayment(e.target.value)
    }


    return (
        <div>
            {
                paymentMethods.map(function(item){
                    return (
                        <label key={item.id} htmlFor={item.id} >
                            <input
                                type="radio"
                                id={item.id}
                                value={item.id}
                                className='m-4'
                                name='gender'
                                checked={payments === item.id}
                                onChange={handleOnChange}
                            />
                            {item.id.toLocaleUpperCase()}
                        </label>
                    )
                })
                
            }
            <div>
                <h3>Payment Method : {payments}</h3>
                <p>{paymentMethods.find(function(item){
                    return item.id===payments
                }).info}</p>
            </div>
        </div>
    )
}

export default UPIInfo
