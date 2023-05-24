import Squads from "@sqds/sdk";
import walletSecret from "./squads.json";
import { Keypair } from "@solana/web3.js";
import { loadWallet } from "./utils/helpers";

const wallet = loadWallet(walletSecret);
const threshold = 1;
const createKey = wallet.publicKey;
const members = [wallet.publicKey];
const name = "My Multisig";
const description = "This is my multisig";
const image = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

// By default, the canonical Program IDs for SquadsMPL and ProgramManager will be used
// The 'wallet' passed in will be the signer/feePayer on all transactions through the Squads object.
const squads = Squads.mainnet(wallet); // or Squads.devnet(...); Squads.mainnet(...)

const multisigAccount = await squads.createMultisig(threshold, createKey, members, name, description, image);
console.log(`${multisigAccount} created!`)