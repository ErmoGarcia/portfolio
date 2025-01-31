<template>
    <div class="body">
        <Navigation />
        <slot />
        <Footer />
    </div>
</template>

<style scoped>
.body {
    background-color: var(--clr-bg);
    color: var(--clr-text);
}
</style>