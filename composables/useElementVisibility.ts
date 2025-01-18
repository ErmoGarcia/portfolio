export default function (target: string) {
    const isVisible = ref(false);
    let targetElement: HTMLElement | null = null;
    let observer: IntersectionObserver;

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible.value = entry.isIntersecting;
            });
        });

        targetElement = document.querySelector(`${target}`);
        if (targetElement) {
            observer.observe(targetElement);
        }
    });

    onUnmounted(() => {
        if (targetElement) {
            observer.unobserve(targetElement);
        }
    });

    return {
        isVisible
    };
}