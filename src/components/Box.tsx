import React from 'react';

type BoxProps = {
    gridX: number,
    gridY: number
}

const Box = (props : BoxProps) => {
    let x = props.gridX * 12;
    let y = props.gridY * 12;

    return (
        <rect fill="red" x={x} y={y} width="10" height="10" />
    )
}

export default Box;