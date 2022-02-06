import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';
import "./Exparts.css";

const Exparts = () => {
    const [exparts, setExparts] = useState([]);
    useEffect(() => {
        fetch('ExpertData.json')
            .then(res => res.json())
            .then(data => setExparts(data));
    }, [])
    
    return (
        <div>
            <h1 className='text-primary'>Our Exparts</h1>
            <div className='container mb-5 mt-2'>
                <div className='row-center'>
                    <div className='row'>
                        {
                            exparts.map(expart => <Expart
                                key={expart.id}
                                expart={expart}
                            ></Expart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exparts;