---
sidebar_position: 9
---

# Roles

## Overview

Across the vibrant ecosystem of OKP4, participants can choose from several different functional roles in the protocol - depending on their technical skills, risk tolerance, desired activity level and resources at their disposal. In this section we will quickly introduce you to the various roles in just a few words, for more details please select the following sections.

<br/>

***Blockchain Layer Participants***

Validators: Validator can self-bond KNOW to increase their probability to validate a block and get rewards. They also have an obligation to vote on the DAO's proposals

Delegators: Stakeholders can delegate their KNOW tokens to validator nodes in order to collect rewards. Their votes are automatically delegated to validators with the tokens; can be changed manually.

DAO participants: Protocol governance. Anyone with staked KNOW tokens can participate in on-chain governance. It is possible to make a proposal and vote on a proposal.

<br/>

***Data Spaces Participants***

Data providers: are users who deposit one or more datasets on the protocol so that consumers can use it to create knowledge. They are paid for the use of their datasets.

Service providers: are users who provides an algorithm, a software, a storage system, or any other processing or calculation resource that requires a working time. It is thanks to them that datasets can be assembled and processed to create knowledge.

Consumers: are users who pay tokens to initiate workflows and create knowledge. They contribute to the health of the network by generating value for all network participants, especially the retribution for curators, data and services providers.

Curators: Curators can stake $KNOW tokens on data and services to increase visibility and trust, as well as to obtain a portion of the income generated by this asset if applicable.

Governors: Each Data Space can have its own governance mechanisms. Governors are the ones who enforce them. The ability to become a governor depends on the Data Space, some will have a specific governance token (fungible or non fungible), some will have multisigs, some will have single self-designated entities defining the rules. Anything is possible.

## Validators

Our validator network is based on the Tendermint consensus system which relies on a group of validators in charge of committing new blocks to our blockchain. They participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by the private key of each validator. Applicants to this group can have KNOW tokens delegated to them by the token holders (delegators).

Anyone can become validator at any time, except when the size of the current validator set is greater than the maximum number of validators allowed. Validators will be automatically selected according to their voting power, which is determined by the number of KNOW tokens staked by the validator plus those delegated. Our network will initially contain a set of 125 validators (with an increase over time based on a growth rate). The 125 best candidates with more voting power will then be the approved validators of our network; the other candidates are on a waiting list. If a validator is replaced by a new validator, the existing validator becomes inactive (back on the waiting list) and all his KNOW and delegated KNOW enter the unbounding state.

Validators (and their delegates) earn KNOW tokens as a reward for running the Tendermint consensus protocol. These rewards come from inflation and transaction fees. Validators can choose to set a small commission percentage on the rewards received by their delegators as an additional incentive.

There must be some penalty imposed if validators do not respect the protocol rules whether intentional or unintentional (double sign, offline too long...). This will cause the validator to lose his good reputation and his proportional share of bonded token that will get slashed. The penalty depends on the severity of the violation.

## Delegators

Delegators are KNOW holders who cannot, or do not want to, run a validator node themselves. They can delegate KNOW to a validator and obtain a part of their revenue in exchange.

Delegators share revenue with their validators, but they also share risks. If a validator does not respect the described rules, he and each of his delegators will be partially deducted in proportion to their delegated stake. This is why each delegator must be careful about which validator they choose before deciding to delegate. It is possible to dilute the level of risk by delegating to several validators.

Delegators play en essential role in the system since they are responsible for the selection of validators; they therefore play an active role in the ecosystem. They must actively monitor the actions of their validators and participate in governance.

About the governance of the DAO, the delegators give their voting power automatically to the validators to whom they delegate their tokens. However, if they wish to vote by themselves, they can manually "retrieve" the right to vote on their share of tokens and vote normally.

## DAO Participants

Anyone with staked KNOW tokens can participate in governance. It is possible to:

- Make a proposal: costs KNOW tokens
- Vote on a proposal: doesn't cost KNOW tokens, but each token gives a vote right on each proposal, and each KNOW gives 1 voting power

For more information on governance please click [here](/docs/whitepaper/okp4-blockchain-architecture#governance--dao).

## Data Providers

Data providers are users who deposit one or more datasets in the catalog and/or in one or more data spaces. Their role is to offer datasets to be used by services and data applications to create valuable knowledge.

They are paid by the consumers each time their data is used or bought, depending on governance rules of the Data Space.

It is particularly recommended to deposit quality datasets, on the one hand because it will be much more likely to be used many times (and to be well curated), on the other hand it will give the provider a well known reputation that he can use in his favor for other deposits or if he decides to curate.

## Service Providers

Service providers are users who deposits and are able to run what is called a service. A service can be an algorithm, a processing software, a tool... requiring a processing time. They are paid by the consumers based on a fixed query fee or an hourly rate or that they define themselves according to the duration of use.

It is particularly recommended to deposit quality service software, on the one hand because it will be much more likely to be used many times (and to be well curated), on the other hand it will give the provider a well known reputation that he can use in his favor for other deposits or if he decides to curate.

The provider will be able to create a descriptive page for his repository at any time. However, in order for a builder to be able to invoke and use this service, he will have to stake $KNOW in proportion to the hourly fee that he will define himself.

## Consumers

Consumers are users who will sign the transactions and pay the network in order to process workflows. They spend $KNOW to retribute pay for transaction fees, and eventually data providers, service providers, curator fees and data space taxes if applicable.

Consumers can be:

- People, sending transactions to the blockchain to initiate specific actions & workflows directly.
- Data applications, sending transactions on behalf of their users and serving as a middleman between OKP4 outputs and the end-user. This is pretty useful for data applications willing to use a SaaS model for example.

## Curators

<br/>

### Curation Markets

With the establishment of curation markets in OKP4 ecosystem, a whole new world of possibilities will be opening up. The new opportunity to participate in the network as a curator comes with many exciting adventures but also with potential risks.

What are curation markets?

A curation market is a model allowing actors in a network to effectively coordinate around shared goals, this is accomplished by coordinating the work around a token that is minted to incentivize specific results (they earn from the value they co-create). Curation markets are specifically designed to reduce information asymmetries and to curate valuable information.

Decentralized Coordination of Labor and Capital: The establishment of curation markets allows network participants to mint and burn tokens (named shares) in accordance with predefined rules without involving a centralized third party. The process of creating these tokens of value is not controlled by a specific entity. Instead, the bonding curve contract of the curation market is responsible for distributing (minting) the shares.

Core Components of Curation Markets:

- Continuous: shares (tokens) can be minted and burned any time without time constraints
- Autonomous: bonding curve contracts calculate token prizes autonomously
- Communal: a communal deposit is created to keep the amount paid for minted tokens
- Proportional: curators curate information with their proportional backing of tokens bonded to them

<br/>

### Curators

Curators do not need to possess complex technical skills or knowledge. All it takes is the ability to do transactions via Keplr. Similarly, Curators are not required to stake a minimum amount of KNOW. Depending on the individual's risk tolerance, Curation may be especially attractive for those who are able to accurately evaluate items and have a good understanding of Web3 and of the underlying mechanics of bonding curves.

In order for builders and Data Spaces to simply find an item, it must first be ranked. Ranking is a process in which items are put in competition with each other so that they can be found more quickly and it's easier to place trust in them.

Thus, if users had to guess which items to use, they would be less likely to find quality items on the first try. This is where curators come in.

Curators are essential to the decentralized economy on our protocol. They use their knowledge and common sense to analyze items to identify which ones are of the highest quality and which ones are likely to be used the most. Through the catalog, Curators can visualize the entirety of what is available in order to make signaling decisions and invest in it.

These people will be rewarded by earning a portion of the rewards that datasets and services generate. Curation is about identifying valuable pieces of information in a data stream (or in a service) and presenting it to the target audience in a way that adds value (mainly visibility and trust).

OKP4 uses curation as an incentive mechanism to encourage network participants to identify items of a high-quality and to foster information sharing in the ecosystem.
The curator role is ideal for all those that wish to become more active in the network than just being a Delegator. They can be community members, data consumers, developers, item providers...

When signaling, Curators can decide to signal a specific version of a dataset/service, or they can decide to use automatic migration through updates to new versions. If you decide to signal on a specific version, despite the update, your shares will always remain on that specific version.

Curation is risky. Do your due diligence to ensure that you only curate datasets and services that you trust. A detailed list of the different risks is available in the token model section.

<br/>

### Auto-Curation Priority

Any provider can stake KNOW tokens on their data/service as a curation to oneself. It follows the same rules as any curator. The only change is that the provider will always have the first hand before the others.

Data & Service Operation: When the provider will deposit his dataset/service, he will have to choose if he accepts or not the curators. If he has accepted them, when he makes his dataset/service available for use, the provider can, if he wants, buy shares before anyone else.

Once the first purchase is made, the burn & mint system opens to the whole community. The provider who curates will of course receive the associated rewards, in proportion to his number of shares (at the very beginning if he is alone, he will receive 100% of the curation royalties).

<br/>

:::note

The first address to signal a particular item is considered the first curator and will have to do much more gas-intensive work than the rest of the following curators because the first curator initializes the curation share tokens, initializes the bonding curve, and also transfers tokens into OKP4 proxy.
:::

## Governors

The ideal we imagine and wish for, is a Dataverse filled with Data Spaces, each with its own operating model (rules) and each with its own governance token. However, we know that in some cases, especially in the context of a small restricted Data Space or in a private Data Space for example, this solution is not the most adequate for the participants.

This is why we have decided to let each Data Space choose between different governance options:

- Governance via a newly created token. This token will have value, a market...
- Governance via whitelist. The creators of the Data Space will be able to choose themselves which wallet will have the right to vote, what is the voting weight per wallet, if there is the possibility to add/remove people from the list or if they don't want the list to change...
- Governance via the $KNOW token.
- Under development, the possibility to have a governance token from other chains (ETH, BNB...)

As an example, it will be able to add fees for the use of its Data Space in order to create or develop a treasury; because each Data Space can have its own treasury if needed.

<br/>

For more informations about the rules, please click [here](/docs/whitepaper/data-spaces#ds-governance).