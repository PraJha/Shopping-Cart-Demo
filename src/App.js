import React, { Component } from 'react'
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },
        ]
    }

    handleReset = () => {
        const counters = this.state.counters.map((c) => { c.value = 0; return c; });
        this.setState({ counters })
    };

    addCounter = () => {
        const countersId = this.state.counters.map((c) => (c.id)).sort((a, b) => (a - b));
        const newId = countersId.length > 0 ? countersId[countersId.length - 1] + 1 : 1;
        const newObj = { id: newId, value: 0 }
        const counters = [...this.state.counters, newObj]
        this.setState({ counters })
    };

    handleIncrement = (counter) => {
        const counters = this.state.counters.filter((c) => (
            c.id === counter.id ? c.value = c.value + 1 : c
        ))
        this.setState({ counters })
    }

    handleDecrement = (counter) => {
        const counters = this.state.counters.filter((c) => {
            if (c.id === counter.id) {
                c.value = c.value - 1;
                if (c.value < 0) {
                    c.value = 0
                }
            }
            return c
        })
        this.setState({ counters })
    }

    handleDelete = (id) => {
        const counters = this.state.counters.filter((counter) => {
            return counter.id !== id;
        })
        this.setState({ counters })
    }

    render() {
        return (
            <div>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).reduce((accumulator, c) => { return accumulator + c.value }, 0)} />
                <div style={{ textAlign: 'center' }}>
                    <main className="container">
                        <Counters counter={this.state.counters} onAdd={this.addCounter} onDecrement={this.handleDecrement} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onReset={this.handleReset} />
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
