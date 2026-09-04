<script>
    import logoSvg from '$lib/svg/logo.svg'
</script>
<img src={logoSvg} class="cs-logo"/>
<h1 class="w-full text-center title-font cs-txt">Coming Soon....</h1>

<style>
    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
    @keyframes pulse {
        0%{
            font-size: 2vw;
        }
        50%{
            font-size: 4vw;
        }
        100%{
            font-size: 2vw;
        }
    }
    .cs-logo {
        width: 50vw;
        height: 50vh;
        aspect-ratio: 1/1;
        margin: auto;

        /* animation-name: example; */
        /* animation-duration: 4s; */

        animation-name: rotate;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .cs-txt {
        width: 100dvw;
        height: 4vw;
        text-align: center;
        animation-name: pulse;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
</style>
