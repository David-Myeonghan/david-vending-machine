import {useOrder} from "../Context/OrderContext.tsx";

interface ReadyProps {
    onNext: () => void;
}

export default function Ready({onNext}: ReadyProps) {
    const {paymentMethod, insertedCash, handleCardClick, handleCashClick} = useOrder();

    return (
        <div className='flex-box'>
            <div className='title'>
                <h1>Plase insert coin or card</h1>
            </div>
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
                        {insertedCash}
                    </h3>
                </div>
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