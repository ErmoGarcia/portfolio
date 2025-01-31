<template>
    <header>
      <div class="hero">
        <HeaderAvatar />
        <hgroup class="hero__heading">
            <h1 class="hero__title"><span class="hero__title--animated">Hi,</span><span class="hero__title--animated-after"> I'm Guillermo!</span></h1>
            <p class="hero__subtitle hero__subtitle--animated">A passionate <span class="hero__keyword">~/Full-Stack Developer</span><br> and <span class="hero__keyword">~/Software Engineer</span></p>
        </hgroup>
      </div>
  </header>
</template>

<script setup lang="ts">
const loading = ref(true);

const { scrollY } = useScroll();
const sensitivity = 1000;
</script>

<style scoped>
.hero {
  height: 100svh;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;
  display: grid;
  place-items: center;
}

.hero__heading {
  padding: 1rem;
  max-width: 70ch;
}

.hero__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.hero__subtitle {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
}

.hero__keyword {
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--clr-primary);
  white-space: nowrap;
}

@media (prefers-reduced-motion: no-preference) {
  .hero__title--animated {
    will-change: opacity, transform;
    opacity: 0.01;
    transform: translateY(-1rem);
    animation: 1s ease 1s forwards fadeIn;
  }

  .hero__title--animated-after {
    will-change: opacity, transform;
    opacity: 0.01;
    transform: translateY(-1rem);
    animation: 1s ease 2s forwards fadeIn;
  }

  .hero__subtitle--animated {
    will-change: opacity, transform;
    opacity: 0.01;
    transform: translateY(-1rem);
    animation: 1s ease 3s forwards fadeIn;
  }

  @keyframes fadeIn {
    from {
      opacity: 0.01;
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
      opacity: 0.01;
    }
  }
}
</style>