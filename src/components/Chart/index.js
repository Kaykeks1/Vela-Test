import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Videos Made",
                // background: "linear-gradient(180deg, rgba(2, 148, 255, 0.45) 33.13%, rgba(255, 255, 255, 0.0001) 117.06%)",
                backgroundColor: "rgba(2, 148, 255, 0.45)",
                data: [4,5,1,10,32,2,12,5,23,2,10,15]
              }
            ]
          }
        };
    }
    render(){
        return(
            <div className="chart-container">
                <div className="chart-summary">
                    <Line
                        options={{
                            responsive: true,
                        }}
                        data={this.state.data}
                    />
                </div>
                <div className="order-payment-summary">
                    <div className="summary">
                        <div>Orders</div>
                        <div className="bar-container">
                            <div className="bar" />
                        </div>
                        <div className="summary-details">
                            Pending Orders: <span style={{color: '#FDC203'}}>20</span>
                        </div>
                        <div className="summary-details">
                            Reconciled Orders: <span style={{color: '#27AE60'}}>80</span>
                        </div>
                        <div className="summary-details">
                            Total Orders: <span style={{color: '#1875F0'}}>100</span>
                        </div>
                    </div>
                    <div className="summary">
                        <div>Payments</div>
                        <div className="bar-container">
                            <div className="bar" />
                        </div>
                        <div className="summary-details">
                            Un-reconciled Payments: <span style={{color: '#FDC203'}}>20</span>
                        </div>
                        <div className="summary-details">
                            Reconciled Payments: <span style={{color: '#27AE60'}}>80</span>
                        </div>
                        <div className="summary-details">
                            Total Payments: <span style={{color: '#1875F0'}}>100</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart;