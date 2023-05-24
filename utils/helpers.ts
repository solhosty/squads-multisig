import { Keypair } from "@solana/web3.js";

export function loadWallet(kFile:string): Keypair { 
    const fs = require("fs")
    return Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(fs.readFileSync(kFile).toString()))
    );
}
