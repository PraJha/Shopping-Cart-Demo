import React, { Component } from 'react';

class Counter extends Component {
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }
    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm m-2" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                <button className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? true : false} onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)} title={"Delete this row"}>X</button>
            </div>
        )
    }
}

export default Counter;