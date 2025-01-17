<template>
    <section class="about">
        <h1 class="about__title">About Me</h1>
        <p class="about__description">
            Hello! I'm Guillermo García Grao, a passionate <span class="about__keyword">Software Engineer</span> and <span class="about__keyword">Full-Stack Developer</span> with experience in <span class="about__keyword">Javascript</span> and <span class="about__keyword">Python</span>.
            I love creating innovative solutions and working on exciting projects.
        </p>
    </section>
</template>

<script>
export default {
    name: 'AboutSection',
};
</script>

<style scoped>
.about {
    padding: 2rem;
    text-align: center;
}

.about__title {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.about__description {
    font-size: 1.2rem;
}

.about__keyword {
    font-weight: bold;
    color: var(--primary-color);
}
</style>