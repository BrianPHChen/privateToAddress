let EthUtils = require('ethereumjs-util');

const brainWallet = "SAGA";
const privateKey = EthUtils.keccak256(brainWallet).toString("hex");
const publickey = '0x' + EthUtils.privateToPublic('0x' + privateKey).toString('hex');
const address = '0x' + EthUtils.pubToAddress(publickey).toString('hex');

console.log('Private key: ' + privateKey);
console.log('Public key: ' + publickey);
console.log('Address: ' + address);

