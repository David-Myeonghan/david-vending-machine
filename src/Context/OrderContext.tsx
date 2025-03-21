import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface OrderContextType {
    paymentMethod: string;
    handleCardClick: () => void;
    insertedCash: number;
    handleCashClick: (value: number) => void;
    pay: (value: number) => void;
    reset: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

interface OrderProviderProps {
    children: ReactNode
}

export default function OrderProvider({children}: OrderProviderProps) {
    const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'Card'>('Cash');
    const [insertedCash, setInsertedCash] = useState(0);

    const handleCardClick = () => {
        if (insertedCash !== 0) {
            alert('Inserted cash will be return');
            setInsertedCash(0);
        }
        setPaymentMethod('Card')
    }
    const handleCashClick = (value: number) => {
        if (paymentMethod !== 'Cash') {
            alert('Inserted card will be return');
            setPaymentMethod('Cash')
        }
        setInsertedCash(prev => prev + value);
    }
    const pay = (value: number) => {
        setInsertedCash(prev => prev - value);
    }
    const reset = () => {
        setPaymentMethod('Cash')
        setInsertedCash(0)
    }

    return (
        <OrderContext value={{paymentMethod, handleCardClick, insertedCash, handleCashClick, pay, reset}}>
            {children}
        </OrderContext>
    )
}

export const useOrder = () => {
    const orderContext = useContext(OrderContext);
    if (!orderContext) {
        throw new Error('useOrder must be used within OrderProvider');
    }

    return orderContext;
}