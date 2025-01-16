import { ref, onMounted, onUnmounted } from 'vue';

export default function () {
    const scrollY = ref(0);

    function updateScroll() {
        scrollY.value = window.scrollY;
    }

    onMounted(() => {
        window.addEventListener('scroll', updateScroll);
        updateScroll();
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', updateScroll);
    });

    return {
        scrollY
    };
}