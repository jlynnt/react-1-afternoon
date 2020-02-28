import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state ={
            unfilteredArray: ['makeup', 'hair', 'nails', 'lashes'],
            userInput: '',
            filteredArray: []

        }
    }
        handleChange(value){
            this.setState({userInput: value});
        }
        filterArray(userInput){
            let unfilteredArray = this.state.unfilteredArray;
            let filteredArray = [];
            for(let i = 0; i < unfilteredArray.length; i++){
            if(unfilteredArray.includes(userInput)){
                filteredArray.push(unfilteredArray[i]);
            }
         }
     this.setState({filteredArray: filteredArray});
    }


    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String Component </h4>
        <span className="puzzleText"> Girl String: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterStringPB"> Filtered Girly: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
                


            </div>
        )
    }
}
export default FilterString;