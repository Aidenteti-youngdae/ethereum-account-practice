/* const { ethers } = require("ethers");
const wallet = ethers.Wallet.createRandom();
console.log("random wallet:", wallet);
const privateKey = wallet.privateKey;
console.log("Private key:", privateKey);
const address = wallet.address;
console.log("My ethereum address:", address); */

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const privateKey =
  "0376433faaa4777e6660ad550e8a0ef6bfb8f8997d741fc57fefb628b9c2b47095";
const keyPair = ec.keyFromPrivate(privateKey);

const myPublicKey = keyPair.getPublic().encodeCompressed("hex");
console.log("myPublicKey:::", myPublicKey);