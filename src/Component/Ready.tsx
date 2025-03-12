interface ReadyProps {
    onNext: () => void;
}

export default function Ready({onNext}: ReadyProps) {
    return (
        <div className='flex-box'>
            <div className='title'>
                <h1>Plase insert coin or card</h1>
            </div>
            <div className='button-box'>
                <button>₩ 100</button>
                <button>₩ 500</button>
                <button>₩ 1,000</button>
                <button>₩ 5,000</button>
                <button>₩ 10,000</button>
            </div>
            <div>
                <button>Insert Card</button>
            </div>
            <div>
                <button onClick={onNext}>Choose product</button>
            </div>
        </div>
    )
}