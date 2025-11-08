const hre = require("hardhat");

async function main() {
  const now = Math.floor(Date.now() / 1000);
  const oneMinuteLater = now + 60;

  console.log("Deploying Lock with unlockTime =", oneMinuteLater);

  const Lock = await hre.ethers.getContractFactory("Lock"); // Factory (huruf besar)
  const lock = await Lock.deploy(oneMinuteLater);            // Instance (huruf kecil)

  await lock.waitForDeployment();

  console.log("✅ Lock deployed to:", await lock.getAddress());
  console.log("🔎 Explorer: https://testnet3.explorer.nexus.xyz");
}

main().catch((e) => { console.error(e); process.exit(1); });

