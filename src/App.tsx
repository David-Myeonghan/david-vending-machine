import {useState} from 'react'
import Ready from "./Component/Ready.tsx";
import Choose from "./Component/Choose.tsx";
import OrderProvider from "./Context/OrderContext.tsx";


type Step = 'Ready' | 'Choose'

function App() {
    const [step, setStep] = useState<Step>('Ready');
    // payment method ?

    return (
        <OrderProvider>
            <div className='layout'>
                {step === 'Ready' && <Ready onNext={() => setStep('Choose')}/>}
                {step === 'Choose' && <Choose/>}
            </div>
        </OrderProvider>
    )
}

export default App
