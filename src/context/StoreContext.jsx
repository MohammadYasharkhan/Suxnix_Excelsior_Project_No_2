import { createContext, useState, useEffect, useContext } from "react";
import { productData } from "../assets";

export const ProductSepratorContext = createContext();

function ProductSepratorContextProvider({ children }) {
    const getProductItems = (from, to) => {
        const dataObject = [];
        for (let index = from - 1; index < to; index++) {
            dataObject.push(productData[index]);
        }
        return dataObject;
    }

    const [count, setCount] = useState({});

    const totalUniqueItems = Object.keys(count).length;


    const increment = (id) => {
        setCount((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
        console.log(count);
    };


    const decrement = (id) => {
        setCount((prev) => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0
        }));
        console.log(count);
    };

    const removeItem = (id) => {
        setCount((prev) => {
            const newCount = { ...prev };
            delete newCount[id]; // remove key entirely
            return newCount;
        });
    };


    const updateCountForOneIdQty=(qtyof1)=>{

        console.log(qtyof1);
        setCount((prev)=>({
                ...prev,
                1: (prev[1] || 0) + qtyof1
        }));

        console.log(count);
    };

    const addToCart = (id) => {
        setCount(prev =>
            prev[id]
                ? prev
                : { ...prev, [id]: 1 }
        );
    };

    const [totalItems,setTotalItems]=useState(0);
    useEffect(() => {
        setTotalItems(Object.values(count).reduce(
            (sum, qty) => sum + qty,
            0
        ))
    }, [count]);

    return <ProductSepratorContext.Provider value={{ getProductItems, increment, decrement, removeItem, addToCart, count ,totalItems,totalUniqueItems,updateCountForOneIdQty}}>
        {children}
    </ProductSepratorContext.Provider>;
}

export { ProductSepratorContextProvider };