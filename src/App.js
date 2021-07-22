import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Diet from './panels/Diet';
import Steps from './panels/Steps'
import Water from './panels/Water'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      credentials: {
        username: '',
        password: ''
      },
      userData: {
        macros: {
          protein: {
            current: 24.5,
            target: 50,
          },
          carbs: {
            current: 40,
            target: 75
          },
          fat: {
            current: 10,
            target: 14
          }
        },
        dist: {
          steps: 2000,
          stepsGoal: 7000,
          distance: '2.3km'
        },
        water: {
          current: 1,
          goal: 3
        }
      }
    }
    this.loginCheck = this.loginCheck.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    this.show = this.show.bind(this);
  }


  show() {
    const target = document.querySelector('.blur');
    target.classList.toggle('show')
  }

  loginCheck(e) {
    e.preventDefault();
    const username = (e.target[0].value === this.state.credentials.username) ? true : false;
    const password = (e.target[1].value === this.state.credentials.password) ? true : false;
    if (username && password) {
      this.setState(prev => {
        return ({
          ...prev,
          isLoggedIn: true,
          currentUser: 'Jake'
        })

      })
      e.target[0].value = '';
      e.target[1].value = '';
      const body = document.querySelector('body');
      body.style.display = 'block';
    } else {
      const err = document.querySelector('.errorLabel');
      err.style.opacity = 100;
    }
  }

  updateGoals(e) {
    e.preventDefault();
    const p = document.querySelector('#proteinIn')
    const c = document.querySelector('#carbsIn')
    const f = document.querySelector('#fatIn')
    console.log(p.value, c.value, f.value);
    this.setState(prev => {
      return {
        ...prev,
        userData: {
          macros: {
            protein: {
              current: 24.5,
              target: parseInt(p.value),
            },
            carbs: {
              current: 40,
              target: parseInt(c.value)
            },
            fat: {
              current: 10,
              target: parseInt(f.value)
            }
          },
          dist: {
            steps: 2000,
            stepsGoal: 7000,
            distance: '2.3km'
          },
          water: {
            current: 1,
            goal: 3
          }
        }
      }
    })
    document.querySelector('.blur').classList.toggle('show');
  }

  render() {
    const { currentUser } = this.state;
    if (!this.state.isLoggedIn) {
      return (
        <div className="loginForm" >
          <h1>Login to Personal Goals!</h1>
          <h2 className='errorLabel'>Incorrect Credentials!</h2>
          <form onSubmit={this.loginCheck} >
            <label htmlFor="username" >Username: </label>
            <input id="username" placeholder="username"></input>
            <label htmlFor="password">Password: </label>
            <input id="password" placeholder="password" type='password'></input>
            <button>Login!</button>
          </form>
        </div >
      )

    } else {
      return (
        <>
          <Welcome user={currentUser} />
          <button id='updateGoals' onClick={this.show}>Change Goals</button>
          <div className='blur'>
            <div id='changeForm'>

              <form onSubmit={this.updateGoals}>
                <span>
                  <label htmlFor='proteinIn'>Change Protein To(g): </label>
                  <input type='number' name='proteinIn' id='proteinIn'></input>
                </span>
                <span>
                  <label htmlFor='carbsIn'>Change Carbs To(g):</label>
                  <input type='number' name='carbsIn' id='carbsIn'></input>
                </span>
                <span>
                  <label htmlFor='fatIn'>Change Fat To(g):</label>
                  <input type='number' name='fatIn' id='fatIn'></input>
                </span>


                <button>Update</button>
              </form>


            </div>
          </div>


          <div className='trackerContainer'>
            <Diet data={this.state.userData.macros} />
            <Steps data={this.state.userData.dist} />
            <Water data={this.state.userData.water} />
          </div>

        </>


      )
    }

  }
}

export default App;
