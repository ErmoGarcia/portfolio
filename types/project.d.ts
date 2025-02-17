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

declare interface ProjectData extends Project {
    techStack: Tech[],
    details: {
        picture: string,
        description: string
    }[],
    reviews: Review[]
}