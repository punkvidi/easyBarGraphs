import React, { useState } from 'react';
// to use this simply, bring down the props with a ratings and a barHeight, 
// the bargraph counts backwords from 5 to 1 but it is easily rescaled by changing line 11. 


const barGraph = (props) => {
  console.log(props)
  const data = props.ratings
  // props.ratings should be passed down as an object or an array ie
  // [3, 4, 5, 6, 7] or 
  // {
  //  1: 2,
  //  2: 3,
  //  3: 2,
  //  4: 3,
  //  5: 2,  
  //  }
  // make sure that if passed down to adjust the for loop how you wish for it to be counted
  const barLength = props.modeRatings ;
  // previously I used line 19 this to determine the largest piece of the bar graph and scale the rest of the bar graphs to it, 
  // with the largest number being %100 of the bar graphs length
  // This can be easily removed and switched to an arbitrary number
  
  let returner = [];

  for (let i = 5; i >= 1; i--) {

    let variable
    if (!data[i]) {
      variable = 0.01
    }
    else {
      variable = data[i]
    }
    console.log(variable)
    returner.push(
      <div>
        <BarGraphComponents
          value={i}
          data={variable}
          barLength={barLength}
        />
      </div>
    );
  }

  return <div>{returner}</div>;
  // returns a div this element can be easily swaped out to whichever codebase standard you use
};

const BarGraphComponents = (props) => {
  let completed = Math.floor((props.data / props.barLength) * 100);
  const containerStyles = {
    height: ".52vw",
    width: '11vw',
    backgroundColor: '#e0e0de',
    borderRadius: 30,
    marginTop: '8px',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#696969',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div className="barGraph"><p className="rating-num">
      {props.value} Stars
      // line 64 can be changed to anything ie: rating, points
      </p>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

barGraph.prototype = {};
export default barGraph;
