import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      position:"top",
      hovering:false,
    };
  }
  //handleClick function which handle the position
  handleClick=(pos)=>{
    this.setState({
      position:pos,
    })
  };

  //handleMouseEnter function which handle the hovering condintion
  handleMouseEnter=()=>{
    this.setState({
      hovering:true,
    });
  };

  //handleMouseLeave function which handle the hovering condintion
  handleMouseLeave=()=>{
    this.setState({
      hovering:false
    })
  }

  render(){
    return (  
      <div className="App">
    { //position of the all button 
    }
        <div className='btn-position'>
          <div className='grp-name'>
            Select the position of the hovering!!
          </div>
          <button
          className= {this.state.position=== 'Top' ? "btn active" :"btn" }
          onClick={(e)=>{
            this.handleClick('Top');
          }}>
            Top
          </button>

          <button
          className={this.state.position=== 'Right' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('Right');
          }}>
            Right
          </button>

          <button
          className={this.state.position=== 'Left' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('Left');
          }}>
            Left
          </button>
         
          <button
          className={this.state.position=== 'Bottom' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('Bottom');
          }}>
            Bottom
          </button>
        </div>
{        //buttons

}        <div id="button-container">
          <button
          className='btn hover-btn'
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >
            Hover Over Me To See Text!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position}/>}
        </div>

      </div>
    );
  }
}

export default App;