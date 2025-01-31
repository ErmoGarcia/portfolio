<template>
    <section id="contact" class="contact">
        <h1 class="contact__title">Contact</h1>

        <div v-if="success" class="contact__success">
            <h1>Thank you for contacting me!</h1>
            <p>I will get back to you as soon as possible.</p>
            <svg height="100" width="100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                <g>
                    <path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1
                        c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256
                        S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315
                        c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047
                        C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256
                        c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687
                        c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064
                        C482.762,174.736,478.245,172.445,474.045,173.813z"/>
                    <path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161
                        c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344
                        s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75
                        c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663
                        c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411
                        c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314
                        c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037
                        s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728
                        c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978
                        S509.502,87.794,504.969,83.262z"/>
                </g>
            </svg>
        </div>

        <div v-else class="contact__form">
            <h1>Contact Me</h1>
            <form @submit.prevent="submitForm">
                <div class="contact__form__group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" v-model="form.name" required />
                </div>
                <div class="contact__form__group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" v-model="form.email" required />
                </div>
                <div class="contact__form__group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Tell me what you need" v-model="form.message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
const FORMSPARK_ACTION_URL = "https://submit-form.com/6oT7FqnKx";

const form = ref({
    name: '',
    email: '',
    message: ''
})

const success = ref(false);

const submitForm = async () => {
    await useFetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            message: form.value.message,
            email: form.value.email,
            name: form.value.name
        }),
    });
    
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
    success.value = true;
}
</script>

<style scoped>
.contact {
    position: relative;
    padding: 20px;
    min-height: 100svh;
    
    display: grid;
    place-items: center;
}

.contact__title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    margin-top: 2rem;
    font-size: 20vw;
    font-weight: 100;
    text-align: center;
    text-transform: uppercase;
    color: var(--clr-primary);
}

.contact__success {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid var(--clr-primary);
    border-radius: 5px;
    background-color: var(--clr-bg);

    display: grid;
    gap: 2rem;
    place-items: center;
}

.contact__success h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.contact__success svg {
    fill: var(--clr-success)
}

.contact__form {
    position: relative;
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid var(--clr-primary);
    border-radius: 5px;
    background-color: var(--clr-bg);
}

.contact__form h1 {
    visibility: hidden;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
}

.contact__form form {
    display: grid;
    gap: 1rem;
}

.contact__form__group {
    margin-bottom: 1.5rem;
}

.contact__form__group label {
    display: block;
    margin-bottom: 1rem;
}

.contact__form__group input, textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 0.8rem;
    box-sizing: border-box;
    border: 2px solid var(--clr-primary);
    border-radius: 5px;
    background-color: var(--clr-bg);
    color: var(--clr-text);
}

.contact__form__group textarea {
    height: 6rem;
}

.contact__form__group input:focus, .contact__form__group textarea:focus {
    outline: none;
    border-color: var(--clr-primary);
}

.contact__form__group input:not(:placeholder-shown):valid, .contact__form__group textarea:not(:placeholder-shown):valid {
    border-color: var(--clr-success);
}

.contact__form__group input:not(:placeholder-shown):invalid, .contact__form__group textarea:not(:placeholder-shown):invalid {
    border-color: var(--clr-danger);
}

.contact__form__group input:focus:invalid, .contact__form__group textarea:focus:invalid {
    border-color: var(--clr-warning);
}

.contact__form button {
    padding: 1rem 2rem;
    width: 50%;
    background-color: var(--clr-primary);
    color: var(--clr-text);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.contact__form button:hover {
    background-color: var(--clr-primary-dark);
}

@media screen and (min-width: 768px) {
    .contact__form::before, .contact__success::before {
        content: '';
        position: absolute;
        background-color: var(--clr-primary-light);
        inset: 0;
        translate: -1.25rem -1.25rem;
        border-radius: inherit;
        z-index: -1;
    }
}
</style>