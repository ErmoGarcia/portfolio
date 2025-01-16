<template>
    <header>
        <div class="hero">
            <div class="hero__background"></div>
            <hgroup class="hero__heading">
                <h1 class="hero__title">Hi, I'm Guillermo</h1>
                <p class="hero__subtitle">A passionate <span class="hero__keyword">Full-Stack Developer</span> and <span class="hero__keyword">Software Engineer</span>.</p>
            </hgroup>
        </div>
    </header>
</template>

<script setup lang="ts">
const { scrollY } = useScroll();

watch(scrollY, (value) => {
    const sensitivity = 500;
    const scale = 1 + value / sensitivity;
    const imageElement = document.querySelector('.hero__background') as HTMLElement;
    if (imageElement) {
      imageElement.style.transform = `scale(${scale})`;
    }
})
</script>

<style scoped>
.hero {
    height: 100vh;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 100px 0;
    display: grid;
    place-items: center;
}

.hero__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.6) 30%), url('/img/banner.jpg');
    background-blend-mode: multiply;
    background-attachment: fixed;
    background-size: cover;
    background-position: right 25% bottom 25%;
    filter: grayscale(90%) blur(0);
    animation: blurEffect 3s ease-in-out forwards;
}

.hero__heading {
    max-width: 700ch;
    font-family: Cincel, sans-serif;
    transform: translate(0, -500%);
    animation: showHeading 3s ease-in-out forwards;
}

.hero__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.hero__subtitle {
    font-size: 1.5rem;
    font-weight: 300;
}

.hero__keyword {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    color: #FFD700;
}

@media screen and (min-width: 768px) {
    .hero__background {
        background-image: linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 60%), url('/img/banner.jpg');
        background-blend-mode: multiply;
        background-position: center;
        transform: scale(1);
        transition: transform 0.1s ease-out;
    }
}

@keyframes blurEffect {
  0% {
    filter: grayscale(90%) blur(0);
  }
  50% {
    filter: grayscale(90%) blur(0);
  }
  100% {
    filter: grayscale(90%) blur(10px);
  }
}

@keyframes showHeading {
  0% {
    transform: translate(0, -500%);
  }
  50% {
    transform: translate(0, -500%);
  }
  100% {
    transform: translate(0);
  }
}
</style>