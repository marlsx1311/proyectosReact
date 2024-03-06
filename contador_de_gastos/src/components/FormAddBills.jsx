import React from 'react';
import { useState } from 'react';

const FormAddBills = ({setPrice, setType, type, price, setBills, bills}) => {
    const [error, setError] = useState(false)
    const handleBills = e =>{
        e.preventDefault()
        console.log(type)
        console.log(price)
        if(price === "" || Number(price) < 0 || type === ""){
            setError(true)
            return
        }
        setError(false)
        const data={
            type: type,
            price: price,
            id: Date.now()
        }
        setBills([...bills,data])
        setType("")
        setPrice("")
        console.log(bills);
    }

    return (
        <div>
            <h3>Agregar Gastos</h3>
            <form onSubmit={handleBills}>
                <p>servicios</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                <option value="">--Elejir--</option>
                <option value="alquiler">Alquiler o hipoteca</option>
                <option value="comida">Comida</option>
                <option value="entretenimiento">Entretenimiento</option>
                <option value="gasolina">Gasolina/Transporte</option>
                <option value="impuestos">Impuestos</option>
                <option value="internet">Internet</option>
                <option value="luz">Luz</option>
                <option value="ropa">Ropa</option>
                <option value="salud">Salud (seguro médico, medicamentos)</option>
                <option value="telefono">Teléfono</option>
                <option value="transporte_publico">Transporte público</option>
                <option value="utensilios_domesticos">Utensilios domésticos (limpieza, productos de cuidado personal)</option>
                <option value="seguro">Seguro (auto, vida, hogar)</option>
                <option value="ahorros">Ahorros/Inversiones</option>
                <option value="otros">Otros (gastos imprevistos, pequeñas compras)</option>
                </select>
                <p>Cantidad</p>
                <input type="number" placeholder='20000' onChange={e => setPrice(e.target.value)} value={price} />
                <input type="submit" value='Agregar' />
            </form>
            {error ? <p className='error'>Campo invalido</p> : null }
        </div>
    );
};

export default FormAddBills;