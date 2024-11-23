import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

function RestoSigit({name, slogan}) {

    const [counter, setCounter] = useState(0);
    const [customer, setCustomer] = useState(0);

    useEffect(() => {
        console.log(`Customer: ${customer}`);
    }, [customer]);

    function clickHandler() {
        let newCounter = counter + 1;
        alert(`Order Now! ${newCounter} kali`);
        setCounter(newCounter);
    }

    return (
        <div>
            <h1>Resto {name}</h1>
          <h3>{slogan}</h3>
          <button onClick={clickHandler}>Order Now! {counter} kali</button>
          <button onClick={()=> setCustomer(customer + 1)}>{customer} Customer</button>
        </div>
    );
}

RestoSigit.propTypes = {
    slogan: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default RestoSigit;
