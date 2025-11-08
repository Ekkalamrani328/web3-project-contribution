const hre = require("hardhat");
async function main() {
  const addr = require("../deployments/nexus.json").Lock;
  const lock = await hre.ethers.getContractAt("Lock", addr);
  console.log("Owner:", await lock.owner());
  const t = await lock.unlockTime();
  console.log("unlockTime:", t.toString());
}
main().catch(e=>{console.error(e);process.exit(1);});
