import React from "react";

function Library(props){
    const name = '리액트';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16

    };

    return (
        <div style={style}>{name}</div>
        );
}

export default Library;
