import React from 'react';
import { Doughnut } from 'react-chartjs-2'

class Water extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                labels: ['Current Liters'],
                datasets: [{
                    label: 'Water Goal',
                    data: [this.props.data.current, this.props.data.goal - this.props.data.current],
                    backgroundColor: ['#0077b6', 'transparent'],
                    borderColor: 'transparent'
                }]

            },
            options: {
                color: 'white'
            }

        }
    }

    componentDidMount() {
        this.setState((prev) => {
            return {
                ...prev,
                currentWater: this.props.data.current,
                target: this.props.data.goal,
                percent: Math.floor((this.props.data.current / this.props.data.goal) * 100)
            }
        })
    }
    render() {

        return (
            <div className='water container'>
                <h2>Water</h2>
                <div className='chart'>
                    <Doughnut data={this.state.data} options={this.state.options} />
                    <div className='content'>
                        <h3>Liters Drank : {this.state.currentWater}</h3>
                        <h3>Target Liters : {this.props.data.goal}</h3>
                        <h3>Overall Completion : {this.state.percent}%</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Water;