import React from "react";

function Library(props){
    const name = '리웩트';
    return (
        <div>
            {name == '리액트' ? (
                <h1>리액트입니다.</h1>
            ): (
                <h2>리액트가 아닙니다.</h2>
            )}
        </div>
    );
}

export default Library;