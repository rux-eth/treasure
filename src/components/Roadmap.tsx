import RoadmapItem from '@components/RoadmapItem';
import Title from '@components/Title';
import { Stack } from '@mui/material';
import { FC } from 'react';

const roadmapData = [
    {
        title: 'Minting Phase',
        content:
            'Bring 10,000 of Azamat’s precious Treasures into the metaverse, distribute the Treasures of the land to worthy warriors.',
        extras: [`Public mint (0.0420ETH each) ${process.env.NEXT_PUBLIC_MINTDATE} CST`],
    },
    {
        title: 'Warriors',
        content: `Azamat reserved these precious Treasures containing battle gear for only the most worthy warriors. Warriors are the next step into Treasure’s metaverse vision. "Warriors (by Treasure)" will be airdropped to all Treasure (For Warriors) holders 3 months after Mint. Snapshot will determine those eligible for this airdrop.`,
        extras: [
            `Warriors are characters with their own unique abilities, stats, and skills. They can be customized by equipping items found in Treasure chests. They will play a huge role in our Multiplayer Play-to-Earn Game.`,
        ],
    },
    {
        title: 'Treasure / Warrior Merch',
        content:
            'Unlike other succesful projects charging loyal holders for merch, we aim to provide all Treasure / warrior holders with free merch. Once sales goals are met, Treasure will use a part of the sales to fund merch. We aim to collaborate with reputable, high quality merch brands to bring our holders quality value! The Treasure team strongly believes communities play a strong role to the success of any NFT Project, and what better way to support the project than to rock the name at events, public gatherings etc..',
    },
    {
        title: 'The TreasureVerse',
        content: `The Treasure team have a forward thinking, long term vision with the project, aiming to bring maximum possible benefits to Genesis Treasure holders. One of the Key components of this vision is TreasureVerse.`,
        extras: [
            `The first part of the TreasureVerse we will be building is a Play-to-Earn Role-Playing-Game. Game development funds will be acquired from mint sales, secondary sales, as well as acquired partnerships post mint (primarily through seed funding and sponsorships).`,
            `As we get further into development, we will begin to reveal partnerships and information regarding game mechanics.`,
            `We also plan to make a Play-to-Earn mobile game to be released shortely after successful launch of the Role-Playing-Game game.`,
        ],
    },
    {
        title: 'Native Currency',
        content:
            'Treasureverse will be powered by $BOOTY. An ERC-20 Token that will be initially airdropped to chest & warrior holders. $BOOTY will be earn-able through gameplay by completing quests, winning Player vs. Player matchups & more.',
    },
    {
        title: 'Roadmap 2.0',
        content: `
    Once all components of the original roadmap have been fulfilled, roadmap 2.0 will be released to update the community on game development details, $BOOTY tokenomics, and further plans for the project.`,
    },
];

const Roadmap: FC = () => (
    <Stack
        id="roadmap"
        spacing={3.5}
        sx={{
            textAlign: 'center',
            alignItems: 'center',
        }}
    >
        <Title>Roadmap</Title>
        {roadmapData.map((item) => (
            <RoadmapItem
                key={item.title}
                title={item.title}
                content={item.content}
                extras={item.extras}
            />
        ))}
    </Stack>
);

export default Roadmap;
