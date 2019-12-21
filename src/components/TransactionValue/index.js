import React, { Component } from "react";
import trend from '../../Assets/images/trend.PNG';
import './TransactionValue.css';

class TransactionValue extends Component{
    render(){
        const {index, value} = this.props;
        return(
            <div className="transaction-info">
              <div>
                <div className="transaction-title">Daily Transaction {index%2===1 ? 'Volume' : 'Value'}</div>
                <div className="transaction-value">{value}</div>
              </div>
              <div className="trend">
                <img src={trend} alt="photo"/>
              </div>
            </div>
        );
    }
}

export default TransactionValue;