import React from 'react';

export default function Jokes(props) {
    console.log(props.comments[0], props.comments[1]);
    return(
        <div>
            {/* {props.setup && 
                <h3>me:{props.setup}</h3>
            } */}

            <h3 style={{display : props.setup ? "block" : "none"}}>me:{props.setup}</h3>
            <p>u:{props.punchline}</p>
            <hr />
        </div>
    );
}