import React from 'react';
import indexStore from "./index-store";

function IndexPage(){
    return <div>
        <div>this is a redux demo</div>
        <div>test value: {indexStore.getState().value}</div>
        <button onClick={()=> indexStore.dispatch({type: 'counter/fetchValue'})}>value+1</button>
    </div>
}

export default IndexPage