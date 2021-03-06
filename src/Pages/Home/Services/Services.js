import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('/ServicesData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services'>
            <h1 className='text-primary mt-5 mb-3'>Our Services</h1>
            <div className='services-container container mb-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;