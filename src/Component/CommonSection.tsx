import {useOrder} from "../Context/OrderContext.tsx";
import {Step} from "../App.tsx";

interface CommonSectionProps {
    step: Step;
}

export default function CommonSection({step}: CommonSectionProps) {
    const {insertedCash, paymentMethod} = useOrder();
    
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
                    {paymentMethod === 'Card' ? 'N/A' : insertedCash.toLocaleString()}
                </h3>
            </div>
        </div>
    )
}