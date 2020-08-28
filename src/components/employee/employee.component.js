import React from 'react';

const Employee = props => {
  const { firstName, lastName } = props;

  return (
    <h3>
      {firstName} {lastName}
    </h3>
  );
};

export default Employee;
