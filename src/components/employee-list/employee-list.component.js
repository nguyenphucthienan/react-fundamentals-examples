import React, { Component } from 'react';
import Employee from '../employee/employee.component';

class EmployeeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      employees: []
    };
  }

  componentDidMount() {
    // Mocking API calls
    setTimeout(() => {
      this.setState({
        loading: false,
        employees: [
          { id: 1, firstName: 'Hieu', lastName: 'Dang' },
          { id: 2, firstName: 'Thang', lastName: 'Tran' },
          { id: 3, firstName: 'An', lastName: 'Nguyen' }
        ]
      });
    }, 3000);
  }

  render() {
    const { loading, employees } = this.state;
    return loading ? (
      <div>Loading...</div>
    ) : (
      employees.map(employee => (
        <Employee
          key={employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
        />
      ))
    );
  }
}

export default EmployeeList;
