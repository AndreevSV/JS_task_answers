import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  //   onValueChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  onSubmitNewEmployee = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const salary = e.target.elements.salary.value;
    this.props.onAddEmployee(name, salary);
    e.target.reset();
  };

  render() {
    // const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmitNewEmployee}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            // value={name}
            // onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            // value={salary}
            // onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
