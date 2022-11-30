<?php
include_once 'header.php';
?>
    <main id="web">
        <section class="cd_web">
            <div class="hero_web">
                <h1 data-aos="fade-down">Beefrench</h1>
                <img data-aos="fade-up" src="./assets/images/png/beefrench.png"
                    alt="Hero of the front page of the custom sneakers website Beefrench" class="img_hero_web">
                <div class="cd_txt_web">
                    <h2 data-aos="fade-right">Description</h2>
                    <p data-aos="fade-left">Beefrench is a brand of customised Nike Air Force 1</p>
                </div>
            </div>
            <div class="content_web subcdweb1">
                <img data-aos="fade-up" src="./assets/images/png/wp_interface_beefrench.png"
                    alt="WordPress interface of the custom sneakers website Beefrench">
                    <div class="cd_txt_web">
                        <h2 data-aos="fade-right">WordPress interface</h2>
                        <p data-aos="fade-left">This site was built using WordPress and has a customised and simplified interface to allow the client to easily add their products. This was part of the specifications established by the client.</p>
                    </div>
            </div>
            <div class="content_web subcdweb2">
                <video data-aos="fade-up" autoplay loop muted playsinline>
                    <source src="./assets/videos/beefrench.mp4" type="video/mp4">
                </video>
                <div class="cd_txt_web">
                    <h2 data-aos="fade-right">Front-Page</h2>
                    <p data-aos="fade-left">The front-page of Beefrench was made, like this portfolio, with a JavaScript library I like a lot: Gsap. Accompanied by locomotive.js, it allowed me to make the entry animation and the scroll animations</p>
                </div>
            </div>
            <div class="content_web subcdweb3">
                <img data-aos="fade-up" src="./assets/images/png/shoes_section_beefrench.png"
                    alt="Shoes section of the custom sneakers website Beefrench">
                    <div class="cd_txt_web">
                        <h2 data-aos="fade-right">Showcase</h2>
                        <p data-aos="fade-left">The site's product showcase is simple and uncluttered but above all effective. Accompanied by a search and pagination system, it lists the products added by the user via the WordPress interface</p>
                    </div>
            </div>
            <div class="content_web subcdweb4">
                <img data-aos="fade-up" src="./assets/images/png/fiche_produit_beefrench.png"
                    alt="product sheet of the custom sneakers website Beefrench">
                    <div class="cd_txt_web">
                        <h2 data-aos="fade-right">Fiche Produit</h2>
                        <p data-aos="fade-left">The product sheet has been created, like the site in general, in SCSS. Once added to the basket, the information, coming from the database, is stored both in PHP variables and in the Local Storage, allowing a dynamic display in the basket using a JavaScript class system.</p>
                    </div>
            </div>
            <div class="content_web subcdweb5">
                <video data-aos="fade-up" autoplay loop muted playsinline>
                    <source src="./assets/videos/gallery_beefrench.mp4" type="video/mp4">
                </video>
                <div class="cd_txt_web">
                    <h2 data-aos="fade-right">Description</h2>
                    <p data-aos="fade-left">Beefrench est une marque de Nike Air Force 1 customisé à la demande ou au choix</p>
                </div>
            </div>
            <div class="content_web subcdweb6">
                <img data-aos="fade-up" src="./assets/images/png/stripe_checkout_beefrench.png"
                    alt="Stripe checkout payment for the custom sneakers website Beefrench">
                    <div class="cd_txt_web">
                        <h2 data-aos="fade-right">Description</h2>
                        <p data-aos="fade-left">Beefrench est une marque de Nike Air Force 1 customisé à la demande ou au choix</p>
                    </div>
            </div>
            <a class='arrow-up' href="#top"><span class='left-arm'></span><span class='right-arm'></span></a>
        </section>
        <div style="height: 25vh;width: 100%;"></div>
        
    </main>
    <?php
include_once 'pointer.php';
?>
</body>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js" integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="./assets/js/import/ScrollTrigger.min.js"></script>  
<script src="./assets/js/import/locomotive.js"></script>
<script src="./assets/js/script/script.js"></script>
<script src="./assets/js/script/web.js"></script>

</html>