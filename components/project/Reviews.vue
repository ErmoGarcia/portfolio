<template>
    <div class="reviews section">
        <div class="reviews__content">
            <template v-for="(review, index) in reviews" :key="index">
                <ul class="review__stars">
                    <li v-for="_ in Array.from({length: review.stars})">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 47.94 47.94" xml:space="preserve">
                            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                                C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                        </svg>
                    </li>
                </ul>
                <p class="review__text">{{ review.comment }}</p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ reviews: Review[] }>()
</script>

<style scoped>
.reviews {
    place-content: center;
}

.reviews__content {
    display: grid;
    gap: 2rem;
    place-content: center;

    padding: 2rem;
    border-style: dashed;
    border-width: 2px;
    border-image: repeating-linear-gradient(90deg, var(--clr-primary), var(--clr-primary) 50px, transparent 50px, transparent 100px) 2 round;
}

.review__stars {
    width: 100%;
    display: flex;
    gap: 1rem;
    place-content: center;
}

.review__stars svg {
    height: 2rem;
    width: 2rem;
    fill: var(--clr-primary);
}

.review__text {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--clr-primary-light);
    text-align: center;
    max-width: 50ch;
}
</style>