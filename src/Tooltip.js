import React from 'react';



class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                Thanks for hovering !!! <br />
                I am a Tooltip at {this.props.position}!
            </div>
        )
    }
}


export default Tooltip;