// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, author, year, description) {
    const nft = {
        name: name,
        author: author,
        year: year,
        description: description
    };
    nfts.push(nft);
}

// Step 3: Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT ${i + 1}`);
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Author: ${nfts[i].author}`);
        console.log(`Year: ${nfts[i].year}`);
        console.log(`Description: ${nfts[i].description}`);
        console.log('------------------------');
    }
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFTs Minted: ${nfts.length}`);
}

// Call your functions below this line


mintNFT("Kumar NFT", "Kumar Devashish", 2024, "My First NFT");
mintNFT("Kumar NFT 2", "Kumar Devashish", 2024, "My Second NFT");
mintNFT("Kumar NFT 3", "Kumar Devashish", 2024, "My Third NFT");



listNFTs();
getTotalSupply();
