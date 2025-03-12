import {useOrder} from "../Context/OrderContext.tsx";

interface ChooseProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function Choose({onNext, onPrevious}: ChooseProps) {
    const {insertedCash, paymentMethod, pay} = useOrder()
    const handleProductClick = (value: number) => {
        if (paymentMethod === 'Cash' && insertedCash < value) {
            onPrevious();
            alert('Insufficient fund. Please insert cash more.')
        } else {
            pay(value);
            onNext();
        }

    }
    return (
        <div className='flex-box'>
            <div className='title'>
                <h1>Please choose product</h1>
            </div>
            <div className='button-box'>
                <button onClick={() => handleProductClick(1000)}>Coke ₩ 1,000</button>
                <button onClick={() => handleProductClick(600)}>Water ₩ 600</button>
                <button onClick={() => handleProductClick(700)}>Coffee ₩ 700</button>
            </div>
        </div>
    )
}