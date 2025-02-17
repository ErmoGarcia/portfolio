<template>
    <header>
      <div class="hero">
        <HeaderAvatar />
        <hgroup class="hero__heading">
            <h1 class="hero__title"><span class="hero__title--animated">Hi,</span><span class="hero__title--animated-after"> I'm Guillermo!</span></h1>
            <p class="hero__subtitle hero__subtitle--animated">
              A passionate 
              <span class="hero__keyword">
                ~/<span class="hero__keyword--character">F</span>
                <span class="hero__keyword--character">u</span>
                <span class="hero__keyword--character">l</span>
                <span class="hero__keyword--character">l</span>
                <span class="hero__keyword--character">-</span>
                <span class="hero__keyword--character">S</span>
                <span class="hero__keyword--character">t</span>
                <span class="hero__keyword--character">a</span>
                <span class="hero__keyword--character">c</span>
                <span class="hero__keyword--character">k</span>
                <span class="hero__keyword--character">&nbsp;</span>
                <span class="hero__keyword--character">D</span>
                <span class="hero__keyword--character">e</span>
                <span class="hero__keyword--character">v</span>
                <span class="hero__keyword--character">e</span>
                <span class="hero__keyword--character">l</span>
                <span class="hero__keyword--character">o</span>
                <span class="hero__keyword--character">p</span>
                <span class="hero__keyword--character">e</span>
                <span class="hero__keyword--character">r</span>
                <span class="hero__keyword--underscore">_</span>
              </span>
              <br>and 
              <span class="hero__keyword">
                ~/<span class="hero__keyword--character">S</span>
                <span class="hero__keyword--character">o</span>
                <span class="hero__keyword--character">f</span>
                <span class="hero__keyword--character">t</span>
                <span class="hero__keyword--character">w</span>
                <span class="hero__keyword--character">a</span>
                <span class="hero__keyword--character">r</span>
                <span class="hero__keyword--character">e</span>
                <span class="hero__keyword--character">&nbsp;</span>
                <span class="hero__keyword--character">E</span>
                <span class="hero__keyword--character">n</span>
                <span class="hero__keyword--character">g</span>
                <span class="hero__keyword--character">i</span>
                <span class="hero__keyword--character">n</span>
                <span class="hero__keyword--character">e</span>
                <span class="hero__keyword--character">e</span>
                <span class="hero__keyword--character">r</span>
                <span class="hero__keyword--underscore">_</span>
              </span>
            </p>
        </hgroup>
      </div>
  </header>
</template>

<style scoped>
.hero {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

.hero__heading {
  padding: 1rem;
  max-width: 70ch;
}

.hero__title {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.hero__subtitle {
  margin-top: 2rem;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.6rem;
}

.hero__keyword {
  font-family: var(--ff-secondary);
  font-size: 1.4rem;
  color: var(--clr-primary);
  white-space: nowrap;
}

.hero__keyword--underscore {
  display: inline-block;
  color: var(--clr-primary);
  font-size: 1.4rem;
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

  .hero__keyword--character:nth-child(1) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 4s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(2) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 4.2s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(3) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 4.4s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(4) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 4.6s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(5) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 4.8s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(6) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 5s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(7) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 5.2s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(8) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 5.4s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(9) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 5.6s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(10) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 5.8s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(11) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 6s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(12) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 6.2s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(13) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 6.4s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(14) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 6.6s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(15) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 6.8s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(16) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 7s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(17) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 7.2s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(18) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 7.4s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(19) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 7.6s forwards;
    will-change: opacity;
  }
  .hero__keyword--character:nth-child(20) {
    opacity: 0.01;
    animation: fadeIn 1ms linear 7.8s forwards;
    will-change: opacity;
  }

  .hero__keyword:first-child .hero__keyword--underscore {
    transform: translateX(-20ch);
    animation: writer 4s steps(20) 3.8s forwards, blinker 1s ease 8s infinite;
    will-change: transform opacity;
  }

  .hero__keyword:last-child .hero__keyword--underscore {
    transform: translateX(-17ch);
    animation: writer 3.4s steps(17) 3.8s forwards, blinker 1s ease 8s infinite;
    will-change: transform opacity;
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

  @keyframes blinker {
    50% {
      opacity: 0.01;
    }
  }

  @keyframes writer {
    to {
      transform: translateX(0);
    }
  }
}
</style>