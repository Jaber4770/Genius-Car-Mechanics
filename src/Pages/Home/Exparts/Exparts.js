import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';

const Exparts = () => {
    const [exparts, setExparts] = useState([]);
    useEffect(() => {
        fetch('ExpertData.json')
            .then(res => res.json())
            .then(data => setExparts(data));
    }, [])
    return (
        <div>
            <h1>Our Exparts!</h1>
            <div className='services-container container my-5'>
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;