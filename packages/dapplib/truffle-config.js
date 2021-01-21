require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard riot pizza exchange grace industry equal genius'; 
let testAccounts = [
"0x57b3720a1b8aaa43326db4cf10710c2b1b7c07c02f6bdfa841fcf5496de5b389",
"0xd60ed90b70ee6a6e9dbd417441ee7805e1a4873718496f3a90822895b2a5fea7",
"0x109f9775d595fb096227c0cc8194d9a8a2ba9b69f7e62c073f6ef1b7967e47f1",
"0x62c3c00ea03304fa8b23ab59d067ec8b23f49f0c00c2e1fecbe85b15cd5eb5f7",
"0xd76018d259d026a3aa6be0519b92cbe7c694fa4a1541839ae819296cfa2117c0",
"0x5d2ff002c2eef8ec34184cb39e2822e3ecd63c3b351b6eaa0ccb0d852e562caa",
"0x458031ca6eebf253348b0bab49dc1ba7f336a51bae11f8b826677e34669fa97b",
"0xf07977dbea188c81614d81401b93e8e6d9210f82f07c241b3737c3e8e49b0322",
"0xe470d91fd3575a12afe924508989c43601cc181acca3f145dc32254ac5defc6b",
"0x45ff88718fcbe0f440051b87a34f28322217ba412cc8d7088111cb53865b2842"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
