pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HoldableERC20 is ERC20 {
    uint256 nonce = 0;

    struct OnHoldTx {
        address from;
        address to;
        uint256 ammount;
        uint256 id;
        bool deleted;
    }

    mapping(uint256 => OnHoldTx) onHoldTxMap;
    mapping(address => uint256) onHoldBalance;

    event OnHoldCreated(uint256 id);

    constructor(uint256 initialSupply) public ERC20() {
        _mint(msg.sender, initialSupply);
    }

    function onHold(address recipient, uint256 amount)
        public
        returns (uint256)
    {
        require(
            msg.sender != address(0),
            "ERC20: transfer from the zero address"
        );
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(
            balanceOf(msg.sender) > amount,
            "should have enough money to put on hold"
        );

        onHoldBalance[msg.sender] = onHoldBalance[msg.sender].add(amount); //add onHold balance

        nonce++;

        OnHoldTx memory onHoldTx = OnHoldTx({
            from: msg.sender,
            to: recipient,
            ammount: amount,
            id: nonce,
            deleted: false
        });

        onHoldTxMap[nonce] = onHoldTx; // save tx
        emit OnHoldCreated(nonce);
        return nonce; // return the holdId
    }

    function executeHold(uint256 id) public returns (bool) {
        require(
            msg.sender != address(0),
            "ERC20: transfer from the zero address"
        );
        require(onHoldTxMap[id].deleted == false, "onhold should exist");
        require(
            onHoldTxMap[id].from == msg.sender,
            "onhold should be executed from the owner of the hold"
        );

        _transfer(msg.sender, onHoldTxMap[id].to, onHoldTxMap[id].ammount); // complete the transfer
        onHoldBalance[msg.sender] = onHoldBalance[msg.sender].sub(
            onHoldTxMap[id].ammount
        ); // update onHold balance
        onHoldTxMap[id].deleted = true; // delete tx

        return true;
    }

    function onHoldBalanceOf(address account) public view returns (uint256) {
        return onHoldBalance[account];
    }

    function getOnHoldTx(uint256 id)
        public
        view
        returns (
            address,
            address,
            uint256
        )
    {
        require(onHoldTxMap[id].deleted == false, "onhold should exist");

        return (
            onHoldTxMap[id].from,
            onHoldTxMap[id].to,
            onHoldTxMap[id].ammount
        );
    }
}
