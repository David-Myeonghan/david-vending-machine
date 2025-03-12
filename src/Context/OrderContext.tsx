import {createContext, ReactNode, useContext, useState} from "react";

interface OrderContextType {
    paymentMethod: string;
    handleCardClick: () => void;
    insertedCash: number;
    handleCashClick: (value: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

interface OrderProviderProps {
    children: ReactNode
}

export default function OrderProvider({children}: OrderProviderProps) {
    const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'Card'>('Cash');
    const [insertedCash, setInsertedCash] = useState(0);

    const handleCardClick = () => {
        setPaymentMethod('Card')
    }
    const handleCashClick = (value: number) => {
        setInsertedCash(prev => prev + value);
    }

    return (
        <OrderContext value={{paymentMethod, handleCardClick, insertedCash, handleCashClick}}>
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