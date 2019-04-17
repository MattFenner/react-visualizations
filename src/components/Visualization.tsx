import React from 'react';
import * as _ from 'lodash';

import Box from './Box';

const Visualization = () : JSX.Element => {
  return (
    <svg id="visualization">
      <Boxes />
    </svg>
  )
}
  
export default Visualization;

const Boxes = () : JSX.Element => {
  // return (<Box x={1} y={2} />)
  
  let boxes = _.range(-5, 5).flatMap(x => {
    return _.range(-5, 5).map(y => {
      return (<Box gridX={x} gridY={y} />)
    })
  })

  return (
    <>
      {boxes}
    </>
  )
}