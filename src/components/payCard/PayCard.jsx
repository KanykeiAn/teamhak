import { Button } from '@mui/material';
import React from 'react';
import '../payCard/PayCard.css';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link, useNavigate } from 'react-router-dom';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const handleClick = () => {
      alert('Успешно оплачено');
    };

    return (
      <div>
        <div className=" card-text">
          <em>Enter your payment details</em>
          <br />
          <p>please input your information below</p>
        </div>
        <div
          id="PaymentForm"
          style={{
            bgcolor: '#FCF6EC',
            backgroundImage: 'src={notFound}',
            height: '100vh',
            paddingTop: '100px',
          }}
        >
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form className="credit">
            <input
              fullWidth
              className="inp1"
              type="tel"
              name="number"
              placeholder="Card Number"
              style={{ textAlign: 'center' }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              fullWidth
              className="inp2"
              type="tel"
              name="name"
              placeholder="Name on card"
              style={{ textAlign: 'center' }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              fullWidth
              className="inp3"
              type="tel"
              name="expiry"
              placeholder="Expiry date"
              style={{ textAlign: 'center' }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              fullWidth
              className="inp4"
              type="tel"
              name="cvc"
              placeholder="CVV"
              style={{ textAlign: 'center' }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <Link to="/products">
              <Button
                onClick={handleClick}
                className="grid-button"
                variant="contained"
                sx={{
                  color: 'white',
                  background: 'gray',
                }}
              >
                Confirm Payment
              </Button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
