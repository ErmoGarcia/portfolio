<template>
    <footer class="footer">
        <div>
            <!-- Social Media Links -->
            <nuxt-link v-for="link in links"
                :href="link.url"
                target="_blank" 
                rel="noopener noreferrer" 
                class="footer__link">
                {{ link.name }}
            </nuxt-link>
        </div>
        <p class="footer__content" style="margin-top: 10px; font-size: 14px;">
            &copy; 2025 Guillermo García Grao. All Rights Reserved.
        </p>
    </footer>
</template>

<script setup lang="ts">
const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/guillegg/' },
    { name: 'GitHub', url: 'https://github.com/ErmoGarcia' },
    { name: 'Twitter', url: 'https://twitter.com/g_garcia_grao' }
]
</script>

<style scoped>
.footer {
    padding: 1.5rem;
    font-size: 1.2rem;
    text-align: center;
    background-color: black;
    color: white;
}

.footer__link {
    margin: 1rem;
}

.footer__link:hover {
    text-decoration: underline;
}

.footer__content {
    margin-top: 1rem;
    font-size: 1rem;
}
</style>