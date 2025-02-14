<template>
    <section id="about" class="about" :class="{ 'about--visible': isVisible }">
        <div>
            <h1 class="about__title">About Me</h1>
            <ul class="about__skills">
                <li>
                    <img src="~/assets/icons/python.svg" alt="Python">
                    <p>Python</p>
                </li>
                <li>
                    <img src="~/assets/icons/javascript.svg" alt="JavaScript">
                    <p>JavaScript</p>
                </li>
            </ul>
        </div>
        <div class="about__description">
            <p>With a background as a computer science researcher, I combine creativity and technical expertise to build user-friendly, innovative solutions.</p>
            <p>
                I'm passionate about learning new things and thrive on tackling challenges and exploring fresh ideas.
                <span class="about__keyword">Let's bring your next project to life!</span>
            </p>
            <nuxt-link to="#contact"><button>-> Contact</button></nuxt-link>
        </div>
    </section>
</template>

<script setup lang="ts">
const { isVisible } = useElementVisibility('.about');
</script>

<style scoped>
.about {
    margin-block: 5rem;
    margin-inline: auto;
    padding: 2rem;

    position: relative;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    place-content: center;
}

.about__title {
    font-size: 2rem;
    font-family: var(--ff-secondary);
    font-weight: 700;
    margin-bottom: 2rem;
}

.about__skills {
    display: grid;
    grid-template-columns: repeat(auto-fill, 110px);
    gap: 5rem;
}

.about__skills li {
    display: grid;
    place-items: center;
    gap: 1rem;
}

.about__skills li p {
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 700;
    color: var(--clr-primary);
}

.about__description {
    max-width: 70ch;
    font-size: 1.2rem;
    line-height: 2rem;
    color: var(--clr-primary-light);
}

.about__description p:not(:first-child) {
    margin-block: 2rem;
}

.about__description button {
    padding-block: 1rem;
    background: none;
    border: none;
    cursor: pointer;

    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 700;
    color: var(--clr-primary);
}

.about__description button:hover {
    background-color: var(--clr-primary);
    color: var(--clr-text);
}

.about__keyword {
    font-weight: bold;
    color: var(--clr-text);
}

@media (prefers-reduced-motion: no-preference) {
    .about {
        opacity: 0.01;
        will-change: opacity;
    }

    .about--visible {
        animation: fadeIn 3s ease 0.5s forwards;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
}
</style>