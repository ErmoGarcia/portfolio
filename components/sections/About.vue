<template>
    <section id="about" class="about" :class="{ 'about--visible': isVisible }">
        <div class="about__description">
            <h1 class="about__title">About Me</h1>
            <p>
                I'm Guillermo, a full-stack developer and software engineer skilled in <span class="about__keyword">Python</span> and <span class="about__keyword">JavaScript</span>.
                With a background as a computer science researcher, I combine creativity and technical expertise to build user-friendly, innovative solutions.
            </p>
            <p>
                I'm passionate about <span class="about__keyword">learning new things</span> and thrive on tackling challenges and exploring fresh ideas.
                Let's bring your next project to life!
            </p>
        </div>
        <div class="about__blob">
            <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                <g transform="translate(441.11882933163 297.6690786191646)">
                    <path id="blob1" fill="#d4bff9" d="M187.4 -172.4C233.4 -141.4 254.7 -70.7 249.6 -5.1C244.6 60.6 213.2 121.2 167.2 157.7C121.2 194.2 60.6 206.6 12.6 194C-35.4 181.4 -70.7 143.7 -117.5 107.2C-164.4 70.7 -222.7 35.4 -231.4 -8.7C-240.1 -52.8 -199.3 -105.6 -152.4 -136.6C-105.6 -167.6 -52.8 -176.8 9 -185.8C70.7 -194.7 141.4 -203.4 187.4 -172.4"></path>
                </g>
                <g transform="translate(438.7172206061122 286.3417283749279)" style="visibility: hidden;">
                    <path id="blob2" d="M109.7 -113.9C148.7 -70.7 191.4 -35.4 204.2 12.8C217 61 200.1 122.1 161.1 172.1C122.1 222.1 61 261 12.1 248.9C-36.8 236.8 -73.5 173.5 -106.4 123.5C-139.2 73.5 -168.1 36.8 -180 -11.9C-191.9 -60.6 -186.8 -121.2 -154 -164.3C-121.2 -207.5 -60.6 -233.2 -12.6 -220.6C35.4 -208 70.7 -157 109.7 -113.9"></path>
                </g>
            </svg>
        </div>

    </section>
</template>

<script setup lang="ts">
import KUTE from 'kute.js';

const { isVisible } = useElementVisibility('.about');

onMounted(() => {
    const tween = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { duration: 5000, repeat: 999, yoyo: true }
    );
    tween.start();
})
</script>

<style scoped>
.about {
    padding: 2rem;
    background-color: #f9f9f9;

    position: relative;
    overflow: hidden;

    margin-top: 2rem;
    min-height: 100vh;
    text-align: center;
    
    display: grid;
    gap: 1rem;
    place-content: center;
}

.about__description {
    padding: 1rem;
    max-width: 70ch;
    font-size: 1.5rem;

    background-color: white;
    mix-blend-mode: multiply;
    z-index: 2;
}

.about__title {
    font-size: 2rem;
    margin-bottom: 2rem;
}

.about__description p {
    margin-bottom: 1rem;
}

.about__keyword {
    position: relative;
    font-weight: bold;
    color: aqua;
    mix-blend-mode: difference;
}

.about__blob {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: grid;
    place-content: center;

    z-index: 1;
}

.about__blob svg {
    width: 100%;
    height: 100%;
    min-width: 800px;
}

@media (prefers-reduced-motion: no-preference) {
    .about--visible {
        animation: 3s ease 0.5s both fadeIn;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
    }
}
</style>