import {useOrder} from "../Context/OrderContext.tsx";

interface EndProps {
    onContinueClick: () => void;
    onReturnClick: () => void;
}

export default function End({onContinueClick, onReturnClick}: EndProps) {
    const {insertedCash, paymentMethod, reset} = useOrder();
    const handleContinueClick = () => {
        onContinueClick();
    }
    const handleReturnClick = () => {
        reset();
        onReturnClick();
    }

    const noMoreCash = insertedCash === 0
    const returningTitle = paymentMethod === 'Cash' ? 'Return change' : 'Return card'

    return (
        <div className='flex-box'>
            <div>
                <h1>Thank you!</h1>
            </div>
            <div>
                <h2>Do you want to continue to order?</h2>
            </div>
            <div className='button-box'>
                <button onClick={noMoreCash ? handleReturnClick : handleContinueClick}>Continue</button>
                <button onClick={handleReturnClick}>{returningTitle}</button>
            </div>
        </div>
    )
}