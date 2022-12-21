export interface Link {
    text: string;
    url: string;
    external?: boolean;
}

export interface LinkListProps {
    links: Link[]
}