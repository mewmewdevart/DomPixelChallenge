export interface Post {
    id: number;
    title: string;
    url: string;
    author: string;
    date: string;
    content: string;
    shortDescription: string | undefined;
    image: string;
    tagContent: { emoji: string; label: string }[];
}