"use client";

import { fetchProduct } from "@/redux/slices/productSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomePage =  () => { 
  const [productOffset,setProductOffset] = useState(0);
  const dispatch = useAppDispatch();
  const products: any = useSelector ((state: any)=>state.products);
    // const { invoices } = await getInvoiceList();

    const handleClick = () => {
      // Update the state and call the callback after the update
      setProductOffset((prevCount) => {
        const newCount = prevCount + 3;
        dispatch(fetchProduct({offset:newCount, limit:3}));  // Calling the callback
        return newCount; // Return the new state value
      });
    };

    useEffect(() => {
      dispatch(fetchProduct({offset:productOffset, limit:3}));
    }, []);

    return ( <>{JSON.stringify(products)} <button onClick={()=> handleClick()}>click</button></>
    //   <>
        // <TableViewComponent invoiceProp={invoices} />
    //   </>
    
    );
  };
  
  export default HomePage;
  