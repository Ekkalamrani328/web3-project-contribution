<p align="center">
  <img src="nexus_node_banner.png" width="80%" />
</p>

# Nexus Node - Testnet Contribution Guide

Welcome 👋  
This guide provides clear instructions to run the **Nexus CLI Node** and participate in the testnet contribution program. Running a node supports the network by processing workloads, generating proofs, and potentially earning **contribution points**.

---

## 📌 System Requirements

| Resource | Minimum | Recommended |
|---------|---------|-------------|
| CPU     | 4 Core  | 8+ Core     |
| RAM     | 8 GB    | 16–32 GB    |
| Storage | 30 GB   | NVMe 100+ GB |
| Operating System | Linux / macOS | Ubuntu 22.04 LTS |

> More compute = more tasks processed = more contribution points.

---

## 🛠 Install Nexus CLI

```bash
curl https://cli.nexus.xyz/ | sh
```

Verify installation:
```bash
nexus-network --version
```

---

## 🔑 Register & Configure Node

If your wallet is already registered, skip the first step.

### Register Wallet (if new)
```bash
nexus-network register-user --wallet-address <YOUR_WALLET_ADDRESS>
```

### Register Node
```bash
nexus-network register-node
```

---

## ▶️ Start the Node

```bash
nexus-network start
```
Restart or refresh your terminal
 (‘source ~/.bashrc, ‘source ~/.zshrc’, etc.).
To start with an existing node ID, run

Start using a specific Node ID:
```bash
nexus-network start --node-id <NODE_ID>
```

---

## 🔍 Check Node Status

```bash
nexus-network status
```

Expected:
```
Node running...
Processing tasks...
Proof submitted ✅
```

---

## ⏹ Stop the Node

```bash
nexus-network stop
```

---

## 🧹 Reset (If Errors Occur)

```bash
nexus-network logout
rm -rf ~/.nexus
```

Then repeat the registration steps.

---

## 💡 Tips for Better Contribution Results
- Keep node running **24/7**
- Use a stable internet connection
- Prefer multi-core CPU systems or servers
- Avoid frequent restarts

---

## 🙏 Closing Notes

Thank you for contributing to the network.  
Each running node strengthens decentralization and reliability.  

If you need help, feel free to open an issue or ask.

**Good luck on your contribution journey 🚀**
