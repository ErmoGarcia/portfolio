<template>
    <footer class="bg-stone-800 text-white p-8 text-center">
        <div>
            <!-- Social Media Links -->
            <nuxt-link v-for="link in links"
                :href="link.url"
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-decoration-none m-6">
                {{ link.name }}
            </nuxt-link>
        </div>
        <p style="margin-top: 10px; font-size: 14px;">
            &copy; 2025 Guillermo García Grao. All Rights Reserved.
        </p>
    </footer>
</template>

<script setup lang="ts">
const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/guillegg/' },
    { name: 'GitHub', url: 'https://github.com/ErmoGarcia' },
    { name: 'Twitter', url: 'https://twitter.com/your-profile' }
]
</script>