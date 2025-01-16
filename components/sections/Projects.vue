<template>
    <section class="flex flex-wrap gap-20">
        <div class="project-card" v-for="project in projects" :key="project.id">
            <div class="project-image" :style="{ backgroundImage: `url(${project.image})` }"></div>
            <div class="project-content">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Project One',
                    image: 'path/to/image1.jpg',
                    description: 'This is a description for project one.'
                },
                {
                    id: 2,
                    title: 'Project Two',
                    image: 'path/to/image2.jpg',
                    description: 'This is a description for project two.'
                },
                // Add more projects as needed
            ]
        };
    }
};
</script>

<style scoped>
.project-card {
    width: calc(33.333% - 20px);
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s;
}

.project-card:hover .project-image {
    transform: scale(1.1);
}

.project-content {
    padding: 20px;
}

.project-content h3 {
    margin: 0 0 10px;
}

.project-content p {
    margin: 0;
}
</style>