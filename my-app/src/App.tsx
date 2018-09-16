

import * as React from 'react';

import './App.css';


interface IState {
  userInput: any,
  results: any,
  findTemperature: any,
}

export default class App extends React.Component<{}, IState>{


  constructor(props: any) {
    super(props)
    this.state = {
      userInput: "London",
      results: this.weatherAPI(),
      findTemperature: this.getUserInput(),
    }
  }

  
  public getUserInput(){
    return null;
  }

  public weatherAPI() {
    /*Method to receive data from weather api*/ 
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=5dc0e44258249f73a827437cdb3b54bc', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
    })
    .then((response : any) => {
      if (!response.ok) {
        this.setState({results: response.statusText})
      }
      else {
        response.json().then((data:any) => this.setState({results: data.main.temp})) /*response from api call */
      }
      return response
    })
  }

  

  
    public render() {

      return (


          <div className="centreText">
            <form onSubmit={this.weatherAPI}>
                <label>
                  Name:
                  <input type="text" value={this.state.userInput} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            {
              <p>{this.state.results}</p>
            }
            </div>
        
          )
    }
    

  
}