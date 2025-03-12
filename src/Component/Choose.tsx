interface ChooseProps {
    // onNext: () => void;
}

export default function Choose({onNext}: ChooseProps) {
    return (
        <div className='flex-box'>
            <div className='title'>
                <h1>Please choose product</h1>
            </div>
            <div className='button-box'>
                <button>Coke ₩ 1,000</button>
                <button>Water ₩ 600</button>
                <button>Coffee ₩ 700</button>
            </div>
        </div>
    )
}