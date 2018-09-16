
import * as React from 'react';
import './App.css';

interface IState {
  userInput: any,
  results: any,
}

export default class App extends React.Component<{}, IState>{

  constructor(props: any) {
    super(props)
    this.state = {
      userInput: '',
      results: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.weatherAPI = this.weatherAPI.bind(this);
  }

  


  public weatherAPI(event:any) {
    /*Method to receive data from weather api*/ 
    event.preventDefault();
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.userInput+'&units=metric&APPID=5dc0e44258249f73a827437cdb3b54bc', {
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
  /*Update as user types */
  public handleChange(event: any){
    this.setState({userInput : event.target.value});
  }

  
    public render() {

      return (


          <div className="centreText">
            <form onSubmit={this.weatherAPI}>
                <label>
                    <input type="text"  value={this.state.userInput} onChange={this.handleChange} placeholder="Enter city name" />
                    
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