import { StaticImageData } from 'next/image';

export interface DataPost {
    id: number;
    date: string;
    image: string | StaticImageData;
    title: string;
    author: string;
    content: string;
    shortDescription?: string;
    tagContent: { emoji: string; label: string }[];
    url: string;
}

const data: DataPost[] = [
    {
        id: 1,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "Lorem ipsum dolor sit amet1",
        author: "Larissa",
        shortDescription: "Assaaaaorem ipsum dolor sit amet, consectetur adipiscing elitAssaaaaorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tortor metus. Mauris imperdiet porttitor nisl, non viverra justo. Fusce vitae ex varius, lobortis lectus ut, tempus ante.",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🛠️", label: "Ipsum" },
            { emoji: "🔋", label: "Lorem ipsum" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: "/pages/post",
    },
    {
        id: 2,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Conteúdo da postagem 2",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🛠️", label: "Ipsum" },
            { emoji: "🔋", label: "Lorem ipsum" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: "pages/post/postagem-2",
    },
    {
        id: 3,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Conteúdo da postagem 3",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🛠️", label: "Ipsum" },
            { emoji: "🔋", label: "Lorem ipsum" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: "/pages/post",
    },
    {
        id: 4,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Conteúdo da postagem 4",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🛠️", label: "Ipsum" },
            { emoji: "🔋", label: "Lorem ipsum" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: "/pages/post",
    },
    {
        id: 5,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Conteúdo da postagem 5",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🛠️", label: "Ipsum" },
            { emoji: "🔋", label: "Lorem ipsum" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: "/pages/post",
    },
    {
        id: 6,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Conteúdo da postagem 6",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🛠️", label: "Ipsum" },
            { emoji: "🔋", label: "Lorem ipsum" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: "/pages/post",
    },
];

export default data;
