import {useOrder} from "../Context/OrderContext.tsx";

export default function CommonSection() {
    const {insertedCash, paymentMethod} = useOrder()
    return (
        <div className='subtitle-box'>
            <div className='subtitle-section'>
                <h3>Payment Method: </h3>
                <h3>
                    {paymentMethod}
                </h3>
            </div>
            <div className='subtitle-section'>
                <h3>inserted cash: </h3>
                <h3>
                    {paymentMethod === 'Card' ? 'N/A' : insertedCash}
                </h3>
            </div>
        </div>
    )
}