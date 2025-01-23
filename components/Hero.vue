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
              @load="() => loading = false"
              :style="{ transform: `scale(${scale})` }"
            ></NuxtImg>
          </div>
          <div class="hero__cover" :class="{ 'hero__cover--animated': !loading }"></div>
          <div :style="{ transform: `translate(0, ${scrollY}px)` }">
              <hgroup class="hero__heading">
                  <h1 class="hero__title"><span class="hero__title--animated">Hi,</span><span class="hero__title--animated-after"> I'm Guillermo!</span></h1>
                  <p class="hero__subtitle hero__subtitle--animated">A passionate <span class="hero__keyword">Full-Stack Developer</span> and <span class="hero__keyword">Software Engineer</span></p>
              </hgroup>
          </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const loading = ref(true);

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
  filter: grayscale(90%) blur(2px);
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
  color: var(--primary-color-light);
  white-space: nowrap;
}

.hero__cover {
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

@media screen and (min-width: 768px) {
  .hero__banner::after {
    background: linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 60%);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .hero__cover--animated {
    opacity: 1;
    animation: 1s ease 4s forwards fadeOut;
  }

  .hero__title--animated {
    opacity: 0;
    transform: translateY(-1rem);
    animation: 1s ease 1s forwards fadeIn;
  }

  .hero__title--animated-after {
    opacity: 0;
    transform: translateY(-1rem);
    animation: 1s ease 2s forwards fadeIn;
  }

  .hero__subtitle--animated {
    opacity: 0;
    transform: translateY(-1rem);
    animation: 1s ease 3s forwards fadeIn;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}
</style>