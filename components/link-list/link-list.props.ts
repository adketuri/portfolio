export interface LinkItem {
    text: string;
    url: string;
    external?: boolean;
}

export interface LinkListProps {
    links: LinkItem[]
}