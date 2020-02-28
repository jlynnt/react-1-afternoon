import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            numberOne: 0,
            numberTwo: 0,
            sum: null

        }
    }
        updateNumberOne(value){
            this.setState({numberOne: parseInt(value, 10)})
        }
        updateNumberTwo(value){
            this.setState({numberTwo: parseInt(value, 10)})
        }
        add(numberOne, numberTwo){
            this.setState({sum: numberOne + numberTwo})
        }
    
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number"
                onChange={(e) => this.updateNumberOne(e.target.value)}/>
                <input className="inputLine" type="number"
                onChange={(e) => this.updateNumberTwo(e.target.value)}/>
                <button className="confirmationButton"
                onClick= {() => this.add(this.state.numberOne, this.state.numberTwo)}> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}
export default Sum;