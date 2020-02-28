import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            employees: [{
            name: 'Shonho',
            title: 'Boss'
            }, {name: 'Eva', title: 'Hostess', age: 18}, {name: 'Hoolie', title: 'Foodrunner', hairColor: 'Black'}],
            userInput: '',
            filteredEmployees: []
        }
    }
        handleChange(value){
            this.stateSet({userInput: value});
        }
       filterEmployees(prop){
           let employees = this.state.employees
           let filteredEmployees = []
           for(let i = 0; i < employees.length; i++){
               if(employees[i].hasOwnProperty(prop)){
                   filteredEmployees.push(employees[i])
               }
           }
           this.setState({filteredEmployees: filteredEmployees})
        }


    render(){
        return (
           <div className="puzzleBox filterObjectPB">
               <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
               <input className="inputLine" 
               onChange={(e) => this.handleChange(e.target.value)}/>
               <button className="confirmationButton" 
               onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
               <span className="resultsBox filterObjectPB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10 ) } </span>
           </div>
        )
    }
}
export default FilterObject;