import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

const web3 = new Web3(window.ethereum);

const simpleContract = new web3.eth.Contract(abi, contractAddress);

async function setNumber() {
    const newNumber = document.getElementById('newNumber').value;
    await simpleContract.methods.setNumber(newNumber).send({ from: ethereum.selectedAddress });
    displayNumber();
}

async function setMessage() {
    const newMessage = document.getElementById('newMessage').value;
    await simpleContract.methods.setMessage(newMessage).send({ from: ethereum.selectedAddress });
    displayMessage();
}

async function displayNumber() {
    const storedNumber = await simpleContract.methods.getNumber().call();
    document.getElementById('displayNumber').textContent = storedNumber;
}

async function displayMessage() {
    const storedMessage = await simpleContract.methods.message().call();
    document.getElementById('displayMessage').textContent = storedMessage;
}

window.ethereum.on('accountsChanged', () => {
    // Handle account change (e.g., user switches MetaMask account)
    // Update contract interaction accordingly
    displayNumber();
    displayMessage();
});

// Initialize
displayNumber();
displayMessage();
