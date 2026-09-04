<script>
        import headshot from '$lib/imgs/headshot.jpg'
          import Links from '$lib/data/Links.svelte'
</script>
    <div class="hero">
        <div class="about-me">
            <h1 class="about-h1 title-font">About Me</h1>
            <img src={headshot} class="about-img"/>
            <p class="about-p text-font">As a lifelong artist, hobbyist, and designer, 
                I've cultivated a diverse skill set and a wealth of experience across a wide range of mediums.  
                My artistic journey began as most do, with a childhood fascination for art, and I've since 
                explored primarily 3d environment creation, graphic design, painting, sculpture and game design.  
                However, I do not limit myself to just these as I also hold a strong fascination for everything 
                from puppetry to woodworking. Throughout my artistic career I have had the privilege of working 
                as an art teacher for ceramics, owning my own creative business, design sets for theatrical productions
                and working with a mentor to create a demo reel for 3d art that I am incredibly proud of. I'm 
                passionate about exploring the many faces of the artistic field and I'm eager to collaborate with 
                fellow creatives and contribute my skills to projects that inspire and continue my pursuit of learning.</p>
        </div>
   
    </div>

      <div>
        <Links />
     </div>
  

    <style>

            .about-me {
        
        grid-row: 2;
        display: grid;
        grid-template-columns: 20% 70%;
        padding: 40px;
        padding-top: 0;
        justify-content: center;
        align-items: center;
        column-gap: 40px;
        
    }

            .hero {
        z-index: 1;
        display: grid;
        /* grid-template-rows: 60% 40%; */
        width: 90vw;
        margin: auto;
        background-color: white;
        text-align: center;
        /* height: fit-content;
        height: 35vh; */
        padding: 20px;
        border-radius: 100px;
        margin-top: 50px;
    }

            .about-h1 {
        /* width: 100%; */
        color: black;
       grid-column: 2;
    }
    .about-img {
        grid-column: 1;
        aspect-ratio: 1/1.5;
        object-fit: cover;
        margin: auto;
    }
    .about-p{
        grid-column: 2;
        /* width: 65%; */
        color: black;
        font-size: 1.9vw;
        line-height: 1.2;
    }
    </style>