import React from 'react';
import {FaPlus} from 'react-icons/fa';
import '../index.css';
import Student from './Student';


const Students = ({students, onDelete}) => {
    const addStudent = () =>{
        console.log('Student added');
    }

    return (
        <div className='container student text-center p-5'>
                <h1>Students list</h1>
                <h2 className='add-student'>
                    Add a student 
                    <button className='btn-plus' onClick={addStudent}>
                        <FaPlus />
                    </button>
                </h2>
            {students.map((student) => (
                <Student key={student.id} student={student} onDelete={onDelete}/>
            ))}
            
        </div>
    )
}

export default Students;
