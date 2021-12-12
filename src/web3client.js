
//import Web3 from 'web3';
import {Web3} from 'web3';

import TimeLockContractBuild from 'contracts/Timelock.json';

let selectedAccounts;

let timelockcontract;

let isInitialized = false;

export const init = async() =>{
    let provider = window.ethereum;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    selectedAccounts= accounts[0];
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    timelockcontract = new web3.eth.Contract(
    TimeLockContractBuild.abi,
    TimeLockContractBuild.networks[networkId].address
    );
    isInitialized = true;
};

export const LockFunds= async() => {
    var amt=10;
    if(!isInitialized){
        await init();
    }
    return timelockcontract.methods
    .deposit(selectedAccounts,amt)
    .send({ from: selectedAccounts});
}