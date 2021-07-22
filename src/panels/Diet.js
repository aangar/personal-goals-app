import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pChartData: {
                labels: ['Current Grams Protein'],
                datasets: [{
                    label: 'Protein',
                    data: [this.props.data.protein.current, this.props.data.protein.target - this.props.data.protein.current],
                    fill: true,
                    backgroundColor: ['#f77f00', 'transparent'],
                    borderColor: 'transparent'
                }]
            },
            cChartData: {
                labels: ['Current Grams Carbohydrates'],
                datasets: [{
                    label: 'Carbohydrates',
                    data: [this.props.data.carbs.current, this.props.data.carbs.target - this.props.data.carbs.current],
                    fill: true,
                    backgroundColor: ['#1a759f', 'transparent'],
                    borderColor: 'transparent'
                }]
            },
            fChartData: {
                labels: ['Current Grams Fat'],
                datasets: [{
                    label: 'Fat',
                    data: [this.props.data.fat.current, this.props.data.fat.target - this.props.data.fat.current],
                    fill: true,
                    backgroundColor: ['#6930c3', 'transparent'],
                    borderColor: 'transparent'
                }]

            },
            options: {
                maintainAspectRatio: false,
                color: 'black',
                redraw: true
            }
        }
    }
    render() {
        return (
            <div className='diet container'>
                <h2>Macros</h2>
                <div className='macroContainer'>
                    <div className='chart third'>
                        <Doughnut data={this.state.pChartData} options={this.state.options} />
                    </div>
                    <h2>Current: {this.props.data.protein.current}g ({Math.floor((this.props.data.protein.current / this.props.data.protein.target) * 100)}%)</h2>
                    <div className='chart third'>
                        <Doughnut data={this.state.cChartData} options={this.state.options} />
                    </div>
                    <h2>Current: {this.props.data.carbs.current}g ({Math.floor((this.props.data.carbs.current / this.props.data.carbs.target) * 100)}%)</h2>
                    <div className='chart third'>
                        <Doughnut data={this.state.fChartData} options={this.state.options} width={1000} />
                    </div>
                    <h2>Current: {this.props.data.fat.current}g ({Math.floor((this.props.data.fat.current / this.props.data.fat.target) * 100)}%)</h2>
                </div>

            </div>

        )
    }
}

export default Diet;