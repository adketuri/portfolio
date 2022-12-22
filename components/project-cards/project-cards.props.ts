import { Link } from "../link-list/link-list.props";

export type Project = {
    title: string,
    description: string,
    image: string,
    date: string,
    tags?: string[],
    links?: Link[],
}

export const projects: Project[] = [
    {
        title: "Sessions",
        image: "https://i.imgur.com/STfxNDU.png",
        description: "Sessions was a live streaming platform for musicians. I helped build the web and native platform, drafted API specs with the backend team, led a squad of 4 engineers, and worked closely with stakeholders to deliver timely feature updates.",
        tags: ["typescript", "react", "react native"],
        date: "2019 - 2022",
        links: [
            { text: "Press (MagneticMag)", url: "https://www.magneticmag.com/2020/09/industry-insider-interview-tim-westergren/", external: true },
            { text: "Steam", url: "https://store.steampowered.com/app/645380/Heroes_of_Umbra/", external: true }
        ]
    },
    {
        title: "Next Music",
        image: "https://i.imgur.com/STfxNDU.png",
        description: "Next Music was a dashboard for artists to access all of the offerings of Next: track followers, manage a crew (think patreon), configure social links (linktree), etc. I was involved with early decisions on the tech stack, patterns, led a squad of 4 engineers, and maintained 100% code coverage.",
        tags: ["typescript", "react", "next.js", "chakra ui"],
        date: "Oct - Dec 2022",
    },
    {
        title: "RM2k.net",
        image: "https://i.imgur.com/wRhfhSh.png",
        description: "A website to archive and reminisce about old RPG Maker games. Users can create accounts with simple management options (change bio, reset password via email), download games, leave comments comments, or submit their own games.",
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
        image: "http://andrew.alcuria.net/img/hou.png",
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
        image: "http://andrew.alcuria.net/img/su.png",
        description: "Starless Umbra is a couch co-op multiplayer RPG in-development for PC, Nintendo Switch. It has over 160,000 plays and has won awards on gxc.gg and rpgmaker.net.",
        tags: ["gamemaker"],
        date: "2020 - Present",
        links: [
            { text: "Website", url: "http://starlessumbra.com/", external: true },
            { text: "RPGMaker.net", url: "https://store.steampowered.com/app/645380/Heroes_of_Umbra/", external: true },
            { text: "PC Gamer Press", url: "https://www.pcgamer.com/the-top-five-rpg-maker-games/", external: true }
        ]
    },
    {
        title: "LeechTeach",
        image: "http://andrew.alcuria.net/img/umbracraft.png",
        description: "LeechTeach is an android application for WaniKani (a Japanese language-learning site) to help identify and study troublesome vocabulary.",
        tags: ["java", "android"],
        date: "2019",
        links: [
            { text: "Source", url: "https://github.com/adketuri/leech-teach", external: true },
        ]
    },
    {
        title: "Heroes of Umbra Builder",
        image: "http://andrew.alcuria.net/img/builder.png",
        description: "HoU Builder is a web application for creating Heroes of Umbra character builds.",
        tags: ["react", "go"],
        date: "2019",
        links: [
            { text: "Website", url: "https://builder.heroesofumbra.com/", external: true },
            { text: "API", url: "https://api.heroesofumbra.com/", external: true },
        ]
    },
    {
        title: "Umbracraft",
        image: "http://andrew.alcuria.net/img/umbracraft.png",
        description: "Umbracraft is a collection of tools built with libgdx to help game developers build role-playing games without any programming knowledge, similar to RPG Maker.",
        tags: ["java", "libgdx"],
        date: "2016",
        links: [
            { text: "Source", url: "https://github.com/adketuri/umbracraft", external: true },
        ]
    }
]