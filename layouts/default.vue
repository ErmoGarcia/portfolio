<template>
    <div class="body">
        <Navigation :navigation="navigation" />
        <slot />
        <Footer :navigation="navigation" />
    </div>
</template>

<script setup lang="ts">
const navigation = ref([
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' }
])
</script>

<style scoped>
.body {
    background-color: var(--clr-bg);
    color: var(--clr-text);
}
</style>