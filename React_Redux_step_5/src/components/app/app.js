import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import { Component } from "react";
import { v4 as uuid } from "uuid";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, id: 2 },
        { name: "Carl W.", salary: 5000, increase: true, id: 3 },
      ],
      lowerCaseStr: "",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addItem = (name, salary) => {
    if (!name || !salary) {
      alert("Please fill name and salary");
      return;
    } else {
      const newItem = {
        name,
        salary: parseInt(salary),
        id: uuid(),
      };

      this.setState(({ data }) => ({ data: [...data, newItem] }));
    }
  };

  getTotalNumber = () => this.state.data.length;

  getIncreaseNumber = () => {
    const { data } = this.state;
    return data.reduce((acc, elem) => acc + (elem.increase === true), 0);
  };

  onSearch = (searchStr) => {
    const lowerCaseStr = searchStr.toLowerCase();
    this.setState({ lowerCaseStr });
  };

  filterData = () => {
    const { data, lowerCaseStr } = this.state;
    if (lowerCaseStr.length === 0) {
      return data;
    }

    return data.filter((item) => {
      const lowerCaseName = item.name.toLowerCase();
      return lowerCaseName.indexOf(lowerCaseStr) > -1;
    });
  };

  render() {
    const filteredData = this.filterData();

    return (
      <div className="app">
        <AppInfo
          getTotalNumber={this.getTotalNumber}
          getIncreaseNumber={this.getIncreaseNumber}
        />

        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch} />
          <AppFilter />
        </div>

        <EmployeesList data={filteredData} onDelete={this.deleteItem} />
        <EmployeesAddForm onAddEmployee={this.addItem} />
      </div>
    );
  }
}
export default App;
