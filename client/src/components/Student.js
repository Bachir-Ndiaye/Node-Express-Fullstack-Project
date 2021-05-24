import React from 'react';
import Button from './Button.js';
import '../index.css';

const Student = ({student, onDelete}) => {
   

    return (
        <div className='container block text-center p-5'>
          
           <h3>
                Student N° {student.id} <Button onDelete={onDelete} id={student.id}/>
            </h3>
            <ul>
                <li><span>Name</span> : {student.name}</li>
                <li><span>Section</span> : {student.section}</li>
            </ul>
        
        </div>
    )
}

export default Student;
