<template>
    <swiper-container
        :grab-cursor="true"
        :centered-slides="true"
        :space-between="50"
        :mousewheel-enabled="true"
        :slides-per-view="2"
        :initial-slide="1"
    >
        <swiper-slide v-for="img in imgList">
            <NuxtImg
                class="swiper__image"
                :src="img.picture"
                :alt="img.description"
                fit="cover"
            />
            <p class="swiper__description">{{ img.description }}</p>
        </swiper-slide>
    </swiper-container>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register();

const props = defineProps<{ imgList: Detail[] }>()
</script>

<style scoped>
.swiper__image {
    width: 100%;
    height: 100%;
}

.swiper__description {
    margin-block: 2rem;
    max-width: 50ch;
    font-size: 1.2rem;
    color: var(--clr-primary-light);
}
</style>