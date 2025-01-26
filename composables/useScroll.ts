export default function () {
    const scrollY = ref(0);

    function updateScroll() {
        scrollY.value = window.scrollY;
        console.log('scrollY', scrollY.value);
    }

    onMounted(() => {
        window.addEventListener('scroll', updateScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', updateScroll);
    });

    return {
        scrollY
    };
}