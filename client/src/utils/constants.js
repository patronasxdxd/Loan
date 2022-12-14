import abi from "./Transactions.json";
import abiDia from "./diamond.json";
import abiBox from "./BoxFacet.json";
import abiCut from "./DiamondCutFacet.json";
import abiLoupe from "./DiamondLoupeFacet.json";
import abiToken from "./GovernanceToken.json";
import abiGovernor from "./GovernorContract.json";
import abiOwnerShip from "./OwnershipFacet.json";
import abiTimeLock from "./TimeLock.json";




// export const contractAddress = "0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA";
// export const DiamondCutFacetAdress = "0xcf9aa2389cBA76b4Fa0A56e948e83F164D13a5Ab";
// export const DiamondAddress = "0x8085114b3b2ce7700727D9B76eF9f4a3d24DC056";
// export const DiamondInitAddress = "0xe111f349E7341A0E28d7BDAc8c19C7b040307Be9";
// export const DiamondLoupeFacet = "0xC43E3c73fD370B8133c179058e7d6A90A69132E8";
// export const OwnershipFacet = "0x9dBD143D016897AB81DAaF33A254B187B3Ba0553";
// export const BoxFacet = "0xF095d9d0d9E3E85EA779fE97e2B68Ce9C0aC57e7";
// export const GovernanceToken = "0x29416043930f26E8475844645fe9D05D95923bf4";
// export const timeLockAddress = "0x2D4068aA2253d389b8aF780F6883b8dED3Da5322";
// export const GovenorContract = "0xb2DFE0e45B25AB9CabD886D34D85F686f7D060F6";


export const contractAddress = "0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA";

export const DiamondCutFacetAdress = "0x21Af6C43c12b4296Aea76A1E0Dbb24BCb9366A5c"
export const DiamondAddress  = "0xF85C27CdF696078981aA5BdB67A9aEDf5c1c6747"
export const DiamondInitAddress  = "0xAaBd50E36e167c1F28B776539942FaF13ECb61e6"

//Deploying facets
export const DiamondLoupeFacet = "0x280B7f3110B847911C0dDF3BC9DAa71927d89710"
export const OwnershipFacet = "0x2FE2421A22C846C18F71DE3C815B816AbF3b5912"
export const BoxFacet = "0xc001Fbfe1c719d35361e1ab129cd9EBBe9CDEE64"
export const GovernanceToken = "0x1CfEB159A5e745Df90c9909aC0957f900c8a7aa6"

export const timeLockAddress = "0xA3155aB08887d2291Ea1A29D1f092c04D2AC17f0"
export const GovenorContract = "0xd7D8B30169245A237AC3C348259d6E23ABc919c1"

export const contractABI = abi.abi;
export const contractABIDiamond = abiDia.abi;
export const contractABIBox = abiBox.abi;
export const contractABIDiamondCut = abiCut.abi;
export const contractABIDiamondLoupe = abiLoupe.abi;
export const contractABIGovToken = abiToken.abi;
export const contractABIGovernor = abiGovernor.abi;
export const contractABIOwnership = abiOwnerShip.abi;
export const contractABITimeLock = abiTimeLock.abi;
