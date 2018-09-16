import CircularProgress from '@material-ui/core/CircularProgress';

import * as React from 'react';

import './App.css';

interface IState {
  imageFiles: any[],
  results: any,
}

export default class App extends React.Component<{}, IState>{


  constructor(props: any) {
    super(props)
    this.state = {
      imageFiles: [],
      results: ""
    }
  }



  public upload(base64String: string) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&APPID=5dc0e44258249f73a827437cdb3b54bc', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        file: base64String,
      })
    })
    .then((response : any) => {
      if (!response.ok) {
        this.setState({results: response.statusText})
      }
      else {
        response.json().then((data:any) => this.setState({results: data.main.temp}))
      }
      return response
    })
  }
  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
   
           
     
          <div  className="dank">
          {
            this.state.results === "" && this.state.imageFiles.length > 0 ?
            <CircularProgress thickness={3} /> :
            <p>{this.state.results}</p>
          }
          </div>
        </div>
      </div>
    );
  }
}