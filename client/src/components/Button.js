import React from 'react';
import {FaTrash} from 'react-icons/fa';
import '../index.css';
import Students from './Students';


const Button = ({onDelete, id}) => {

    return (
        <button className='trash' onClick={() => onDelete({id})}>
             <FaTrash />
        </button>
            
    )
}

export default Button;
