<template>
    <section id="contact" class="contact">
        <svg v-if="!success" class="contact__title" viewBox="0 0 422.5 72.201" xmlns="http://www.w3.org/2000/svg">
            <title>Contact title</title>
            <g>
                <path d="M 180.4 71.001 L 177.2 71.001 L 145.9 20.901 L 135.2 3.901 L 134.9 3.901 L 134.9 20.901 L 134.9 71.001 L 132.8 71.001 L 132.8 1.201 L 136 1.201 L 167.4 51.301 L 178 68.301 L 178.3 68.301 L 178.3 51.301 L 178.3 1.201 L 180.4 1.201 L 180.4 71.001 Z M 47.5 14.301 L 45.6 15.201 A 23.74 23.74 0 0 0 41.708 8.971 A 20.934 20.934 0 0 0 37.8 5.501 A 19.973 19.973 0 0 0 27.984 2.086 A 24.976 24.976 0 0 0 25.9 2.001 A 23.984 23.984 0 0 0 17.945 3.263 A 20.095 20.095 0 0 0 8.7 9.951 A 25.016 25.016 0 0 0 4.74 17.405 Q 3.515 20.957 2.932 25.337 A 65.792 65.792 0 0 0 2.4 34.001 L 2.4 38.201 A 66.263 66.263 0 0 0 2.899 46.612 Q 4.15 56.362 8.542 62.049 A 20.678 20.678 0 0 0 8.7 62.251 A 20.334 20.334 0 0 0 23.571 70.106 A 27.946 27.946 0 0 0 25.9 70.201 A 24.268 24.268 0 0 0 32.045 69.457 A 18.868 18.868 0 0 0 38.45 66.451 A 21.664 21.664 0 0 0 45.345 57.974 A 26.739 26.739 0 0 0 46.1 56.201 L 48 57.001 Q 45.3 63.801 39.6 68.001 A 21.458 21.458 0 0 1 29.29 72 A 27.857 27.857 0 0 1 25.9 72.201 Q 17.7 72.201 11.9 68.151 A 22.459 22.459 0 0 1 5.725 61.545 A 31.128 31.128 0 0 1 3.05 56.101 A 41.78 41.78 0 0 1 1.076 48.941 Q 0 43.226 0 36.101 A 78.281 78.281 0 0 1 0.429 27.656 Q 0.876 23.547 1.788 20.041 A 38.91 38.91 0 0 1 3.05 16.051 Q 6.1 8.001 11.9 4.001 A 22.397 22.397 0 0 1 21.243 0.353 A 29.713 29.713 0 0 1 25.9 0.001 A 25.119 25.119 0 0 1 32.803 0.913 A 20.575 20.575 0 0 1 39.15 3.951 Q 44.7 7.901 47.5 14.301 Z M 361.7 14.301 L 359.8 15.201 A 23.74 23.74 0 0 0 355.908 8.971 A 20.934 20.934 0 0 0 352 5.501 A 19.973 19.973 0 0 0 342.184 2.086 A 24.976 24.976 0 0 0 340.1 2.001 A 23.984 23.984 0 0 0 332.145 3.263 A 20.095 20.095 0 0 0 322.9 9.951 A 25.016 25.016 0 0 0 318.94 17.405 Q 317.715 20.957 317.132 25.337 A 65.792 65.792 0 0 0 316.6 34.001 L 316.6 38.201 A 66.263 66.263 0 0 0 317.099 46.612 Q 318.35 56.362 322.742 62.049 A 20.678 20.678 0 0 0 322.9 62.251 A 20.334 20.334 0 0 0 337.771 70.106 A 27.946 27.946 0 0 0 340.1 70.201 A 24.268 24.268 0 0 0 346.245 69.457 A 18.868 18.868 0 0 0 352.65 66.451 A 21.664 21.664 0 0 0 359.545 57.974 A 26.739 26.739 0 0 0 360.3 56.201 L 362.2 57.001 Q 359.5 63.801 353.8 68.001 A 21.458 21.458 0 0 1 343.49 72 A 27.857 27.857 0 0 1 340.1 72.201 Q 331.9 72.201 326.1 68.151 A 22.459 22.459 0 0 1 319.925 61.545 A 31.128 31.128 0 0 1 317.25 56.101 A 41.78 41.78 0 0 1 315.276 48.941 Q 314.2 43.226 314.2 36.101 A 78.281 78.281 0 0 1 314.629 27.656 Q 315.076 23.547 315.988 20.041 A 38.91 38.91 0 0 1 317.25 16.051 Q 320.3 8.001 326.1 4.001 A 22.397 22.397 0 0 1 335.443 0.353 A 29.713 29.713 0 0 1 340.1 0.001 A 25.119 25.119 0 0 1 347.003 0.913 A 20.575 20.575 0 0 1 353.35 3.951 Q 358.9 7.901 361.7 14.301 Z M 245.5 1.201 L 245.5 3.201 L 220.3 3.201 L 220.3 71.001 L 218.1 71.001 L 218.1 3.201 L 192.9 3.201 L 192.9 1.201 L 245.5 1.201 Z M 422.5 1.201 L 422.5 3.201 L 397.3 3.201 L 397.3 71.001 L 395.1 71.001 L 395.1 3.201 L 369.9 3.201 L 369.9 1.201 L 422.5 1.201 Z M 278.7 1.201 L 304 71.001 L 301.7 71.001 L 293.2 47.601 L 261.2 47.601 L 252.7 71.001 L 250.4 71.001 L 275.7 1.201 L 278.7 1.201 Z M 88 72.201 Q 79.3 72.201 73.3 68.151 A 22.952 22.952 0 0 1 66.588 61.03 A 31.161 31.161 0 0 1 64.15 56.101 A 41.061 41.061 0 0 1 62.053 48.639 Q 61.362 44.963 61.125 40.712 A 82.724 82.724 0 0 1 61 36.101 Q 61 26.913 62.847 20.041 A 38.02 38.02 0 0 1 64.15 16.051 A 30.008 30.008 0 0 1 67.315 9.979 A 22.138 22.138 0 0 1 73.3 4.001 A 23.322 23.322 0 0 1 81.975 0.54 A 32.169 32.169 0 0 1 88 0.001 A 31.457 31.457 0 0 1 94.861 0.713 A 23.035 23.035 0 0 1 102.7 4.001 A 22.473 22.473 0 0 1 109.283 10.891 A 30.893 30.893 0 0 1 111.85 16.051 Q 114.403 22.574 114.887 31.69 A 83.206 83.206 0 0 1 115 36.101 Q 115 45.288 113.154 52.131 A 37.488 37.488 0 0 1 111.85 56.101 A 29.974 29.974 0 0 1 108.583 62.296 A 22.508 22.508 0 0 1 102.7 68.151 A 23.2 23.2 0 0 1 93.905 71.678 A 31.887 31.887 0 0 1 88 72.201 Z M 112.6 38.201 L 112.6 34.001 Q 112.6 25.678 110.782 19.513 A 31.863 31.863 0 0 0 109.65 16.301 Q 106.7 9.201 101.2 5.601 A 21.81 21.81 0 0 0 92.612 2.355 A 28.997 28.997 0 0 0 88 2.001 A 26.956 26.956 0 0 0 81.222 2.818 A 21.554 21.554 0 0 0 74.85 5.601 A 21.11 21.11 0 0 0 68.331 12.394 A 27.934 27.934 0 0 0 66.35 16.301 A 35.237 35.237 0 0 0 64.34 23.149 Q 63.694 26.496 63.492 30.37 A 69.777 69.777 0 0 0 63.4 34.001 L 63.4 38.201 A 62.409 62.409 0 0 0 63.815 45.605 Q 64.28 49.486 65.265 52.777 A 32.426 32.426 0 0 0 66.35 55.851 A 26.516 26.516 0 0 0 69.525 61.558 A 20.469 20.469 0 0 0 74.85 66.601 Q 80.4 70.201 88 70.201 A 27.545 27.545 0 0 0 94.527 69.462 A 21.261 21.261 0 0 0 101.2 66.601 Q 106.7 63.001 109.65 55.851 A 35.822 35.822 0 0 0 111.667 48.953 Q 112.309 45.621 112.509 41.789 A 68.697 68.697 0 0 0 112.6 38.201 Z M 261.9 45.701 L 292.5 45.701 L 282.8 18.601 L 277.3 3.501 L 277 3.501 L 271.6 18.601 L 261.9 45.701 Z" vector-effect="non-scaling-stroke"/>
            </g>
        </svg>

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
    
    display: grid;
    place-items: center;
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

.contact__title {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    transform: translateY(40%);
    fill: var(--clr-primary);
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

    .contact__title {
        visibility: visible;
    }

    .contact__form h1 {
        visibility: hidden;
    }
}
</style>