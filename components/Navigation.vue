<template>
    <nav class="navbar">
        <div class="navbar__wrapper">
            <button class="navbar__hamburger">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
            <div class="navbar__menu">
                <ul>
                    <li v-for="nav in navigation" class="text-center text-xl md:text-base my-4 md:mt-0 transition-colors p-1 hover:bg-white hover:text-black">
                        <nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const navigation = ref([
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
])
</script>

<style scoped>
.navbar {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: white;
}

.navbar__wrapper {
    padding: 1rem;
    margin: auto;
    max-width: 1300px;
}

.navbar__hamburger {
    padding: 2px 3px;

    display: flex;
    align-items: center;

    border: none;
    color: white;
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
    padding: 1rem;
    background-color: black;

    display: grid;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar__menu ul li {
    margin: 2rem 0;
    text-align: center;
    font-size: 1.5rem;
}

.navbar__menu ul li a {
    padding: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 1s ease-in-out;
}

.navbar__menu ul li a:hover {
    color: black;
    background-color: white;
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
</style>