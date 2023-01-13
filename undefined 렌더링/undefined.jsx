import React from "react";

function Library(props){
    const name = 'undefined';
    return (
        name || '값이 undefined입니다.'
    );
}

export default Library;
