import React, { useState } from 'react';
import { init, LockFunds } from './web3client';

function Application(){

    const[lockedfunds,setlockfund]= useState(false);

    const deposit = () =>{
        LockFunds().then((tx) =>{
            console.log(tx);
            setlockfund(true);
        })
        .catch((err) =>{
            console.log(err);
        });
    }

    return (
    <div className ="App">
        {!lockedfunds ?
        (<button onCick ={()=> deposit()}>Support Project</button>)
        :(<p>Successfully locked funds</p>)}
    </div>
    );

}
export default Application;