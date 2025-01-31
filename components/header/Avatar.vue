<template>
    <div class="avatar">
        <div class="avatar__decorator"></div>
        <div class="avatar__wrapper">
            <NuxtImg
                class="avatar__img"
                src="/img/me.png"
                alt="Banner"
                sizes="100vw sm:50vw md:1300px xl:1800px"
                format="webp"
                fit="cover"
                preload
                loading="eager"
            />
        </div>
    </div>
</template>

<style scoped>
.avatar {
    position: relative;
    height: 500px;
    width: 400px;
    border-radius: 50%;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.avatar:hover {
    transform: scale(1.2);
}

.avatar__wrapper {
    clip-path: path("M0 0 H400 V300 A200 200 0 0 1 0 300 Z");
    position: relative;
}

.avatar__img {
    pointer-events: none;
    width: 400px;
    transform: translateY(100px) scale(1.15);
    transform-origin: 50% bottom;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}


.avatar:hover .avatar__img {
    transform: translateY(85px) scale(1.2);
}

.avatar__decorator {
    position: absolute;
    bottom: 0;
    background-color: var(--clr-primary);
    height: 400px;
    width: 400px;
    border-radius: 50%;
}
</style>