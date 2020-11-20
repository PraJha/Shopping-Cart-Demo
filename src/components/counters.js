import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {

    render() {
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset} title={"Reset all values to zero"} >Reset</button>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.onAdd} title={"Add one more row"}>Add</button>
                {this.props.counter.map((counter) => (
                    <Counter key={counter.id} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} />
                ))}
            </div>
        )
    }
}

export default Counters;