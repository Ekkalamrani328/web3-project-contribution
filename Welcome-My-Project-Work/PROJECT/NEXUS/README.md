# Nexus Testnet Node & Smart Contract Deployment Guide

<p align="center">
  <img src="nexus_node_banner.png" width="80%" />
</p>

This guide explains how to:

1. Run a Nexus CLI Node to contribute to the network
2. Deploy smart contracts to Nexus Testnet III using Hardhat

---

## 🌐 System Requirements

| Resource | Minimum | Recommended |
|---------|---------|-------------|
| CPU     | 4 Cores | 8+ Cores    |
| RAM     | 8 GB    | 16–32 GB    |
| Storage | 30 GB   | NVMe SSD 100+ GB |
| OS      | Linux / macOS | Ubuntu 22.04 LTS |

---

# 1) Run Nexus CLI Node

## 🛠 Install Nexus CLI

```bash
curl https://cli.nexus.xyz/ | sh
```

Verify installation:
```bash
nexus-network --version
```

## 🔑 Register Wallet
```bash
nexus-network register-user --wallet-address <YOUR_WALLET_ADDRESS>
```

## Register Node
```bash
nexus-network register-node
```

Save the **Node ID** it outputs.

## ▶️ Start Node
```bash
nexus-network start --node-id <NODE_ID>
```

## Run in Background
```bash
nohup nexus-network start --node-id <NODE_ID> > nexus.log 2>&1 &
```

## 🔍 Check Status
```bash
nexus-network status
```

## ⏹ Stop Node
```bash
nexus-network stop
```

## 🧹 Reset (If Errors)
```bash
nexus-network logout
rm -rf ~/.nexus
```

---

# 2) Deploy Smart Contract (Hardhat)

## 📁 Navigate to Deploy Folder
```bash
cd deploy/NEXUS/app-hardhat
```

## 🔐 Create `.env`
```bash
cp .env.example .env
```

Edit `.env`:
```
PRIVATE_KEY=0xYOUR_TEST_WALLET_KEY
```

## ⛽ Get Testnet NEX
https://faucets.alchemy.com

Choose **Nexus Testnet**

## 📦 Install Dependencies
```bash
npm install
```

## 🧱 Compile
```bash
npm run compile
```

## 🚀 Deploy
```bash
npm run deploy
```

Copy contract address and check in explorer:
https://testnet3.explorer.nexus.xyz

---

## 📖 Example Contract (Lock.sol)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Lock {
    uint256 public unlockTime;
    address payable public owner;

    event Withdrawal(uint256 amount, uint256 when);

    constructor(uint256 _unlockTime) payable {
        require(_unlockTime > block.timestamp, "unlock time should be in the future");
        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");
        emit Withdrawal(address(this).balance, block.timestamp);
        owner.transfer(address(this).balance);
    }
}
```

---

## 🔐 Security Notes

| Avoid | Do Instead |
|------|------------|
| Committing `.env` | Keep `.env` local only |
| Using main wallet | Use *test wallet only* |
| Sharing private key | Keep it secret |

---

## 🎉 Done!
You are now contributing to Nexus & deploying smart contracts 🚀
