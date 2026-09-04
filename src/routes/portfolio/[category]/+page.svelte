<script>
    import GalleryPage from '$lib/components/GalleryPage.svelte';
    import { page } from '$app/stores';
</script>

<GalleryPage activeCategory={$page.params.category} />