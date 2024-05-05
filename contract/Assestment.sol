// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 public storedNumber;
    string public message;

    function setNumber(uint256 _newNumber) external {
        storedNumber = _newNumber;
    }

    function getNumber() external view returns (uint256) {
        return storedNumber;
    }

    function setMessage(string memory _newMessage) external {
        message = _newMessage;
    }
}
