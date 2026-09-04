<script>
    let sending = false;
    let sent = false;
    let error = false;

    async function sendMessage(event) {
        event.preventDefault();

        sending = true;
        sent = false;
        error = false;

        const form = event.currentTarget;

        try {
            const response = await fetch("https://formspree.io/f/xnpqzjay", {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                sent = true;
                form.reset();
            } else {
                error = true;
            }
        } catch {
            error = true;
        } finally {
            sending = false;
        }
    }
</script>

<div class="contact">

    <h1 class="title-font text-black contact-header">Contact</h1>

    <form on:submit={sendMessage}>

        <h1 class="title-font text-black contact-label">Name:</h1>

        <input
            type="text"
            name="name"
            placeholder=" Enter your name..."
            class="contact-name text-black title-font"
            required
        />


        <h1 class="title-font text-black contact-label">Email:</h1>

        <input
            type="email"
            name="email"
            placeholder=" Enter your email..."
            class="contact-email text-black title-font"
            required
        />


        <h1 class="title-font text-black contact-label">Message:</h1>

        <textarea
            name="message"
            placeholder=" Write me a message!"
            class="contact-msg text-black title-font"
            required
        ></textarea>


        <button
            type="submit"
            disabled={sending}
            class="btn bg-white text-black contact-btn title-font"
        >
            {sending ? "Sending..." : "Send"}
        </button>


        {#if sent}
            <p class="success-message">
                Successfully sent! ✦
            </p>
        {/if}


        {#if error}
            <p class="error-message">
                Something went wrong. Please try again.
            </p>
        {/if}

    </form>

</div>

<style>



    .success-message {
        margin-top: 15px;
        font-size: 18px;
        text-align: center;
    }

    .error-message {
        margin-top: 15px;
        font-size: 18px;
        text-align: center;
    }

    .contact {
        background-color: white;
        padding: 30px 5vw 40px 5vw;
        border-radius: 100px;
        margin: 50px 90px 25px 90px;
    }

    .contact form {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: auto auto auto auto auto;
        row-gap: 10px;
        align-items: center;
    }

    .contact-header {
        grid-column: 1 / 3;
        text-align: center;
        width: 50%;
        margin: 0 auto 20px auto;
        font-size: 3vw;
    }

    .contact-label {
        grid-column: 1;
        text-align: right;
        padding-right: 2vw;
        font-size: 3vw;
        margin: 0;
    }

    .contact-name {
        grid-column: 2;
        grid-row: 1;
        border-radius: 20px;
        border: 3px solid black;
        width: 90%;
        font-size: 3vw;
        padding: 5px 10px;
    }

    .contact-email {
        grid-column: 2;
        grid-row: 2;
        border-radius: 20px;
        border: 3px solid black;
        width: 90%;
        font-size: 3vw;
        padding: 5px 10px;
    }

    .contact-msg {
        grid-column: 2;
        grid-row: 3;
        border-radius: 20px;
        border: 3px solid black;
        width: 90%;
        height: 15vw;
        font-size: 3vw;
        padding: 10px;
    
        resize: vertical;
    }

    .contact-btn {
        grid-column: 1 / 3;
        text-align: center;
        width: 50%;
        height: auto;
        margin: 20px auto 0 auto;
        border: 3px solid black;
        border-radius: 100px;
        font-size: 3vw;
    }

    .contact-btn:hover {
        color: white;
        background-color: black;
    }
</style>
