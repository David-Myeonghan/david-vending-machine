import {useState} from 'react'
import Ready from "./Component/Ready.tsx";
import Choose from "./Component/Choose.tsx";
import OrderProvider from "./Context/OrderContext.tsx";
import CommonSection from "./Component/CommonSection.tsx";
import End from "./Component/End.tsx";


export type Step = 'Ready' | 'Choose' | 'End'

function App() {
    const [step, setStep] = useState<Step>('Ready');
    // payment method ?

    return (
        <OrderProvider>
            <div className='layout'>
                {step === 'Ready' && <Ready onNext={() => setStep('Choose')}/>}
                {step === 'Choose' && <Choose onNext={() => setStep('End')}
                                              onPrevious={() => setStep('Ready')}/>}
                {step === 'End' && <End onContinueClick={() => setStep('Choose')}
                                        onReturnClick={() => setStep('Ready')}
                />}
                <CommonSection step={step}/>
            </div>
        </OrderProvider>
    )
}

export default App
