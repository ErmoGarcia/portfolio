<template>
    <nav class="z-10 absolute top-0 left-0 right-0 text-white">
        <div class="block m-x-auto max-w-[1300px]">
            <button class="m-6 peer md:hidden flex items-center px-3 py-2 border rounded text-stone-200 border-stone-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
            <div class="absolute top-0 left-0 right-0 translate-y-[-100%] peer-focus-within:translate-y-0 md:translate-y-0 transition-transform md:relative md:flex md:items-center md:justify-between md:bg-transparent">
                <ul class="p-6 bg-black grid justify-center shadow md:shadow-none md:bg-transparent md:flex md:space-x-4">
                    <li v-for="nav in navigation" class="text-center text-xl md:text-base my-4 md:mt-0 transition-colors p-1 hover:bg-white hover:text-black"><nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link></li>
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