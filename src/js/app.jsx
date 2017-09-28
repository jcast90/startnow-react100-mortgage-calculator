import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here behaviour driven dev. (BDD) => way of desc.
  // features -it should accept props -it should pass props to super() -it should
  // define state
  constructor(props) {
    super(props);
    this.state = {
      loan: '',
      interest: '',
      loanTerms: '',
      total: ''
    };


    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(key) {
    return (e) => this.setState({ [key]: e.target.value });
  }

  handleClick() {
    const r = (this.state.interest * 0.01) / 12;
    const n = this.state.loanTerms * 12;
    const math = ((r * Math.pow(r + 1, n)) / (Math.pow(1 + r, n) - 1));
    this.setState({
      total: (this.state.loan * math).toFixed(2)
    });
  }
  render() {
    return (
      <div className='container'>
        <h1>Mortgage Calculator</h1>
        <div className='form-group row'>
          <label
            htmlFor='loan-input' className='col-2 col-form-label'
          />
          Loan Balance
          <input
            className='form-control'
            type='text'
            name='balance'
            value={this.state.loan}
            onChange={this.handleChange('loan')}
            id='loan-input'
          />
        </div>
        <div className='form-group row'>
          <label
            htmlFor='interest-input' className='col-2 col-form-label'
          />
          Interest Rate (%)
          <input
            className='form-control'
            type='text'
            name='rate'
            value={this.state.interest}
            onChange={this.handleChange('interest')}
            id='interest-input'
          />
        </div>
        <div className='form-group row'>
          <label
            htmlFor='loanTerms' className='col-2 col-form-label'
          />
          Loan Term (years)
          <select
            name='term'
            className='custom-select mb-2 mr-sm-2 mb-sm-0'
            value={this.state.loanTerms}
            onChange={this.handleChange('loanTerms')}
            id='loanTerms'
          >
            <option disabled>Choose...</option>
            <option value='15' name='term'>15</option>
            <option value='30' name='term'>30</option>
          </select>
        </div>
        <button type='submit' name='submit' id='submit' className='btn btn-primary' onClick={this.handleClick}>Calculate</button>

        <label htmlFor='total-output' className='col-2 col-form-label' /> Total:

        <input
          disabled
          type='text'
          value={this.state.total}
          id='output'
        />

      </div>
    );
  }
}

