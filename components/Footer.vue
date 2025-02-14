<template>
    <footer class="footer">
        <div class="footer__logo"><img src="~/assets/logo.svg" alt="Logo"></div>
        <div class="footer__links">
            <!-- Social Media Links -->
            <ul>
                <li v-for="link in navigation" :key="link.name">
                    <nuxt-link
                        :href="link.path"
                        target="_blank"
                        rel="noopener noreferrer">
                        {{ link.name }}
                    </nuxt-link>
                </li>
            </ul>
            <SocialLinks :invert="true" />
        </div>
        <p class="footer__content" style="margin-top: 10px; font-size: 14px;">
            &copy; 2025 Guillermo García Grao. All Rights Reserved.
        </p>
    </footer>
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
.footer {
    height: 12rem;
    overflow: hidden;
    padding: 1.5rem;
    background-color: var(--clr-primary);
    color: var(--clr-text);
    
    display: grid;
    grid-template-areas: 
        "logo links"
        "content content";
    place-items: center;    
}

.footer__logo {
    grid-area: logo;
    overflow: hidden;
    transform: translate(-200px, 2rem);
    margin-bottom: 1rem;
}

.footer__logo img {
    width: 18rem;
}

.footer__links {
    grid-area: links;
}

.footer__links li {
    margin-block: 1rem;
}

.footer__link:hover {
    text-decoration: underline;
}

.footer__content {
    grid-area: content;
    margin-top: 1rem;
    font-size: 1rem;
}
</style>