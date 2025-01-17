<template>
    <header>
        <div class="hero">
          <div class="hero__banner">
            <NuxtImg
              src="/img/banner.jpg"
              alt="Banner"
              sizes="100vw sm:50vw md:1300px xl:1800px"
              format="webp"
              preload
              loading="eager"
              @load="() => loadingImg = false"
              :style="{ transform: `scale(${scale})` }"
            ></NuxtImg>
          </div>
          <div :style="{ transform: `translate(0, ${scrollY}px)` }">
              <hgroup class="hero__heading">
                  <h1 class="hero__title">Hi, I'm Guillermo</h1>
                  <p class="hero__subtitle">A passionate <span class="hero__keyword">Full-Stack Developer</span> and <span class="hero__keyword">Software Engineer</span></p>
              </hgroup>
          </div>
        </div>
        <div class="hero__loader" v-if="loading">
          <div>
            <h1>Wellcome!</h1>
            <Spinner />
          </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const loadingImg = ref(true);
const loadingTimer = ref(true);
setTimeout(() => {
  loadingTimer.value = false;
}, 2500);
const loading = computed(() => loadingImg.value || loadingTimer.value);

const { scrollY } = useScroll();
const sensitivity = 500;
const scale = computed(() => 1 + scrollY.value / sensitivity);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Playwrite+IN:wght@100..400&display=swap'); /* TODO: Add your own font link */

.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;
  display: grid;
  place-items: center;
}

.hero__banner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: grayscale(90%) blur(0);
  animation: blurEffect 7s ease-in-out forwards;
}

.hero__banner img {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  object-position: 75% 25%;
}

.hero__banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.6) 30%);
}

.hero__heading {
  padding: 1rem;
  max-width: 700ch;
  font-family: Cincel, sans-serif;
  transform: translate(0, -100vh);
  animation: showHeading 7s ease-in-out forwards;
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
  font-family: 'Lobster', cursive;
  font-size: 2rem;
  color: var(--primary-color);
  white-space: nowrap;
}

.hero__loader {
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  
  display: grid;
  place-items: center;
  text-align: center;
}

.hero__loader h1 {
  color: white;
  font-family: 'Lobster', cursive;
  font-size: 3rem;
}

@media screen and (min-width: 768px) {
  .hero__banner {
    transform: scale(1);
    transition: transform 0.1s ease-out;
  }
  .hero__banner::after {
    background: linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 60%);
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
    opacity: 0;
    transform: translate(0, -500%);
  }
  50% {
    opacity: 0;
    transform: translate(0, -500%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>