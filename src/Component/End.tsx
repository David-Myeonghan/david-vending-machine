import {useOrder} from "../Context/OrderContext.tsx";

interface EndProps {
    onContinueClick: () => void;
    onReturnClick: () => void;
}

export default function End({onContinueClick, onReturnClick}: EndProps) {
    const {reset} = useOrder();
    const handleContinueClick = () => {
        onContinueClick();
    }
    const handleReturnClick = () => {
        reset();
        onReturnClick();
    }

    return (
        <div className='flex-box'>
            <div>
                <h1>Thank you!</h1>
            </div>
            <div>
                <h2>Do you want to continue to order?</h2>
            </div>
            <div className='button-box'>
                <button onClick={handleContinueClick}>Continue</button>
                <button onClick={handleReturnClick}>Return change</button>
            </div>
        </div>
    )
}