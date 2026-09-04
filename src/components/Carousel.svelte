<script>
  export let images;
  export let imageWidth = 300;
</script>

<div id="carousel-container">
  <div id="carousel-images">
  {#each images as image}
    <img
      src={image}
      style={`width: ${imageWidth}px; margin: 0 {imageSpacing}`}
    />
  {/each}
  </div>
</div>

<style>
  #carousel-container{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: visible;
  }
  #carousel-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom:30px;

  }

</style>