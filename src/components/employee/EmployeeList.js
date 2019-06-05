import React, { Component } from 'react'
import emp from "./empIcon.jpg"
import "./Employee.css"

class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <h4 className="card-body">
                            <img src={emp} className="icon--emp" />
                            {employee.name}
                            <button
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</button>
                        </h4>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList