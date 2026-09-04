    <!-- ── Links ─────────────────────────────────────────── -->
<section class="section-wrapper links-section">
    <h2 class="section-heading">Links</h2>
    <div class="links-grid">
        <a class="link-card" href="https://www.artstation.com/dmbsth99" target="_blank" rel="noopener">
            <span class="link-platform">ArtStation</span>
            <span class="link-url">artstation.com/dmbsth99</span>
        </a>
        <a class="link-card" href="https://www.linkedin.com/in/dana-st-hill-7907032b9/" target="_blank" rel="noopener">
            <span class="link-platform">LinkedIn</span>
            <span class="link-url">linkedin.com/in/dana-st-hill</span>
        </a>
        <a class="link-card" href="https://www.instagram.com/danast.h" target="_blank" rel="noopener">
            <span class="link-platform">Instagram</span>
            <span class="link-url">instagram.com/danast.h</span>
        </a>
          <a class="link-card" href="https:/www./danananananana.itch.io/" target="_blank" rel="noopener">
            <span class="link-platform">Itch.io</span>
            <span class="link-url">Itch.io - Published Games</span>
        </a>
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
    /* ── Links ───────────────────────────────────────────── */
.links-section {
    padding-bottom: 5rem;
}
.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
}
.link-card {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    background: white;
    border: 3px solid #000;
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
    box-shadow: 4px 4px 0 #000;
    text-decoration: none;
    color: #000;
    transition: transform 0.15s, box-shadow 0.15s;
}
.link-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
}
.link-platform {
    font-family: "Gaegu", serif;
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-weight: 700;
    line-height: 1;
    color: #000;
}
.link-url {
    font-family: "Patrick Hand SC", serif;
    font-size: clamp(0.9rem, 1.8vw, 1.05rem);
    color: #000;
    opacity: 0.6;
    text-decoration: underline;
    word-break: break-all;
}
</style>