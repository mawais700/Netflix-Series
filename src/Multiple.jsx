// Multiple import and Export how its works. only one use as defult and other use in {}.


import React from "react";

function Heading (){
 
    return <h1>My name is Awais</h1>

}

function Para(){
    return <p>I Like to Watch these Movies</p>

}

function List() {

    return (
        <ol>
            <li>DArk </li>
            <li>John Wick</li>
            <li>fifty shades of Grey</li>
        </ol>
    )
}

export default Heading
export {Para, List}

