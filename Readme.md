# NFT Collection

This project is a simple JavaScript program to manage a collection of Non-Fungible Tokens (NFTs).

## File Structure

- `NFT_Collection.js`: This is the main file that contains the logic for minting NFTs, listing all NFTs, and getting the total supply of NFTs.

## Functions

- [`mintNFT(name, author, year, description)`](NFT_Collection.js): This function creates an NFT with the provided metadata and adds it to the collection.

- [`listNFTs()`](NFT_Collection.js): This function lists all the NFTs in the collection along with their metadata.

- [`getTotalSupply()`](NFT_Collection.js): This function prints the total number of NFTs minted.

## Usage

To use this program, call the `mintNFT()` function with the desired metadata to create an NFT. You can then use `listNFTs()` to print all the NFTs in the collection and `getTotalSupply()` to get the total number of NFTs minted.

```javascript
mintNFT("Kumar NFT", "Kumar Devashish", 2024, "My First NFT");
mintNFT("Kumar NFT 2", "Kumar Devashish", 2024, "My Second NFT");
mintNFT("Kumar NFT 3", "Kumar Devashish", 2024, "My Third NFT");

listNFTs();
getTotalSupply();