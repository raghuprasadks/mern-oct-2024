import React from 'react'

const Employees = () => {

    const empdata =[
        {
            id: 1,
            name: "Charlie",
            job: "Janitor"
            },
            {
            id: 2,
            name: "Mac",
            job: "Bouncer"
            },
            {
            id: 3,
            name: "Dee",
            job: "Aspiring actress"
            },
            {
            id: 4,
            name: "Dennis",
            job: "Bartender"
        }
    ]
  return (
    <div>
        <h1>Employees</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                {empdata.map((emp) => <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.job}</td>
                </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default Employees