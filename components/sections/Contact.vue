<template>
    <section id="contact" class="contact">
        <div class="contact__form">
            <h1>Contact Me</h1>
            <form @submit.prevent="submitForm">
                <div class="contact__form__group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="form.name" required />
                </div>
                <div class="contact__form__group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="form.email" required />
                </div>
                <div class="contact__form__group">
                    <label for="message">Message:</label>
                    <textarea id="message" v-model="form.message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log('Form submitted:', this.form);
            // Reset form
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
};
</script>

<style scoped>
.contact {
    padding: 20px;
    min-height: 100vh;
    background-color: #f9f9f9;

    display: grid;
    place-items: center;
}

.contact__form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
}

.contact__form h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.contact__form form {
    display: grid;
    gap: 1rem;
}

.contact__form__group {
    margin-bottom: 1rem;
}

.contact__form__group label {
    display: block;
    margin-bottom: 0.5rem;
}

.contact__form__group input, textarea {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
}

.contact__form__group textarea {
    height: 6rem;
}

.contact__form button {
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.contact__form button:hover {
    background-color: #0056b3;
}
</style>