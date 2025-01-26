<template>
    <section id="projects" class="projects">
        <h1>Projects</h1>
        <ul>
            <li 
                v-for="project in projects"
                :key="project.id"
                :class="{ 'projects__card--animated': isVisible }"
            >
                <div class="projects__card">
                    <div class="projects__image">
                        <NuxtImg
                            :src="project.image"
                            :alt="`${project.title} image`"
                            width="300"
                            height="200"
                            fit="cover"
                        />
                    </div>
                    <div class="projects__content">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <NuxtLink :href="project.link" target="_blank">
                            <button>View Project</button>
                        </NuxtLink>
                    </div>
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
        image: `${imgPath}/chatstats.png`,
        description: 'This is a description for project one.',
        link: 'https://chatstats.devve.space'
    },
    {
        id: 2,
        title: 'Mus Online',
        image: `${imgPath}/mus.png`,
        description: 'This is a description for project two.',
        link: 'https://github.com/ErmoGarcia/isa681project'
    },
    {
        id: 3,
        title: 'Euri Sudaderas',
        image: `${imgPath}/euri.png`,
        description: 'This is a description for project three.',
        link: 'https://github.com/Eurielec/euri_sudaderas'
    }
]
</script>

<style scoped>
.projects {
    padding: 2rem;
    min-height: 100svh;
    overflow: hidden;
}

.projects ul {
    margin-top: 20px;
    padding: 20px;
    display: grid;
    gap: 4rem;
    place-items: center;
}

.projects ul li {
    will-change: opacity, transform;
}

.projects h1 {
    font-size: 2rem;
    text-align: center;
}

.projects__card {
    min-width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    display: grid;
    align-items: center;
}

.projects__card:hover {
    transform: translateY(-10px);
}

.projects__image {
    overflow: hidden;
}

.projects__image img {
    width: 100%;
    transition: transform 0.3s;
}

.projects__card:hover .projects__image img {
    transform: scale(1.1);
}

.projects__content {
    padding: 1rem;
    display: grid;
    gap: 1.5rem;
}

.projects__content h3 {
    font-size: 1.2rem;
    font-weight: 600;
}

.projects__content p {
    margin: 0;
}

.projects__content button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: var(--primary-color);
    color: var(--text-color-light);
    cursor: pointer;
    width: 50%;
}

.projects__content button:hover {
    background-color: var(--primary-color-dark);
}

@media screen and (min-width: 768px) {
    .projects__card {
        grid-template-columns: 1fr 1fr;
    }

    .projects li:nth-child(even) .projects__card {
        transform: translateX(-2rem);
    }

    .projects li:nth-child(odd) .projects__card {
        transform: translateX(2rem);
    }
}

@media (prefers-reduced-motion: no-preference) {
    .projects__card--animated {
        opacity: 0.01;
        transform: translateX(-100%);
        animation: 1s ease forwards slideInLeft;
    }

    .projects__card--animated:nth-child(even) {
        transform: translateX(100%);
        animation: 1s ease forwards slideInRight;
    }

    .projects__card--animated:nth-child(1) {
        animation-delay: 0.5s;
    }

    .projects__card--animated:nth-child(2) {
        animation-delay: 1s;
    }

    .projects__card--animated:nth-child(3) {
        animation-delay: 1.5s;
    }

    .projects__card--animated:nth-child(4) {
        animation-delay: 2s;
    }

    .projects__card--animated:nth-child(5) {
        animation-delay: 2.5s;
    }

    .projects__card--animated:nth-child(6) {
        animation-delay: 3s;
    }

    @keyframes slideInLeft {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
}
</style>