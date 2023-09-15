import React from 'react';
import './singleservice.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const ServiceAccordion = ({accordion}) => {

    const { accordiontitle, accordiondescription } = accordion;

    return (
        <div>
            <h3 className='accordion-heading text-xl'><FontAwesomeIcon icon={faCheck} className='accordion-icon mr-1'></FontAwesomeIcon> {accordiontitle}</h3>
            <p><i>{accordiondescription}</i></p>
        </div>
    );
};

export default ServiceAccordion;