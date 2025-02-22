declare interface Project {
    title: string,
    description: string,
    image: string,
    github: string,
}

declare interface Tech {
    name: string,
    svg: string,
    color: string
}

declare interface Review {
    stars: number,
    comment: string
}

declare interface Detail {
    picture: string,
    description: string
}

declare interface ProjectData extends Project {
    techStack: Tech[],
    details: Detail[],
    reviews: Review[]
}