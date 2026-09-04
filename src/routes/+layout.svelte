<script>
	import { goto } from '$app/navigation';
	import '../app.css';
	let { children } = $props();
	// import resume from '$lib/Assets/Resume_Dana St. Hill Art.pdf'
	// import resume from '$lib/Assets/resume.pdf';
	import Icon from '@iconify/svelte';
	var showMenu = $state(false);
	import bgTexture from '$lib/imgs/bg-texture.jpg';

	function navigate(path) {
		goto(path);
		showMenu = false;
	}
</script>

<!-- Full-screen sidebar -->
<nav class="sidebar" class:open={showMenu} aria-hidden={!showMenu}>
	<button class="sidebar-close" onclick={() => (showMenu = false)} aria-label="Close menu">
		<Icon icon="mdi:close" width="32" height="32" />
	</button>
	<div class="sidebar-links">
		<button class="sidebar-link" onclick={() => navigate('/')}>
			<span class="sidebar-link-number">01</span> Home
		</button>
		<button class="sidebar-link" onclick={() => navigate('/portfolio')}>
			<span class="sidebar-link-number">02</span> Gallery
		</button>
		<button class="sidebar-link" onclick={() => navigate('/portfolio')}>
			<span class="sidebar-link-number">03</span> About Me
		</button>
		<button class="sidebar-link" onclick={() => navigate('/portfolio')}>
			<span class="sidebar-link-number">04</span> Contact
		</button>
	</div>
	<div class="sidebar-footer">Dana St. Hill — Artist & Developer</div>
</nav>

<!-- Backdrop -->
{#if showMenu}
	<div class="backdrop" onclick={() => (showMenu = false)} role="presentation"></div>
{/if}

<!-- Navbar -->
<header class="navbar-wrapper">
	<div class="navbar-inner">
		<button class="nav-home-btn" onclick={() => goto('/')} aria-label="Home">
			<Icon icon="mdi:home" width="22" height="22" style="color: black" />
		</button>

		<nav class="nav-links desktop-only" aria-label="Main navigation">
			<a
    class="nav-pill"
    href="/resume.pdf"
    download="Dana_St_Hill_Resume.pdf"
>
    Resume
</a>

			<button class="nav-pill" onclick={() => goto('/portfolio')}> Gallery </button>

			<button class="nav-pill" onclick={() => goto('/about')}> About Me </button>

			<button class="nav-pill" onclick={() => goto('/contact')}> Contact </button>
		</nav>

		<button
			class="hamburger mobile-only"
			onclick={() => (showMenu = !showMenu)}
			aria-label="Open menu"
			aria-expanded={showMenu}
		>
			<Icon icon="mdi:menu" width="28" height="28" style="color: white" />
		</button>
	</div>
</header>

<!-- Page content with background -->
<div class="bgDiv" style={`--bg-image: url(${bgTexture})`}>
	{@render children()}
</div>

<style>
	/* ── Background ─────────────────────────────────────── */
	.bgDiv {
		position: relative;
		min-height: 100vh;
	}
	.bgDiv::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: var(--bg-image);
		background-repeat: repeat;
		background-size: auto;
		background-position: top left;
		filter: invert(1) brightness(0.6);
		z-index: -1;
		pointer-events: none;
	}

	/* ── Navbar ─────────────────────────────────────────── */
	.navbar-wrapper {
		background: #000;
		border-bottom: 6px dashed #fff;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 99;
	}
	.navbar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1.5rem;
		max-width: 1400px;
		margin: 0 auto;
	}
	.nav-home-btn {
		background: white;
		border: none;
		border-radius: 50%;
		width: 42px;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
		flex-shrink: 0;
	}
	.nav-home-btn:hover {
		transform: scale(1.08);
		box-shadow: 0 0 0 3px #fff4;
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.nav-pill {
		color: black;
		background: white;
		border: none;
		border-radius: 999px;
		padding: 0.4rem 1.2rem;
		font-family: 'Patrick Hand SC', serif;
		font-size: 1rem;
		cursor: pointer;
		transition:
			background 0.15s,
			color 0.15s,
			transform 0.15s;
	}
	.nav-pill:hover {
		background: #000;
		color: #fff;
		outline: 2px solid #fff;
		transform: scale(1.04);
	}

	/* ── Hamburger ──────────────────────────────────────── */
	.hamburger {
		background: none;
		border: 2px solid #fff;
		border-radius: 8px;
		cursor: pointer;
		padding: 4px 6px;
		display: none;
		align-items: center;
		justify-content: center;
		transition: background 0.15s;
	}
	.hamburger:hover {
		background: #ffffff22;
	}

	/* ── Sidebar ─────────────────────────────────────────── */
	.sidebar {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100dvh;
		background: #000;
		z-index: 99;
		transform: translateX(-100%);
		transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 3rem 2.5rem;
		overflow: hidden;
	}
	.sidebar::before {
		content: '';
		position: absolute;
		top: -80px;
		right: -80px;
		width: 300px;
		height: 300px;
		border-radius: 50%;
		border: 40px dashed #ffffff15;
		pointer-events: none;
	}
	.sidebar::after {
		content: '';
		position: absolute;
		bottom: -60px;
		left: -60px;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		border: 30px dashed #ffffff10;
		pointer-events: none;
	}
	.sidebar.open {
		transform: translateX(0);
	}
	.sidebar-close {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		background: none;
		border: 2px solid #fff4;
		border-radius: 50%;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		cursor: pointer;
		transition:
			border-color 0.2s,
			background 0.2s;
	}
	.sidebar-close:hover {
		border-color: #fff;
		background: #fff2;
	}
	.sidebar-links {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		width: 100%;
	}
	.sidebar-link {
		background: none;
		border: none;
		color: white;
		font-family: 'Gaegu', serif;
		font-size: clamp(2.2rem, 10vw, 3.5rem);
		font-weight: 700;
		cursor: pointer;
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		padding: 0.4rem 0;
		border-bottom: 1px solid #ffffff15;
		width: 100%;
		text-align: left;
		transition:
			color 0.2s,
			padding-left 0.2s;
	}
	.sidebar-link:hover {
		color: #ddd;
		padding-left: 0.5rem;
	}
	.sidebar-link-number {
		font-size: 0.85rem;
		font-family: 'Patrick Hand SC', serif;
		color: #ffffff55;
		letter-spacing: 0.05em;
	}
	.sidebar-footer {
		position: absolute;
		bottom: 1.5rem;
		left: 2.5rem;
		font-family: 'Patrick Hand SC', serif;
		font-size: 0.8rem;
		color: #ffffff40;
		letter-spacing: 0.08em;
	}

	/* ── Backdrop ────────────────────────────────────────── */
	.backdrop {
		display: none;
	}

	/* ── Responsive ──────────────────────────────────────── */
	.desktop-only {
		display: flex;
	}
	.mobile-only {
		display: none;
	}

	@media (max-width: 768px) {
		.desktop-only {
			display: none;
		}
		.mobile-only {
			display: flex;
		}
		.hamburger {
			display: flex;
		}
	}
</style>
