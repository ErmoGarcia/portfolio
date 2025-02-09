<template>
    <section id="projects" class="projects">
        <h1>Projects</h1>
        <ul>
            <li 
                v-for="project in projects"
                :key="project.id"
                class="projects__card"
                :class="{ 'projects__card--animated': isVisible }"
            >
                <NuxtImg
                    class="projects__image"
                    :src="project.image"
                    :alt="`${project.title} image`"
                    fit="contain"
                />
                <div class="projects__content">
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                    <NuxtLink :href="project.link" target="_blank">
                        <button>View Project</button>
                    </NuxtLink>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
const { isVisible } = useElementVisibility('.projects');
const imgPath = '/img/projects';
const projects = [
    {
        id: 1,
        title: 'Chatstats',
        image: `${imgPath}/stats.jpg`,
        description: 'A tool to visualize chat statistics and relevant data from your Whatsapp and Telegram chats.',
        link: 'https://chatstats.devve.space'
    },
    {
        id: 2,
        title: 'Mus Online',
        image: `${imgPath}/cards.jpg`,
        description: 'Play the classical Spanish card game online in real time.',
        link: 'https://github.com/ErmoGarcia/isa681project'
    },
    {
        id: 3,
        title: 'Euri Sudaderas',
        image: `${imgPath}/hoodies.jpg`,
        description: 'An online store to by merchandising for Eurielec.',
        link: 'https://github.com/Eurielec/euri_sudaderas'
    }
]
</script>

<style scoped>
.projects {
    padding: 2rem;
    margin-block: 3rem;
}

.projects h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
}

.projects__card {
    margin-top: 12rem;
    width: 100%;
    display: grid;
}

.projects__content {
    place-content: center;
    text-align: center;
}

.projects__content h2 {
    font-size: 1.5rem;
    padding: 2rem;
}

.projects__content p {
    font-size: 1rem;
    line-height: 1.4rem;
    padding: 2rem;
}

.projects__content button {
    padding: 1rem 2rem;
    background-color: var(--clr-primary);
    color: var(--clr-text);
    cursor: pointer;
    border-radius: 5px;
}

.projects__image {
    width: 100%;
}

@media screen and (min-width: 768px) {
    .projects__card {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 2rem;
    }


    .projects__card:nth-child(odd) {
        grid-template-areas: "content content image image image";
    }

    .projects__card:nth-child(even) {
        grid-template-areas: "image image image content content";
    }

    .projects__image {
        grid-area: image;
    }

    .projects__content {
        grid-area: content;
    }
}

@media (prefers-reduced-motion: no-preference) {
}
</style>