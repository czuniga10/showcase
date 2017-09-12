import React, { Component } from 'react';

class FilterObject extends Component {

constructor() {
  super();

    this.state = {
      employees: [
      {
        name: "Jimmy Joe",
        title: "h@ckor",
        age: 12,
      },
      {
        name:"Jeremy Schrader",
        age: 24,
        hairColor: "brown",
      },
      {
        name: "Carly Armstrong",
        title: "CEO",
      }],

      userInput: '',
      filteredEmployees: [] 
    }
}

handleChange(val) {
  this.setState({ userInput: val });
}

filterEmployees(prop) {
  var employees = this.state.employees;
  var answer = [];

  for(var i = 0;i<employees.length;i++){
    if(employees[i].hasOwnProperty(prop)) {
      answer.push(employees[i]);
    }
  }
  this.setState({ filteredEmployees: answer });
}

    render() {
      return(
        <div className="puzzleBox filterObjectsPB">
          <h4>Filter Object</h4>
          <span className="puzzleText"> Original: {JSON.stringify(this.state.employees, null, 10) }</span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
          <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
          <span className="resultsBox filterObjectRP"> Filtered: {JSON.stringify(this.state.fitlerEmployees, null, 10) }</span>
        </div>
    )
   }
  }

  export default FilterObject;