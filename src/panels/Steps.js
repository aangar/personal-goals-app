import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class Steps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: ['Current'],
                datasets: [{
                    label: 'Steps',
                    data: [this.props.data.steps, this.props.data.stepsGoal - this.props.data.steps],
                    fill: true,

                    backgroundColor: ['#ff9f1c', 'transparent'],
                    borderColor: 'transparent'
                }]

            },
            options: {
                color: 'white',
            }
        }
    }


    componentDidMount() {
        this.setState((prev) => {
            return {
                ...prev,
                steps: this.props.data.steps,
                goal: this.props.data.stepsGoal
            }
        })
    }
    render() {

        return (
            <div className='steps container'>
                <h2>Steps / Distance</h2>
                <div className='chart'>
                    <Doughnut data={this.state.chartData} options={this.state.options} />
                    <div className='content'>
                        <h3>Current Steps : {this.props.data.steps}</h3>
                        <h3 id='goal'>Goal : {this.props.data.stepsGoal}</h3>
                        <h3>Overall Completion : {Math.floor((this.props.data.steps / this.props.data.stepsGoal) * 100)}%</h3>

                    </div>

                </div>

            </div>
        )
    }
}

export default Steps;