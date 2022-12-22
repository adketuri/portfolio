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
        title: "Heroes of Umbra",
        image: "http://andrew.alcuria.net/img/hou.png",
        description: "HoU is a networked multiplayer action RPG. I managed to build a game engine with libGDX/kryonet, teach myself pixel art to create the game assets, and publish the game on steam.",
        tags: ["java", "libgdx", "kryonet"],
        date: "2012 - 2018",
        links: [
            { text: "Website", url: "http://heroesofumbra.com/", external: true },
            { text: "Steam", url: "https://store.steampowered.com/app/645380/Heroes_of_Umbra/", external: true }
        ]
    }
]