import Header from './components/Header.js';
import Students from './components/Students';
import  {useState} from 'react';

function App() {

const [students, crudStudent] = useState([
  {
      id: 1,
      name: 'Bachir',
      section: 'php',
      isGRaduated : true
  },
  {
      id: 2,
      name: 'Thomas',
      section: 'php',
      isGRaduated : true
  },
  {
      id: 3,
      name: 'Fathia',
      section: 'php',
      isGRaduated : true
  },
  {
      id: 4,
      name: 'Furkan',
      section: 'php',
      isGRaduated : true
  },
  {
      id: 5,
      name: 'Jean-Guy',
      section: 'php',
      isGRaduated : true
  },
  {
      id: 6,
      name: 'Dorianne',
      section: 'js',
      isGRaduated : true
  },
  {
      id: 7,
      name: 'Albert',
      section: 'data',
      isGRaduated : false
  },
]);

const deleteStudent = (id) => {
  crudStudent(students.splice(id.id-1,0));
  console.log(id.id-1);
  crudStudent(students.filter((student)=> student.id !== id.id));
}

  return (
    <div className="App">
      <Header />
      <Students students={students} onDelete={deleteStudent}/>

    </div>
  );
}

export default App;
