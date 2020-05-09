import React, { useEffect, useRef } from "react";

const Canvas = () => {
  let ref = useRef();



  useEffect(() => {
    initialize();
    function initialize() {
    window.addEventListener('resize', resizeCanvas, false);
    }
    function resizeCanvas(){
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    }


    let canvas = ref.current;
    let context = canvas.getContext('2d');


    let requestId, i=0;
    const render = () => {
        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;
        context.clearRect(0,0,canvas.width,canvas.height);
      context.beginPath();
      context.arc(200, 20, i, 0, 2 * Math.PI);
      context.fillStyle = "red";

      context.fill();
      i+=0.7;
      requestAnimationFrame(render);
    };
    render();

return () => {
    cancelAnimationFrame(requestId);
}

  });

  return <canvas ref={ref}/>;
};

export default Canvas;
