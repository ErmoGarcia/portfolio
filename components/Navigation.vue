<template>
    <nav class="navbar navbar--animated">
        <div class="navbar__wrapper">
            <button class="navbar__hamburger">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
            <div class="navbar__menu">
                <ul>
                    <li v-for="nav in navigation" :key="nav.name">
                        <nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar__links">
            <SocialLinks />
        </div>
    </nav>
</template>

<script setup lang="ts">
const props = defineProps({
    navigation: {
        type: Array as PropType<{ name: string, path: string }[]>,
        required: true
    }
})

const navigation = props.navigation
</script>

<style scoped>
.navbar {
    max-width: var(--content-width);
    margin: auto;

    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-around;
}

.navbar__wrapper {
    flex-grow: 1;
    padding: 1rem;
    margin: auto;
    max-width: 1300px;
}

.navbar__hamburger {
    padding: 2px 3px;

    display: flex;
    align-items: center;

    border: none;
    color: var(--clr-text);
    background-color: transparent;
}

.navbar__hamburger svg {
    fill: currentColor;
    height: 1.2rem;
    width: 1.2rem;
}

.navbar__hamburger:focus-within + .navbar__menu {
    transform: translateY(0);
}

.navbar__menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    transition: transform 0.3s;
}

.navbar__menu ul {
    padding: 2rem;
    background-color: var(--clr-bg);

    display: grid;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    gap: 2rem;
}

.navbar__menu ul li {
    text-align: center;
    font-size: 1.2rem;
}

.navbar__menu ul li a {
    padding: 0.5rem;
    color: var(--clr-text);
    text-decoration: none;
    transition: color 1s ease-in-out;
}

.navbar__menu ul li a:hover {
    color: var(--clr-text-dark);
    background-color: var(--clr-primary);
}

.navbar__links {
    flex-grow: 1;
    padding: 2rem;
    place-content: center;
}

@media screen and (min-width: 768px) {
    .navbar__hamburger {
        visibility: hidden;
        position: absolute;
    }

    .navbar__menu {
        position: relative;
        transform: translateY(0);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar__menu ul {
        box-shadow: none;
        background-color: transparent;
        display: flex;
        gap: 1rem;
    }

    .navbar__menu ul li {
        margin: 0;
        font-size: 1rem;
    }
}

@media (prefers-reduced-motion: no-preference) {
    .navbar--animated {
        will-change: transform;
        transform: translateY(-100%);
        animation: 1s ease 4s forwards slideIn;
    }

    @keyframes slideIn {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
}
</style>