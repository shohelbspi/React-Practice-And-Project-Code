import React, { useState } from 'react'

function UPIInfoTwo() {

    const [payments,setPayment] = useState(        {
            id: "COD",
            name: "Cash on Delivery",
            info: "Pay with cash upon delivery of your product."
        })

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
                                checked={payments.id === item.id}
                                onChange={function(){
                                    setPayment(item)
                                }}
                            />
                            {item.id.toLocaleUpperCase()}
                        </label>
                    )
                })
               
                
            }

              <div>
                <h3>Payment Method : {payments.id}</h3>
                <p>{payments.info}</p>
            </div>

        </div>
    )
}

export default UPIInfoTwo
