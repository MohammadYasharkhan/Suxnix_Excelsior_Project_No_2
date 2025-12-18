import { createContext, useState, useEffect} from "react";
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




    const removeItem = (id) => {
        setCount((prev) => {
            const newCount = { ...prev };
            delete newCount[id]; // remove key entirely
            return newCount;
        });
    };


    const updateCountForOneIdQty = (qtyof1) => {

        console.log(qtyof1);
        setCount((prev) => ({
            ...prev,
            1: (prev[1] || 0) + qtyof1
        }));

        console.log(count);
    };


    const updateRealCount = (qtyObj) => {
        setCount((prev) => {
            const updated = { ...prev };

            Object.keys(qtyObj).forEach((id) => {
                if (qtyObj[id] === 0) {
                    // remove item
                    delete updated[id];
                } else {
                    // update quantity
                    updated[id] = qtyObj[id];
                }
            });

            return updated;
        });
    };

    const addToCart = (id) => {
        setCount(prev =>
            prev[id]
                ? prev
                : { ...prev, [id]: 1 }
        );
    };

    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        setTotalItems(Object.values(count).reduce(
            (sum, qty) => sum + qty,
            0
        ))
    }, [count]);



    const [subTotal, setSubTotal] = useState(0);

    const discountHandler=(discountName)=>{
        if(discountName==="DISCOUNT10")
        {
            setSubTotal((prev) => prev * 0.9);
        }
    };

    useEffect(() => {
        let total = 0;
        for (const id in count) {
            const product = productData.find(
                item => item.id === Number(id)
            );

            if (product) {
                const price = Number(product.price.replace("Tk", "").trim());
                total += price * count[id];
            }
        }
        setSubTotal(total);
    }, [count]);

    return <ProductSepratorContext.Provider value={{ getProductItems, removeItem, addToCart, count, totalItems, totalUniqueItems, updateCountForOneIdQty, subTotal,updateRealCount,discountHandler }}>
        {children}
    </ProductSepratorContext.Provider>;
}

export { ProductSepratorContextProvider };