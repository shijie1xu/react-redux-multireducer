import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import {connect, useStore} from 'react-redux';

class App extends Component {
  render(){
    return(
        <div className="App">
          <div className="col">
            <div>
              <span>A:</span>
              <span>{this.props.a}</span>
              <button onClick={()=>this.props.updateA(this.props.b)}>Update A</button>
            </div>
          </div>
          <div className="col">
            <span>B:</span>
            <span>{this.props.b}</span>
            <button onClick={()=>this.props.updateB(this.props.a)}>Update B</button>
          </div>
        </div>
    )
  }
}
const mapStoreToProps = (store)=>{
  return{
    a:store.rA.a,
    b:store.rB.b
  }
};

const mapDisplayToProps=(dispatch)=>{
  return{
    updateA:(b)=>dispatch({type:'Update_a',b:b}),
    updateB:(a)=>dispatch({type:'Update_b',a:a})
  }
}

export default connect(mapStoreToProps,mapDisplayToProps)(App);
