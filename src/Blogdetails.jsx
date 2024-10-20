import React from "react";
import { useParams , useNavigation } from "react-router-dom";


const Blogdetails = ()=>{

    const history = useNavigation
    const {id} = useParams();

    const blogList = [
        {
          id: 1,
          imageUrl: 'https://image.cnbcfm.com/api/v1/image/107005776-1643087617730-gettyimages-1237955656-20090101220124-99-833573.jpeg?v=1712085347',
          title: 'Understanding Bitcoin and its Impact on the Market',
          subtitle: 'A deep dive into the world of cryptocurrency',
          content:
        "Bitcoin, introduced in 2009 by an anonymous person or group under the pseudonym Satoshi Nakamoto, is the first decentralized digital currency that revolutionized the way we perceive money and financial transactions. Unlike traditional currencies issued by governments, Bitcoin operates on a peer-to-peer network, where transactions are verified by network participants known as miners and recorded on a public ledger called the blockchain. This innovation eliminated the need for a central authority, such as a bank, to mediate or validate transactions. At its core, Bitcoin is built on blockchain technology, a decentralized system of cryptographic proof that ensures transparency, security, and immutability. Bitcoin's finite supply of 21 million coins and its deflationary nature have made it popular as a store of value, often referred to as 'digital gold.' People use Bitcoin not just for payments but also as an investment, speculating on its long-term value appreciation. Cryptocurrency, more broadly, refers to digital or virtual currencies that use cryptography for security and operate on decentralized networks like Bitcoin. Since the launch of Bitcoin, thousands of cryptocurrencies have emerged, each with unique features and use cases.",
    },
        {
          id: 2,
          imageUrl: 'https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg',
          title: 'Ethereum: Smart Contracts and Decentralized Applications',
          subtitle: 'How Ethereum is transforming the blockchain landscape',
          content: 'Ethereum, launched in 2015 by programmer Vitalik Buterin, is a decentralized, open-source blockchain platform that enables developers to build and deploy decentralized applications (DApps). Unlike Bitcoin, which primarily focuses on peer-to-peer digital currency transactions, Ethereum offers a more versatile and programmable blockchain. Its most groundbreaking feature is the introduction of smart contracts—self-executing contracts with predefined rules directly written into code. These contracts allow for automation and enforcement of agreements without the need for intermediaries like lawyers or notaries.Ethereum’s blockchain operates through a decentralized network of computers (nodes) that work together to validate and execute transactions. The native cryptocurrency of the Ethereum network, Ether (ETH), is used to power these transactions and to compensate participants who perform computations on the blockchain. It also serves as a medium of exchange within decentralized finance (DeFi) platforms, gaming ecosystems, and non-fungible token (NFT) marketplaces.Ethereum’s flexibility has made it the foundation for a wide variety of decentralized applications across different industries, from finance to gaming and beyond. It’s also the blockchain of choice for many Initial Coin Offerings (ICOs) and decentralized autonomous organizations (DAOs).One key difference from Bitcoin is Ethereum’s continuous development and upgrades. The most significant of these is Ethereum 2.0 w referred to as Ethereums merge which transitions the platform from a proof-of-work (PoW) consensus mechanism, similar to Bitcoin’s, to proof-of-stake (PoS). This shift aims to make Ethereum more scalable, energy-efficient, and secure. With its active developer community and vast range of use cases, Ethereum has solidified itself as a cornerstone of the blockchain and cryptocurrency ecosystem.'
        } ,
        {
          id: 3,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TDuoNtaGOh9yK5xM2zQlH1nxv31iA8-gyw&s',
          title: 'DeFi: The Future of Decentralized Finance',
          subtitle: 'Decentralized finance is disrupting traditional banking',
          content: 'Decentralized Finance, commonly known as DeFi, is an emerging financial technology that seeks to revolutionize the traditional financial system by eliminating intermediaries such as banks, brokerages, and exchanges. Built on blockchain technology, DeFi enables the creation of a decentralized, open, and transparent financial ecosystem where users can access a wide range of financial services like lending, borrowing, trading, and earning interest—all without the need for a central authority.The heart of DeFi lies in smart contracts, primarily built on the Ethereum blockchain, which automate and enforce the rules of transactions. These smart contracts replace traditional financial institutions, allowing users to engage in peer-to-peer transactions securely and trustlessly. For example, instead of going to a bank to get a loan, DeFi protocols like Aave or Compound allow users to borrow funds directly from other individuals by using their crypto assets as collateral. DeFi platforms are accessible to anyone with an internet connection, making them more inclusive and global. Additionally, they offer higher transparency and control since transactions and smart contract code are visible on the blockchain for public scrutiny. Users can maintain full control over their assets without relying on third parties, reducing counterparty risks that often exist in centralized financial systems.Despite its rapid growth and innovation, DeFi also faces challenges, including regulatory uncertainty, scalability issues, and security vulnerabilities due to coding errors in smart contracts. Nevertheless, DeFi represents a paradigm shift in the financial sector, promoting the democratization of finance and providing users with greater autonomy and opportunities to interact with money in novel ways.'
        },
        {
          id: 4,
          imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max',
          title: 'NFTs: Revolutionizing Ownership in the Digital Age',
          subtitle: 'The rise of non-fungible tokens in art and entertainment',
          content: 'Non-Fungible Tokens (NFTs) are a groundbreaking development in the digital space, transforming the way we think about ownership, art, and collectibles in the digital world. Unlike cryptocurrencies like Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, NFTs are unique digital assets that cannot be replicated or exchanged on equal terms. Each NFT holds distinct information that makes it verifiably different from any other token, giving it intrinsic value.NFTs are built on blockchain technology, primarily the Ethereum network, which ensures that ownership of these digital assets can be securely tracked and verified. This blockchain-based verification has allowed artists, musicians, and creators to sell digital works—such as images, videos, music, and even virtual real estate—as one-of-a-kind items. The buyer of an NFT doesnt just purchase the digital file; they purchase a verified proof of ownership over the asset, which can then be sold or traded in secondary markets.One of the most revolutionary aspects of NFTs is their impact on the art and entertainment industries. For instance, digital artists who previously struggled to monetize their works can now sell pieces directly to collectors, earning royalties every time their NFT is resold. This creates an entirely new economy for digital content creators.However, NFTs are not without controversy. Critics often point to their environmental impact due to the energy-intensive nature of blockchain networks like Ethereum, as well as speculative bubbles that have led to volatile pricing. Despite these challenges, NFTs have reshaped the digital landscape by offering a new, decentralized way to own and trade digital assets, with use cases extending far beyond art to gaming, virtual worlds, and even real estate.'
        }
      ];
    
    const blog = blogList.find(blog => blog.id === parseInt(id));
     
    if (!blog) {
        return <h1>Blog not found</h1>; // Handle if no blog found
      }


    return(
        <div>
            <div className="container mx-auto mt-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img className="object-cover w-full h-64" src={blog.imageUrl} alt={blog.title} />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-xl text-gray-700 mb-4">{blog.subtitle}</p>
          <p className="text-base text-gray-700">{blog.content}</p>
        </div>
      </div>
    </div>

        </div>
    )
}
export default Blogdetails;