const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('GoofyGooberToken', () => {
    async function initialize() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const amount = ethers.parseUnits("1", "ether");

        const Contract = await ethers.getContractFactory("GoofyGoober");
        const contract = await Contract.deploy({
            // constparam,
            // value: amount
        });

        return { contract, amount, owner, otherAccount };
    };

    describe('Deployment', () => {
        it("name", async () => {
            const { contract } = await loadFixture(initialize);

            const name = await contract.name();

            console.log(name);

            expect(name, "Name Check").equal("GoofyGoober");
        });

        it("symbol", async () => {
            const { contract } = await loadFixture(initialize);

            const name = await contract.symbol();

            console.log(name);

            expect(name, "Symbol Check").equal("GG");
        });

    });
});