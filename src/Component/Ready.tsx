import {useOrder} from "../Context/OrderContext.tsx";

interface ReadyProps {
    onNext: () => void;
}

export default function Ready({onNext}: ReadyProps) {
    const {paymentMethod, insertedCash, handleCardClick, handleCashClick} = useOrder();

    return (
        <div className='flex-box'>
            <div className='title'>
                <h1>Please insert coin or card</h1>
            </div>

            <div className='button-box'>
                <button onClick={() => handleCashClick(100)}>₩ 100</button>
                <button onClick={() => handleCashClick(500)}>₩ 500</button>
                <button onClick={() => handleCashClick(1000)}>₩ 1,000</button>
                <button onClick={() => handleCashClick(5000)}>₩ 5,000</button>
                <button onClick={() => handleCashClick(10000)}>₩ 10,000</button>
            </div>
            <div>
                <button onClick={handleCardClick}>Insert Card
                </button>
            </div>
            <div>
                <button onClick={onNext}>Choose product</button>
            </div>
        </div>
    )
}