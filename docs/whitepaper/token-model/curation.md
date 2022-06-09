---
sidebar_position: 3
---

# Curation

### Curation Shares

Curation Shares are the continuous tokens OKP4 uses to incentivize curators towards the shared goal of identifying quality data sources. They are managed by OKP4 bonding curve contract.

Properties:
- Limitless: the supply of curation shares is limitless. There’s no hard cap to the number of shares that curators can mint
- Deterministic: The utilization of a bonding curve facilitates a predetermined and fixed price discovery mechanism for the curation shares
- Continuous: The smart contract continuously determines the price depending on the purchase and sale of curation shares
- Liquidity: The bonding curve acts as automated market maker, which allows curators to buy or sell curation shares instantly and at any time

OKP4 Ecosystem uses a bonding curve to coordinate the work of curators to achieve the shared goal of indexing the contents of quality items. Curators are incentivized in an economic game to identify high-quality items with attractive earning potentials and try signal on these subgraphs early on.

<br/>

### Curation Fees

It should be noted that there is an entry fee of 2% for the mint of shares. These fees will go directly into the DAO's treasury.

<br/>

### Burn & Mint Process

It is possible at any time to buy shares. This process is called "mint".

[Mint SHEME]

In the same way, it is possible to sell shares at any time. This process is called "burn".

[Burn SHEME]

Note: It is important to note that as a Curator, you are confronted with the risk of withdrawing less KNOW from the bounding curve than you started with. In the worst-case scenario, your curation shares decrease substantially I value so that you receive only a tiny fraction of the KNOW back that you initially deposited.

<br/>

### Bonding Curve 101 Model

A bonding curve describes the relationship between the price and supply of an asset. It is a mathematical concept modelling the idea that the price of an asset (with a limited quantity) increases slightly for subsequent buyers with each purchase. The reasoning behind the increase in price is that the freely available supply is reduced with every unit that is acquired. The mechanism of a bonding curve rewards the earliest investors with higher profits. The basic idea behind the concept of a bonding curve is quite intuitive: the supply of a token determine its price. The price increases when the number of distributed tokens increases and vice versa.

Each dataset or service has a bonding curve on which curation shares are minted when a Curator decides to add a signal. The bonding curve is the same for all items. These curves are designed in such a way that the mint price of a curation share increases linearly with the number of shares left to mint. Which means that for each share minted, it will get more expensive to purchase a share (conversely, for each share burned, the price will be lower).

Here is an example of what we mean, see the bonding curve below:

[SHEME]

The KNOW valuation of curation shares is determined by the bonding curve and can be volatile. It is possible to suffer big losses (or make big gains). Signaling early means you put in less KNOW for each share. By extension, this means you earn more Curator royalties/KNOW than later Curators for the same item.

<br/>

### Risks

Being a Curator in our ecosystem comes with certain risks. Let’s have a look at the risks Curators are confronted with.
1. New market risk: The query market is inherently young and there is risk that your %APY may be lower than you expect due to nascent market dynamics
2. Bonding curve risk: Asset depreciation as a result of depositing into the bonding curve of an item whose curation shares are being burned by other Curators. 
3. Non-functional risk: An item can fail due to a bug. A failed item does not accrue royalties. As a result, you will have to wait until the developer fixes the bug and deploys a new version.
4. Item assessment risk: Marking false judgements about the attractiveness of an item.
5. Gas price risk: High gas prices could reduce your profit margin, especially if you are curating with a smaller stack of KNOW.
6. Curation taxes risk: 2% curation fee. This can become costly if Curators often switch to another subgraph or have to commit to the latest version of the subgraph. It is not a "risk", but it is something to keep in mind.