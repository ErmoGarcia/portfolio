<template>
    <div class="min-h-screen font-sans bg-gray-100 text-gray-900 flex flex-col justify-between">
        <Navigation />
        <div class="flex-grow bg-white">
            <slot />
        </div>
        <Footer />
    </div>
</template>