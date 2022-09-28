import React, { useState } from 'react'
import './style.css'
import { Card } from '../../componentes/Card'

export function Home() {

  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])  

  

  function addStudent() {
    const newStudent = {
      id:'',
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState => [ newStudent,...prevState])
  }

  return (
    <div className='container'>
      <header>
      <h1>Lista de presença</h1>
      <div className='user'>
        <strong>Guilherme</strong>
        <img src="https://github.com/GuiPariz.png" alt="Foto de Perfil" />
      </div>

      </header>
      <input
        type="text"
        placeholder='Digite o nome...'
        onChange={e => setStudentName(e.target.value)}
      />
      <button type='button' onClick={addStudent}>Adicionar</button> 

      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time} />)
      }
    </div>
  )
}


