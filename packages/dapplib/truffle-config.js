require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remember huge grace beach bottom stage'; 
let testAccounts = [
"0xe5e91e5394f9de5f828d0be570236b5c09b5e129433743f6ad878507ba5b03e9",
"0xe99eb813cb571253946fc86a64ab07cdea9dcdd9411c744ceaef9f1222b7b71f",
"0xbff428f4f7fe43b2756eb2e0b716d5816b1abc1717da7f50052a98489971d066",
"0xb0c2302f2bbe95841c94fe3f8beb0fc51b76074a9115fe341c47eab98b673d60",
"0xed46d2267da4530ea4f40af5d8d93a57c2b0b68411d398206133fa43a604882c",
"0x7208289c234a21a8f07ca019dca751cff2734190488ac6b5f20d9ae82ab6e48e",
"0x120de1ce88f1fbbb376cab60b2d8a8c427caa595fe84098540d8d878b7932876",
"0x668863104a210bee0cb4849bcd45e23b334dffd0dfd48789e990eefdb3bf16dd",
"0xbdf9ff260403b261dda65f5f82a6e25d3f9736af2d3889af1e2e88cd0686dc61",
"0xed99ae3ef5a44e07ebed87a9a04b6df5b83575e363b563e7c83a43e41ee8366b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


