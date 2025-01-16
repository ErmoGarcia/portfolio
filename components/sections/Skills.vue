<template>
    <section class="skills">
        <h2>Skills</h2>
        <ul>
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                'JavaScript',
                'Vue.js',
                'HTML',
                'CSS',
                'Node.js',
                'Git',
                'Webpack'
            ]
        };
    }
};
</script>

<style scoped>
.skills {
    padding: 20px;
    background-color: #f9f9f9;
}

.skills h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.skills ul {
    list-style-type: none;
    padding: 0;
}

.skills li {
    font-size: 18px;
    margin: 5px 0;
}
</style>