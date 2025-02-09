<template>
    <hr class="separator">
</template>

<style scoped>
.separator {
    --separator-color: var(--clr-primary);

    margin-top: 2rem;
    border: none;
    height: 2px;
    background: var(--separator-color);
    background: repeating-linear-gradient(90deg,var(--separator-color),var(--separator-color) 50px,transparent 50px,transparent 100px);

}
</style>