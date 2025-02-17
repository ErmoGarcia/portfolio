<template>
    <header>
        <div class="hero">
            <NuxtImg
                class="hero__image"
                :src="props.project.image"
                :alt="`${props.project.title} image`"
                fit="contain"
            />
            <div class="hero__content">
                <h1>_{{ props.project.title }}</h1>
                <ul class="hero__tech">
                    <li v-for="tech in props.techStack" :key="tech.name">{{ tech.name }}</li>
                </ul>
                <ul class="hero__icons">
                    <li v-for="tech in props.techStack" :key="tech.name">
                        <svg role="img" viewBox="0 0 24 24" height="50" width="100" xmlns="http://www.w3.org/2000/svg">
                            <title>{{ tech.name }}</title>
                            <path :fill="tech.color" :d="tech.svg"/>
                        </svg> 
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    const props = defineProps<{
        project: Project,
        techStack: Tech[]
    }>()
</script>

<style scoped>
.hero {
    max-width: var(--content-width);
    padding: 2rem;
    margin: 5rem auto;

    display: grid;
    grid-template-rows: repeat(4, 1fr);
}

.hero__content {
    grid-column: 1;
    grid-row: 1 / 4;
}

.hero__content > * {
    margin-bottom: 2rem;
}

.hero__image {
    grid-column: 1;
    grid-row: 2 / 5;

    width: 100%;
}

.hero__content h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--clr-primary);
}

.hero__tech {
    display: flex;
    gap: 0.5rem;
}

.hero__icons {
    display: flex;
}

.hero__tech li:first-child::before {
    content: '/';
}

.hero__tech li:not(:last-child)::after {
    content: ',';
}

@media screen and (min-width: 768px) {
    .hero {
        grid-template-columns: repeat(4, 1fr);
    }

    .hero__content {
        grid-column: 1 / 4;
        grid-row: 1;
        place-content: center;
    }

    .hero__image {
        grid-column: 2 / 5;
        grid-row: 1;
    }
}
</style>