import data from '../data.json'

function PhoneDetailsCard() {

    return (
        <div className='bg-gray-900 min-h-screen p-4 md:p-8 text-white flex flex-col items-center justify-center'>
            
            <div className='w-full max-w-4xl space-y-6'>
                {data.map(function (phoneDetails, index) {
                    return (
                        <div key={index} className='flex flex-col md:flex-row bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 gap-6 border border-gray-700 items-center md:items-start'>
                            
                            <div className='w-full md:w-1/4 flex justify-center items-center bg-gray-900/50 p-4 rounded-xl'>
                                <img 
                                    src={phoneDetails.image} 
                                    alt={phoneDetails.title || "phone"} 
                                    className='max-h-48 object-contain hover:scale-105 transition-transform duration-300'
                                />
                            </div>

                            <div className='flex-1 space-y-3 w-full'>
                                <h2 className='text-white/80 text-xl font-bold '>
                                    {phoneDetails.title}
                                </h2>
                                
                                <div className='flex items-center gap-1 text-sm font-medium'>
                                    <p className='bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold'>
                                        ★ {phoneDetails.rating}
                                    </p>
                                    <span className='text-gray-400'>
                                        ({phoneDetails.reviews} Reviews)
                                    </span>
                                </div>

                                <ul className='text-sm text-gray-300 space-y-1 list-disc list-inside pt-2'>
                                    {phoneDetails.details.map(function (item, itemIndex) {
                                        return (
                                            <li key={itemIndex} className='leading-relaxed'>
                                                {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p className='text-green-600'>{phoneDetails.offers.exchangeOffer}</p>
                                <p className='text-green-400'>{phoneDetails.offers.bankOffer}</p>
                            </div>

                            <div className='w-full md:w-auto flex md:flex-col justify-between items-center md:items-end gap-2 border-t md:border-t-0 border-gray-700 pt-2 md:pt-0'>
                                <p className='text-2xl font-extrabold text-white'>
                                    {phoneDetails.price}
                                </p>
                                <p className='line-through'>{phoneDetails.originalPrice}</p>
                                <p className='text-green-400'>{phoneDetails.discount}</p>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default PhoneDetailsCard