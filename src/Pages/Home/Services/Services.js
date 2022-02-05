import React, { useEffect, useState } from 'react';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>this is services</h1>
            <h2>services length is : {services.length}</h2>
        </div>
    );
};

export default Services;