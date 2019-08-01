import React, {PureComponent} from 'react';

import filterArray from './helpers/filterArray';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            lettersInput: false,
            history: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    handleFilter() {
        const {input} = this.state;
        const regExLetters = /[a-zA-Z]/;
        const regExNumbers = /\d+/g;

        if (!input) {
            return;
        }

        if (regExLetters.test(input)) {
            this.setState({lettersInput: true});
            return;
        }

        const arr = input.match(regExNumbers);

        this.setState({
            lettersInput: false,
            history: [...this.state.history, filterArray(arr)]
        });
    }

    render() {
        const {lettersInput, history} = this.state;

        const historyItems = history.map((el, index) => {
            return <li key={index} className="list-group-item py-2 px-3">[{el.join(', ')}]</li>;
        });

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        {lettersInput ? <p>Huh... we don't need letters here</p> : ''}
                    </div>
                </div>
                <div className="row">
                    <div className="input-group col-6 mb-3">
                        <input type="text" className="form-control" placeholder="Enter the array"
                               onChange={this.handleChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button"
                                    onClick={this.handleFilter}>Filter
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ul className="list-group">
                            {historyItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};
export default App;