
import './App.css';

import React, { Component } from 'react'
import NevBar from './components/NevBar';
import News  from './components/News';
import Hader from './components/Hader';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state ={
    progress:0
  } 
  setProgress=(progress)=>{
    this.setState({
     progress:progress
    })
  }
  render(){
    return (   
      <div>
        <LoadingBar
        height={3}
        color='black'
        background='10'
        
        progress={this.state.progress}
      />
        <Hader/>
      <Router> 
           <NevBar/>
             <Routes>
             <Route  exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />}/>
             <Route  exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />}/>
                  
                 
             <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business"  category="business"/>}/>
                  
             

             <Route exact path='/entertainment' element={ <News setProgress={this.setProgress} 
             apiKey={this.apiKey} key="entertainment"  category="entertainment"/>}/>
                  
             
             <Route exact path='/general' element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="data"  category="general"/>}/>
                  
            
             <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health"  category="health"/>}/>
                  
             
             <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science"  category="science"/>}/>
                  
             
             <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="sports"/>}/>
                  
             
             <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology"/>}/>
                  
             
             </Routes> 
             </Router>      
      </div>
      
    )
  }
}

