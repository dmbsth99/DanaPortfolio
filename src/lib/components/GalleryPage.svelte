<script>
    import { goto } from '$app/navigation';
    import { galleryItems, categories } from '$lib/data/galleryData.js';

    import ball1 from '$lib/svg/balls-04.svg';
    import ball2 from '$lib/svg/balls-05.svg';
    import ball3 from '$lib/svg/balls-06.svg';
    import ball4 from '$lib/svg/balls-07.svg';
    import ball5 from '$lib/svg/balls-08.svg';
    import ball6 from '$lib/svg/balls-09.svg';

        import Links from '$lib/data/Links.svelte';
    
    const ballImgs = { ball1, ball2, ball3, ball4, ball5, ball6 };

    /** @type {{ activeCategory?: string|null }} */
    let { activeCategory = null } = $props();

    let filter = $state(activeCategory ?? null);
    $effect(() => { filter = activeCategory ?? null; });

    // Track which image IDs have finished loading
    let loadedIds = $state(new Set());

    function markLoaded(id) {
        loadedIds = new Set([...loadedIds, id]);
    }

    // When filter changes, reset loaded state so skeletons show fresh
    $effect(() => {
        filter; // subscribe
        loadedIds = new Set();
    });

    const filtered = $derived(
        filter ? galleryItems.filter(i => i.category === filter) : galleryItems
    );

    const activeLabel = $derived(
        filter ? (categories.find(c => c.slug === filter)?.label ?? filter) : null
    );

    function setFilter(slug) {
        if (filter === slug) {
            filter = null;
            goto('/portfolio', { replaceState: true });
        } else {
            filter = slug;
            goto(`/portfolio/${slug}`, { replaceState: true });
        }
    }

    function clearFilter() {
        filter = null;
        goto('/portfolio', { replaceState: true });
    }

    // Deterministic tall pattern — keeps SSR stable, no random jank
function itemSize(index) {
    const random = Math.random();

    if (random < 0.55) return 1;
    if (random < 0.85) return 2;
    return 3;
}

    // Skeleton aspect-ratio pattern matching the tall pattern above
    // so the reserved space matches closely before images load
    function skeletonRatio(index) {
        return itemSize(index) === 2 ? '3 / 4' : '4 / 3';
    }

let selectedImage = $state();
let selectedIndex = $state(0);

function openImage(item) {
    selectedImage = item;
    selectedIndex = filtered.findIndex(i => i.id === item.id);

    document.body.style.overflow = 'hidden';
}

function closeImage() {
    selectedImage = undefined;
    document.body.style.overflow = '';
}

function nextImage() {
    selectedIndex = (selectedIndex + 1) % filtered.length;
    selectedImage = filtered[selectedIndex];
}

function previousImage() {
    selectedIndex =
        (selectedIndex - 1 + filtered.length) % filtered.length;

    selectedImage = filtered[selectedIndex];
}
</script>

<div class="gallery-page">

    <!-- ── Header ────────────────────────────────────── -->
    <header class="gallery-header">
        <div class="gallery-title-row">
            <h1 class="gallery-title">Gallery</h1>
            {#if activeLabel}
                <div class="active-badge">
                    <img
                        src={ballImgs[categories.find(c => c.slug === filter)?.ballClass ?? 'ball1']}
                        alt=""
                        class="badge-ball"
                        aria-hidden="true"
                    />
                    <span class="badge-label">{activeLabel}</span>
                    <button class="badge-clear" onclick={clearFilter} aria-label="Clear filter">✕</button>
                </div>
            {/if}
        </div>
        <p class="gallery-count">
            {filtered.length === 0
                ? 'No pieces here yet — check back soon.'
                : `${filtered.length} piece${filtered.length === 1 ? '' : 's'}`}
        </p>
    </header>

    <!-- ── Filter Bar ────────────────────────────────── -->
    <nav class="filter-bar" aria-label="Filter by category">
        <button class="filter-pill" class:active={filter === null} onclick={clearFilter}>
            All
        </button>
        {#each categories as cat}
            <button
                class="filter-pill"
                class:active={filter === cat.slug}
                onclick={() => setFilter(cat.slug)}
                aria-pressed={filter === cat.slug}
            >
                <img src={ballImgs[cat.ballClass]} alt="" class="pill-ball" aria-hidden="true" />
                <span class="pill-label">{cat.label}</span>
            </button>
        {/each}
    </nav>

    <!-- ── Brick Grid ─────────────────────────────────── -->
    {#if filtered.length === 0}
        <div class="empty-state">
            <p>Nothing here yet — images coming soon.</p>
        </div>
    {:else}
        <div class="masonry" role="list">
            {#each filtered as item, i (item.id)}
                {@const loaded = loadedIds.has(item.id)}
                <div
                    class="masonry-item"
                    class:tall={itemSize(i) === 2}
                    style="--skeleton-ratio: {skeletonRatio(i)}"
                    role="listitem"
                >
                    <!-- <button class="card" aria-label={item.title}> -->
<button
    class="card"
    aria-label={item.title}
    onclick={() => openImage(item)}
>
                        <!-- Skeleton sits behind the image, hidden once loaded -->
                        <div class="skeleton" class:hidden={loaded} aria-hidden="true"></div>

                        <!-- Image loads eagerly; fades in when ready -->
                        <img
                            src={item.src}
                            alt={item.title}
                            class="card-img"
                            loading="lazy"
                            class:visible={loaded}
                            onload={() => markLoaded(item.id)}
                        />

                        <div class="card-overlay">
                            <span class="card-title">{item.title}</span>
                            <span class="card-cat">
                                {categories.find(c => c.slug === item.category)?.label ?? item.category}
                            </span>
                        </div>
                    </button>
                </div>
            {/each}
        </div>
    {/if}
</div>

{#if selectedImage}
    <div
        class="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={selectedImage.title}
    >

        <button
            class="lightbox-close"
            onclick={closeImage}
            aria-label="Close image"
        >
            ✕
        </button>

        <button
            class="lightbox-prev"
            onclick={previousImage}
            aria-label="Previous image"
        >
            ←
        </button>

        <div class="lightbox-content">

            <img
                src={selectedImage.src}
                alt={selectedImage.title}
                class="lightbox-image"
            />

            <div class="lightbox-info">
                <h2>{selectedImage.title}</h2>

                {#if selectedImage.description}
                    <p>{selectedImage.description}</p>
                {/if}
            </div>

        </div>

        <button
            class="lightbox-next"
            onclick={nextImage}
            aria-label="Next image"
        >
            →
        </button>

    </div>
{/if}
 <div>

        <Links />
     </div>

<style>
/* ── Image Lightbox ─────────────────────────────────── */

.lightbox {
    position: fixed;
    inset: 0;
    z-index: 100;

    background: rgba(0, 0, 0, 0.88);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 3rem;
}

.lightbox-content {
    max-width: 90vw;
    max-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.lightbox-image {
    display: block;

    max-width: 85vw;
    max-height: 75vh;

    width: auto;
    height: auto;

    object-fit: contain;

    border-radius: 6px;

    z-index: 100;
}

.lightbox-info {
    max-width: 800px;

    margin-top: 1rem;

    text-align: center;

    color: white;
}

.lightbox-info h2 {
    font-family: "Gaegu", serif;
    font-size: clamp(1.5rem, 3vw, 2.5rem);

    margin: 0;
}

.lightbox-info p {
    font-family: "Patrick Hand SC", serif;
    font-size: clamp(1rem, 2vw, 1.3rem);

    margin: 0.3rem 0 0;
}

/* Close button */

.lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 2rem;

    background: white;
    color: black;

    border: 3px solid black;
    border-radius: 50%;

    width: 50px;
    height: 50px;

    font-size: 1.5rem;

    cursor: pointer;

    z-index: 100;

}

/* Previous / Next */

.lightbox-prev,
.lightbox-next {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);

    background: white;
    color: black;

    border: 3px solid black;
    border-radius: 50%;

    width: 55px;
    height: 55px;

    font-size: 1.8rem;

    cursor: pointer;

    
}

.lightbox-prev {
    left: 2rem;
}

.lightbox-next {
    right: 2rem;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
    background: black;
    color: white;
}

/* ── Page shell ──────────────────────────────────────── */
.gallery-page {
    min-height: 100vh;
    padding: 2.5rem 2rem 6rem;
    max-width: 1400px;
    margin: 0 auto;
}

/* ── Header ──────────────────────────────────────────── */
.gallery-header { margin-bottom: 2rem; }
.gallery-title-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.4rem;
}
.gallery-title {
    font-family: "Gaegu", serif;
    font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
}
.gallery-count {
    font-family: "Patrick Hand SC", serif;
    font-size: 1.05rem;
    opacity: 0.55;
    letter-spacing: 0.03em;
}

/* ── Active filter badge ─────────────────────────────── */
.active-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    border: 3px solid #000;
    border-radius: 999px;
    padding: 0.3rem 0.9rem 0.3rem 0.4rem;
    box-shadow: 3px 3px 0 #000;
    animation: badgePop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes badgePop {
    from { transform: scale(0.7); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
}
.badge-ball { width: 30px; height: 30px; border-radius: 50%; object-fit: contain; }
.badge-label {
    font-family: "Patrick Hand SC", serif;
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    white-space: nowrap;
}
.badge-clear {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    color: #000;
    opacity: 0.5;
    padding: 0 0 0 0.25rem;
    transition: opacity 0.15s;
    line-height: 1;
}
.badge-clear:hover { opacity: 1; }

/* ── Filter bar ──────────────────────────────────────── */
.filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px dashed rgba(255,255,255,0.15);
}
.filter-pill {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 999px;
    padding: 0.4rem 1rem 0.4rem 0.5rem;
    cursor: pointer;
    font-family: "Patrick Hand SC", serif;
    font-size: 0.95rem;
    color: inherit;
    transition: border-color 0.18s, background 0.18s, transform 0.15s, box-shadow 0.18s;
}
.filter-pill:first-child { padding: 0.4rem 1.1rem; }
.filter-pill:hover { border-color: rgba(255,255,255,0.7); transform: translateY(-1px); }
.filter-pill.active {
    background: white;
    color: #000;
    border-color: white;
    box-shadow: 3px 3px 0 rgba(0,0,0,0.35);
    transform: translateY(-2px);
}
.pill-ball { width: 26px; height: 26px; border-radius: 50%; object-fit: contain; flex-shrink: 0; }
.pill-label { white-space: nowrap; }

/* ── Masonry ─────────────────────────────────────────── */
.masonry {
    column-count: 4;
    column-gap: 10px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}
.masonry-item {
    break-inside: avoid;
    margin-bottom: 0.85rem;
    display: block;
}

/* ── Card ────────────────────────────────────────────── */
.card {
    width: 100%;
    margin: 0 0 10px;

    border: 0;
    padding: 0;
    background: #000;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    display: block;

    break-inside: avoid;
}
/* ── Skeleton ────────────────────────────────────────── */
.skeleton {
    position: absolute;
    inset: 0;
    border-radius: 6px;
    background: linear-gradient(
        90deg,
        rgba(255,255,255,0.06) 25%,
        rgba(255,255,255,0.12) 50%,
        rgba(255,255,255,0.06) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.6s ease-in-out infinite;
    z-index: 0;
    transition: opacity 0.3s ease;
}
.skeleton.hidden {
    opacity: 0;
    pointer-events: none;
}
@keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* ── Image ───────────────────────────────────────────── */
.card-img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;

    transition: transform 0.35s ease;
}
.card-img.visible {
    opacity: 1;
}
.card:hover .card-img {
    transform: scale(1.035);
    filter: brightness(1.05);
}

/* ── Overlay ─────────────────────────────────────────── */
.card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(0,0,0,0.82) 0%,
        rgba(0,0,0,0.18) 50%,
        transparent 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem 0.9rem 0.85rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 6px;
    z-index: 2;
}
.card:hover .card-overlay,
.card:focus-visible .card-overlay {
    opacity: 1;
}
.card-title {
    font-family: "Gaegu", serif;
    font-size: clamp(0.95rem, 1.8vw, 1.25rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
}
.card-cat {
    font-family: "Patrick Hand SC", serif;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.65);
    letter-spacing: 0.06em;
    margin-top: 0.2rem;
}

/* ── Empty state ─────────────────────────────────────── */
.empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
    font-family: "Patrick Hand SC", serif;
    font-size: 1.3rem;
    opacity: 0.5;
    text-align: center;
}

/* ── Responsive ──────────────────────────────────────── */
@media (min-width: 769px) {
    .masonry {
        column-count: 4;
    }
}

@media (max-width: 768px) {
    .masonry {
        column-count: 2;
        column-gap: 6px;
    }

    .card {
        margin-bottom: 6px;
    }
}

@media (max-width: 480px) {
    .masonry {
        column-gap: 4px;
    }

    .card {
        margin-bottom: 4px;
    }
}
</style>