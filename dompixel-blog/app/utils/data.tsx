import { StaticImageData } from 'next/image';

import { PAGES_PATH, POSTS_PATH } from '@routers/constants';

export interface DataPost {
    id: number;
    date?: string;
    image?: string | StaticImageData;
    title: string; 
    author?: string;
    content?: string;
    shortDescription?: string;
    tagContent?: { emoji: string; label: string }[];
    url?: string;
}

const data: DataPost[] = [
    {
        id: 1,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "Lorem ipsum dolor sit amet 1",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus lacus, dignissim et varius ut, auctor ac justo. Curabitur luctus porttitor magna non ultrices. Mauris venenatis accumsan quam, sed ultrices odio molestie vitae. Aenean hendrerit sagittis maximus. Ut dapibus, odio nec faucibus condimentum, velit enim consectetur arcu, ut bibendum lacus augue sit amet sem. Morbi id consequat lectus, at vulputate urna. Phasellus eleifend, dolor id congue consectetur, elit lectus consequat augue, id malesuada risus ligula in justo. Integer non gravida massa. In euismod magna at dapibus tempus. Nam sodales luctus libero at interdum. Cras vel mauris vitae risus pellentesque euismod. Sed lacinia quis ex ac venenatis. Maecenas id lobortis massa, sit amet faucibus augue. Nullam sed est in nibh commodo consectetur id eu augue. Aenean dignissim dolor ut ipsum finibus ullamcorper sit amet ac magna. Vivamus tortor erat, cursus in elit nec, aliquam cursus tortor. Integer faucibus faucibus finibus. In non rhoncus eros, in ornare nisl. Fusce id sem quis augue convallis posuere. Nam sagittis magna quis elit vestibulum dictum. Integer rutrum tempus vulputate. Phasellus nibh tellus, iaculis at lectus id, aliquam faucibus quam. Cras tristique sodales libero at elementum. Vestibulum lacus leo, pellentesque eget quam vel, facilisis tristique libero. Mauris et mollis sem. Etiam efficitur at risus in pretium. Etiam sit amet luctus risus. Pellentesque eu fringilla elit. Nunc condimentum dignissim urna in semper. Sed scelerisque erat non libero tincidunt, malesuada venenatis ante convallis. Praesent sed turpis molestie, viverra nisl vel, convallis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
        ],
        url: PAGES_PATH + POSTS_PATH,
    },
    {
        id: 2,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "Lorem ipsum dolor sit amet",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus lacus, dignissim et varius ut, auctor ac justo. Curabitur luctus porttitor magna non ultrices. Mauris venenatis accumsan quam, sed ultrices odio molestie vitae. Aenean hendrerit sagittis maximus. Ut dapibus, odio nec faucibus condimentum, velit enim consectetur arcu, ut bibendum lacus augue sit amet sem. Morbi id consequat lectus, at vulputate urna. Phasellus eleifend, dolor id congue consectetur, elit lectus consequat augue, id malesuada risus ligula in justo. Integer non gravida massa. In euismod magna at dapibus tempus. Nam sodales luctus libero at interdum. Cras vel mauris vitae risus pellentesque euismod. Sed lacinia quis ex ac venenatis. Maecenas id lobortis massa, sit amet faucibus augue. Nullam sed est in nibh commodo consectetur id eu augue. Aenean dignissim dolor ut ipsum finibus ullamcorper sit amet ac magna. Vivamus tortor erat, cursus in elit nec, aliquam cursus tortor. Integer faucibus faucibus finibus. In non rhoncus eros, in ornare nisl. Fusce id sem quis augue convallis posuere. Nam sagittis magna quis elit vestibulum dictum. Integer rutrum tempus vulputate. Phasellus nibh tellus, iaculis at lectus id, aliquam faucibus quam. Cras tristique sodales libero at elementum. Vestibulum lacus leo, pellentesque eget quam vel, facilisis tristique libero. Mauris et mollis sem. Etiam efficitur at risus in pretium. Etiam sit amet luctus risus. Pellentesque eu fringilla elit. Nunc condimentum dignissim urna in semper. Sed scelerisque erat non libero tincidunt, malesuada venenatis ante convallis. Praesent sed turpis molestie, viverra nisl vel, convallis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        tagContent: [
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: PAGES_PATH + POSTS_PATH,
    },
    {
        id: 3,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "Consectetur adipiscing elit",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus lacus, dignissim et varius ut, auctor ac justo. Curabitur luctus porttitor magna non ultrices. Mauris venenatis accumsan quam, sed ultrices odio molestie vitae. Aenean hendrerit sagittis maximus. Ut dapibus, odio nec faucibus condimentum, velit enim consectetur arcu, ut bibendum lacus augue sit amet sem. Morbi id consequat lectus, at vulputate urna. Phasellus eleifend, dolor id congue consectetur, elit lectus consequat augue, id malesuada risus ligula in justo. Integer non gravida massa. In euismod magna at dapibus tempus. Nam sodales luctus libero at interdum. Cras vel mauris vitae risus pellentesque euismod. Sed lacinia quis ex ac venenatis. Maecenas id lobortis massa, sit amet faucibus augue. Nullam sed est in nibh commodo consectetur id eu augue. Aenean dignissim dolor ut ipsum finibus ullamcorper sit amet ac magna. Vivamus tortor erat, cursus in elit nec, aliquam cursus tortor. Integer faucibus faucibus finibus. In non rhoncus eros, in ornare nisl. Fusce id sem quis augue convallis posuere. Nam sagittis magna quis elit vestibulum dictum. Integer rutrum tempus vulputate. Phasellus nibh tellus, iaculis at lectus id, aliquam faucibus quam. Cras tristique sodales libero at elementum. Vestibulum lacus leo, pellentesque eget quam vel, facilisis tristique libero. Mauris et mollis sem. Etiam efficitur at risus in pretium. Etiam sit amet luctus risus. Pellentesque eu fringilla elit. Nunc condimentum dignissim urna in semper. Sed scelerisque erat non libero tincidunt, malesuada venenatis ante convallis. Praesent sed turpis molestie, viverra nisl vel, convallis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🔋", label: "Lorem ipsum" }
        ],
        url: PAGES_PATH + POSTS_PATH,
    },
    {
        id: 4,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "Lorem Lorem Lorem",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus lacus, dignissim et varius ut, auctor ac justo. Curabitur luctus porttitor magna non ultrices. Mauris venenatis accumsan quam, sed ultrices odio molestie vitae. Aenean hendrerit sagittis maximus. Ut dapibus, odio nec faucibus condimentum, velit enim consectetur arcu, ut bibendum lacus augue sit amet sem. Morbi id consequat lectus, at vulputate urna. Phasellus eleifend, dolor id congue consectetur, elit lectus consequat augue, id malesuada risus ligula in justo. Integer non gravida massa. In euismod magna at dapibus tempus. Nam sodales luctus libero at interdum. Cras vel mauris vitae risus pellentesque euismod. Sed lacinia quis ex ac venenatis. Maecenas id lobortis massa, sit amet faucibus augue. Nullam sed est in nibh commodo consectetur id eu augue. Aenean dignissim dolor ut ipsum finibus ullamcorper sit amet ac magna. Vivamus tortor erat, cursus in elit nec, aliquam cursus tortor. Integer faucibus faucibus finibus. In non rhoncus eros, in ornare nisl. Fusce id sem quis augue convallis posuere. Nam sagittis magna quis elit vestibulum dictum. Integer rutrum tempus vulputate. Phasellus nibh tellus, iaculis at lectus id, aliquam faucibus quam. Cras tristique sodales libero at elementum. Vestibulum lacus leo, pellentesque eget quam vel, facilisis tristique libero. Mauris et mollis sem. Etiam efficitur at risus in pretium. Etiam sit amet luctus risus. Pellentesque eu fringilla elit. Nunc condimentum dignissim urna in semper. Sed scelerisque erat non libero tincidunt, malesuada venenatis ante convallis. Praesent sed turpis molestie, viverra nisl vel, convallis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🛠️", label: "Ipsum" },
        ],
        url: PAGES_PATH + POSTS_PATH,
    },
    {
        id: 5,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "Ipsum Ipsum Ipsum",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus lacus, dignissim et varius ut, auctor ac justo. Curabitur luctus porttitor magna non ultrices. Mauris venenatis accumsan quam, sed ultrices odio molestie vitae. Aenean hendrerit sagittis maximus. Ut dapibus, odio nec faucibus condimentum, velit enim consectetur arcu, ut bibendum lacus augue sit amet sem. Morbi id consequat lectus, at vulputate urna. Phasellus eleifend, dolor id congue consectetur, elit lectus consequat augue, id malesuada risus ligula in justo. Integer non gravida massa. In euismod magna at dapibus tempus. Nam sodales luctus libero at interdum. Cras vel mauris vitae risus pellentesque euismod. Sed lacinia quis ex ac venenatis. Maecenas id lobortis massa, sit amet faucibus augue. Nullam sed est in nibh commodo consectetur id eu augue. Aenean dignissim dolor ut ipsum finibus ullamcorper sit amet ac magna. Vivamus tortor erat, cursus in elit nec, aliquam cursus tortor. Integer faucibus faucibus finibus. In non rhoncus eros, in ornare nisl. Fusce id sem quis augue convallis posuere. Nam sagittis magna quis elit vestibulum dictum. Integer rutrum tempus vulputate. Phasellus nibh tellus, iaculis at lectus id, aliquam faucibus quam. Cras tristique sodales libero at elementum. Vestibulum lacus leo, pellentesque eget quam vel, facilisis tristique libero. Mauris et mollis sem. Etiam efficitur at risus in pretium. Etiam sit amet luctus risus. Pellentesque eu fringilla elit. Nunc condimentum dignissim urna in semper. Sed scelerisque erat non libero tincidunt, malesuada venenatis ante convallis. Praesent sed turpis molestie, viverra nisl vel, convallis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        tagContent: [
            { emoji: "🔋", label: "Lorem ipsum" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: PAGES_PATH + POSTS_PATH,
    },
    {
        id: 6,
        image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
        date: "2024-10-05",
        title: "Lorem ipsum dolor sit amet amet",
        author: "Author",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus lacus, dignissim et varius ut, auctor ac justo. Curabitur luctus porttitor magna non ultrices. Mauris venenatis accumsan quam, sed ultrices odio molestie vitae. Aenean hendrerit sagittis maximus. Ut dapibus, odio nec faucibus condimentum, velit enim consectetur arcu, ut bibendum lacus augue sit amet sem. Morbi id consequat lectus, at vulputate urna. Phasellus eleifend, dolor id congue consectetur, elit lectus consequat augue, id malesuada risus ligula in justo. Integer non gravida massa. In euismod magna at dapibus tempus. Nam sodales luctus libero at interdum. Cras vel mauris vitae risus pellentesque euismod. Sed lacinia quis ex ac venenatis. Maecenas id lobortis massa, sit amet faucibus augue. Nullam sed est in nibh commodo consectetur id eu augue. Aenean dignissim dolor ut ipsum finibus ullamcorper sit amet ac magna. Vivamus tortor erat, cursus in elit nec, aliquam cursus tortor. Integer faucibus faucibus finibus. In non rhoncus eros, in ornare nisl. Fusce id sem quis augue convallis posuere. Nam sagittis magna quis elit vestibulum dictum. Integer rutrum tempus vulputate. Phasellus nibh tellus, iaculis at lectus id, aliquam faucibus quam. Cras tristique sodales libero at elementum. Vestibulum lacus leo, pellentesque eget quam vel, facilisis tristique libero. Mauris et mollis sem. Etiam efficitur at risus in pretium. Etiam sit amet luctus risus. Pellentesque eu fringilla elit. Nunc condimentum dignissim urna in semper. Sed scelerisque erat non libero tincidunt, malesuada venenatis ante convallis. Praesent sed turpis molestie, viverra nisl vel, convallis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        tagContent: [
            { emoji: "⚙️", label: "Lorem" },
            { emoji: "🌐", label: "Ipsum Lorem" }
        ],
        url: PAGES_PATH + POSTS_PATH,
    },
];

export default data;
