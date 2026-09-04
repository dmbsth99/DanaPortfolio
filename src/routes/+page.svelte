<script>
    import logoSvg from '$lib/svg/logo.svg'
    import headshot from '$lib/imgs/headshot.jpg'

    
    import ball1 from '$lib/svg/balls-04.svg'
    import ball2 from '$lib/svg/balls-05.svg'
    import ball3 from '$lib/svg/balls-06.svg'
    import ball4 from '$lib/svg/balls-07.svg'
    import ball5 from '$lib/svg/balls-08.svg'
    import ball6 from '$lib/svg/balls-09.svg'

    import softwareKnowledge from '$lib/svg/softwareKnowledge-01.svg'
    import { goto } from '$app/navigation';

    const portfolioLinks = [
        { ball: ball1, path: "/portfolio/3denv",                    label: "3D Environments",        class: "ball1" },
        { ball: ball2, path: "/portfolio/graphicdesign",             label: "Graphic Design",          class: "ball2" },
        { ball: ball3, path: "/portfolio/gamedev",                   label: "Game Dev",                class: "ball3" },
        { ball: ball4, path: "/portfolio/3dassets",                  label: "3D Assets",               class: "ball4" },
        { ball: ball5, path: "/portfolio/illustrations&digitalart",  label: "Illustrations",           class: "ball5" },
        { ball: ball6, path: "/portfolio/paintings&sculptures",      label: "Paintings & Sculptures",  class: "ball6" },
    ];

    import Contact from '$lib/data/Contact.svelte';
    import Links from '$lib/data/Links.svelte';
</script>

<!-- ── Hero ─────────────────────────────────────────── -->
<section class="hero">
    <div class="logo">
        <img src={logoSvg} class="logoImg" alt="Dana St. Hill logo" />
        <h1 class="logo-font">Dana St. Hill</h1>
    </div>
    <p class="specialtytitle">Game Developer &nbsp;/&nbsp; 2D &amp; 3D Artist</p>
</section>

<!-- ── Balls ───────────────────────────────────────────── -->
<section class="section-wrapper">
    <div class="balls-grid">
        {#each portfolioLinks as { ball, path, label }}
            <button class="ball-btn" onclick={() => goto(path)}>
                <img src={ball} alt={label} class="ball-img" />
                <span class="ball-label">{label}</span>
            </button>
        {/each}
    </div>
</section>

<!-- ── About ─────────────────────────────────────────── -->
<section class="section-wrapper">
    <div class="about">
        <h2 class="section-heading about-title">About Me</h2>
        <div class="about-body">
            <img src={headshot} class="about-headshot" alt="A selfie of Dana St. Hill" />
            <p class="about-text">
                As a lifelong artist, hobbyist, and designer, I've cultivated a diverse skill set
                and a wealth of experience across a wide range of mediums. My artistic journey
                began as most do, with a childhood fascination for art, and I've since explored
                primarily 3D environment creation, graphic design, painting, sculpture and game
                design. However, I do not limit myself to just these — I also hold a strong
                fascination for everything from puppetry to woodworking. Throughout my artistic
                career I have had the privilege of working as an art teacher for ceramics, owning
                my own creative business, designing sets for theatrical productions and working
                with a mentor to create a demo reel for 3D art that I am incredibly proud of.
                I'm passionate about exploring the many faces of the artistic field and eager to
                collaborate with fellow creatives and contribute my skills to projects that inspire.
            </p>
        </div>
    </div>
</section>

<!-- ── Skills ────────────────────────────────────────── -->
<section class="section-wrapper">
    <h2 class="section-heading">Skills &amp; Knowledge</h2>
    <div class="knowledge">
        <img src={softwareKnowledge} class="softwares" alt="Software and tools I know" />
    </div>
</section>

<!-- ── Contact ───────────────────────────────────────── -->
<section class="section-wrapper">
    <h2 class="section-heading">Contact</h2>
       <div>
        <Contact />
        <Links />
     </div>
</section>



<style>
/* ── Shared ──────────────────────────────────────────── */
.section-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
}
.section-heading {
    font-family: "Gaegu", serif;
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
}

/* ── Hero ────────────────────────────────────────────── */
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 0.5rem;
}
.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}
.logoImg {
    width: clamp(50px, 8vw, 100px);
}
.logo-font {
    font-family: "Gaegu", serif;
    font-size: clamp(2.5rem, 8vw, 6rem);
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;
}
.specialtytitle {
    font-family: "Patrick Hand SC", serif;
    font-size: clamp(1.1rem, 3vw, 1.7rem);
    text-align: center;
    opacity: 0.85;
    margin-top: 0.25rem;
    letter-spacing: 0.05em;
}

/* ── Balls grid ──────────────────────────────────────── */
.balls-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem 1rem;
    max-width: 700px;
    margin: 0 auto;
}
.ball-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem;
    border-radius: 16px;
    transition: transform 0.18s ease;
}
.ball-btn:hover {
    transform: scale(1.07) translateY(-3px);
}
.ball-btn:active {
    transform: scale(0.95);
}
.ball-img {
    width: clamp(80px, 14vw, 140px);
    height: clamp(80px, 14vw, 140px);
    object-fit: contain;
    border-radius: 50%;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.35));
    transition: filter 0.18s ease;
}
.ball-btn:hover .ball-img {
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.55));
}
.ball-label {
    font-family: "Patrick Hand SC", serif;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    text-align: center;
    line-height: 1.25;
    font-weight: 700;
}

@media (max-width: 480px) {
    .balls-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem 0.75rem;
    }
}

/* ── About ───────────────────────────────────────────── */
.about-title {
    text-align: center;
}
.about-body {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2rem;
    align-items: start;
}
.about-headshot {
    width: 100%;
    max-width: 200px;
    border-radius: 12px;
    box-shadow: 6px 6px 0px #000;
}
.about-text {
    font-family: "Patrick Hand SC", serif;
    font-size: clamp(1.05rem, 2vw, 1.3rem);
    line-height: 1.75;
    color: inherit;
}
@media (max-width: 640px) {
    .about-body {
        grid-template-columns: 1fr;
        justify-items: center;
    }
    .about-headshot {
        max-width: 160px;
        max-height: 180px;
        object-fit: cover;
    }
    .about-text {
        text-align: center;
    }
}

/* ── Skills ──────────────────────────────────────────── */
.knowledge {
    display: flex;
    justify-content: center;
}
.softwares {
    width: 100%;
    max-width: 800px;
}

</style>