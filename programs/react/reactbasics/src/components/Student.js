import React from 'react'

const Student = (property) => {

    let studentdata = property.data

  return (
    <div className='users-container'>
        <h1>Student Master</h1>
        <table className='users-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                {studentdata.map((student) => <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.job}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Student