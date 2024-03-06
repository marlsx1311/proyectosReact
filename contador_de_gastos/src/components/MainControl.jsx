import React, { useState } from 'react';
import Balance from './Balance';
import FormAddBills from './FormAddBills';

const MainControl = ({count}) => {
const [bills , setBills] = useState([])   
const [type, setType] = useState("")
const [price, setPrice] = useState("")

    return (
        <div>
            <Balance count ={count}/>
            <FormAddBills setPrice={setPrice} setType={setType} type={type} price={price} setBills={setBills} bills={bills}/>
        </div>
    );
};

export default MainControl;