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
    height: 300px;
    width: 200px;
    border-radius: 50%;
    transform-origin: 50% bottom;
    will-change: transform;
}

.avatar__wrapper {
    position: relative;
    clip-path: path("M 0,0 L 200,0 L 200,200 A 50,50 0,0,1 0,200 Z");
}

.avatar__img {
    pointer-events: none;
    width: 200px;
    transform-origin: 50% bottom;
    transform: translateY(80px);
    will-change: transform;
}

.avatar__decorator {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--clr-primary);
    clip-path: ellipse(100px 100px at 100px 200px);
}

@media screen and (min-width: 768px) {
    .avatar {
        height: 500px;
        width: 400px;
    }

    .avatar__wrapper {
        clip-path: path("M 0,0 L 400,0 L 400,300 A 200,200 0,0,1 0,300 Z");
    }

    .avatar__img {
        width: 400px;
    }

    .avatar__decorator {
        clip-path: ellipse(200px 200px at 200px 300px);
    }    
}

@media (prefers-reduced-motion: no-preference) {
    .avatar:hover {
        transform: scale(1.1);
        transition: transform 0.5s;
    }

    .avatar:hover .avatar__img {
        transform: translateY(80px) scale(1.2);
        transition: transform 0.5s;
    }
}
</style>