var express = require('express');
var Web3 = require('web3')
var http = require('http');
var app = express();
var EthereumTx = require('ethereumjs-tx')



app.post('/getPrivatekey', function(req, res) {

    //-----------------------------------------
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/KNNQ7NoZEhNQ5zpDSZzH'));
    // set token source, destination and amount
    var myAddress = "";
    //jaya var toAddress = "";
    var toAddress = "";


    var amount = web3.toHex(1e16);

    // get transaction count, later will used as nonce
    var count = web3.eth.getTransactionCount(myAddress);

    //console.log(count);


    // set your private key here, we'll sign the transaction below
    //var privateKey = new EthereumTx.Buffer.Buffer('', 'hex');
    var privateKey = Buffer.from('4ab406f4c5a50954wt6a23t796851aaa1536907038ac3d00abdaa4d847641a663a88de8ea7a79a1f', 'hex');
    //    var privateKey = new EthJS.Buffer.Buffer('', 'hex');
    // Get abi array here https://etherscan.io/address/cccccccccccccccc#code
    var abiArray = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "stop", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "owner_", "type": "address" }], "name": "setOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint128" }], "name": "push", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "name_", "type": "bytes32" }], "name": "setName", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint128" }], "name": "mint", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "src", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "stopped", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "authority_", "type": "address" }], "name": "setAuthority", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "wad", "type": "uint128" }], "name": "pull", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint128" }], "name": "burn", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "start", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "authority", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "src", "type": "address" }, { "name": "guy", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "symbol_", "type": "bytes32" }], "payable": false, "type": "constructor" }, { "anonymous": true, "inputs": [{ "indexed": true, "name": "sig", "type": "bytes4" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": true, "name": "foo", "type": "bytes32" }, { "indexed": true, "name": "bar", "type": "bytes32" }, { "indexed": false, "name": "wad", "type": "uint256" }, { "indexed": false, "name": "fax", "type": "bytes" }], "name": "LogNote", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "authority", "type": "address" }], "name": "LogSetAuthority", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }], "name": "LogSetOwner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }];

    var contractAddress = '0xae6c647c3baf5bcswefaf4afd1985cdaae8e3eaf9a7f4b2b';
    //var contract = new web3.eth.Contract(abiArray, contractAddress, {from: myAddress});
    var contract = web3.eth.contract(abiArray).at(contractAddress);

    var coincount = 3;
    var transferamount = coincount * 10 ** 18;

    var rawTransaction = { "from": myAddress, "gasPrice": web3.toHex(2 * 1e9), "gasLimit": web3.toHex(210000), "to": contractAddress, "value": "0x0", "data": contract.transfer.getData(toAddress, transferamount, { from: myAddress }), "nonce": web3.toHex(count) };

    //var transaction = new EthJS.Tx(rawTransaction);
    var transaction = new EthereumTx(rawTransaction);
    transaction.sign(privateKey);
    var hashh = web3.eth.sendRawTransaction('0x' + transaction.serialize().toString('hex'));
    hashh = web3.toHex(hashh);
    console.log(hashh);

    var keyvalue = {};
    //keyvalue['privatekey']=provider.getPvtKey(provider.getAddress());
    keyvalue['hash'] = hashh;


    return res.send(keyvalue);

});



app.listen(1337);