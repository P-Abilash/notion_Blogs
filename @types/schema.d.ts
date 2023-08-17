export type Category = {
    color: string
    id: string
    name: string
}

export type BlogPost = {
    id: string
    slug: string
    cover: string
    title: string
    category: Category[]
    description: string
    date: string
}