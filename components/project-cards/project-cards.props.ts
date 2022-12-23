import { LinkItem } from "../link-list/link-list.props";
import { ImageKey } from "./images";

export type Project = {
    title: string,
    description: string,
    image: ImageKey,
    date: string,
    tags?: string[],
    links?: LinkItem[],
}

export const projects: Project[] = [
    {
        title: "Sessions",
        image: "sessions",
        description: "Sessions was a live streaming platform for musicians, with over 130k artists and 1.7m fans. I helped build features from ticketed events to streaming on the web and native platform. This involved collaborating with the backend team on API specs, leading a squad of 4 engineers, and working closely with stakeholders to deliver timely updates.",
        tags: ["typescript", "react", "react native"],
        date: "2019 - 2022",
        links: [
            { text: "MagneticMag", url: "https://www.magneticmag.com/2020/09/industry-insider-interview-tim-westergren/", external: true },
            { text: "Rolling Stone", url: "https://www.rollingstone.com/pro/news/tim-westergren-pandora-sessions-artists-1053968/", external: true }
        ]
    },
    {
        title: "Next Music",
        image: "nextmusic",
        description: "Next Music was a dashboard for artists to access all of the offerings of Next: track followers, manage a crew (think patreon), configure social links (linktree), etc. I was involved with early decisions on the tech stack & patterns, led a squad of 4 engineers, implemented features, and maintained 100% code coverage.",
        tags: ["typescript", "react", "next.js", "chakra ui"],
        date: "Oct - Dec 2022",
    },
    {
        title: "RM2k.net",
        image: "rm2k",
        description: "RM2k.net is a solo fullstack project to archive and reminisce about old RPG Maker games. Users can create accounts with simple management options (change bio, reset password via email), download games, leave comments comments, or submit their own games.",
        tags: ["typescript", "react", "graphql", "postgresql"],
        date: "2020",
        links: [
            { text: "Website", url: "https://rm2k.net/", external: true },
            { text: "Source (FE)", url: "https://github.com/adketuri/historia-client", external: true },
            { text: "Source (BE)", url: "https://github.com/adketuri/historia-server", external: true },
        ]
    },
    {
        title: "Heroes of Umbra",
        image: "hou",
        description: "HoU is a networked multiplayer action RPG. I managed to build a game engine with libGDX/kryonet, teach myself pixel art to create the game assets, and publish the game on steam.",
        tags: ["java", "libgdx", "kryonet"],
        date: "2012 - 2018",
        links: [
            { text: "Website", url: "http://heroesofumbra.com/", external: true },
            { text: "Steam", url: "https://store.steampowered.com/app/645380/Heroes_of_Umbra/", external: true }
        ]
    },
    {
        title: "Starless Umbra",
        image: "su",
        description: "Starless Umbra is a couch co-op multiplayer RPG in-development for PC, Nintendo Switch. It has over 160,000 plays and has won awards on gxc.gg and rpgmaker.net.",
        tags: ["gamemaker"],
        date: "2020 - Present",
        links: [
            { text: "Website", url: "http://starlessumbra.com/", external: true },
            { text: "RPGMaker.net", url: "https://rpgmaker.net/games/407", external: true },
            { text: "PC Gamer", url: "https://www.pcgamer.com/the-top-five-rpg-maker-games/", external: true }
        ]
    },
    {
        title: "Battle Camp",
        image: "bc",
        description: "BC is a monster catching MMORPG, winner of the App Store's Multiplayer Game of The Year 2013. I built intricate UI flows, game mechanics, and worked closely with backend teams to create APIs. It has 30m+ downloads and made over $50m in revenue.",
        tags: ["java", "libgdx", "android"],
        date: "2014 - 2018",
        links: [
            { text: "Apple Dev Spotlight", url: "https://developer.apple.com/app-store/wrkshp/", external: true },
            { text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pennypop.monsters.live", external: true }
        ]
    }
]