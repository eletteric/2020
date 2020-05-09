import React, { Component} from 'react';


export default class Canvas extends React.Component {




componentWillMount(){
    const canvasWidth= window.innerWidth;
const canvasHeight= window.innerHeight;
this.setState(
{
    canvasSize:{canvasWidth: canvasWidth, canvasHeight: canvasHeight}
}
);
}

componentDidMount(){
    const {canvasWidth, canvasHeight}= this.state.canvasSize;
this.canvasHex.width = canvasWidth;

this.canvasHex.height = canvasHeight;

}
render(){
return(
<div>
    <canvas ref={canvasHex => this.canvasHex = canvasHex} />
    </div>

)

}





}