async function main() {

  const NftContract = await hre.ethers.getContractFactory("NftContract");

  const nftContractDeployed = await NftContract.deploy()

  await nftContractDeployed.deployed();

  console.log("Hello!, I Am Your Friendly NeighbourHood Contract", nftContractDeployed.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();