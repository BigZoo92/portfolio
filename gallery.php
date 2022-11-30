<?php
include_once 'header.php';
?>
    <main>
      <section class="hero_gallery">
        <video id="background-video" autoplay loop muted>
          <source
            src="./assets/videos/production ID_4067800.mp4"
            type="video/mp4"
          />
        </video>
		<h1>Design<br />Projects</h1>
		<div>
			<p><i>"</i>Designing simplicity<i>"</i></p>
			<p>- John Maeda</p>
		</div>
      </section>
      <section class="gallery" id="gallery">
        <div class="image__13 img_gallery">
          <img
            src="./assets/images/jpg/welcolm_to_my_world_digital_painting.jpg"
            alt="Digital painting made on Photoshop with a graphic tablet to make the cover page of my portfolio for art schools"
            title="Welcolm to my World"
          />
        </div>
        <div class="image__1 img_gallery">
          <img
            src="../assets/images/jpg/dessin_gon_vieux.jpg"
            alt="Personal drawing of old Gon of hunter x hunter as personnal part"
            title="Dark Gon"
          />
        </div>
        <div class="image__2 img_gallery">
          <img
            src="./assets/images/svg/elephant_moodboard.svg"
            alt="The objective was to make a moodboard of the animal of our choice in order to extract the most characteristic and interesting graphic components of the animal. Realized in art class"
            title="Elephant Moodboard"
          />
        </div>
        <div class="image__3 img_gallery">
          <img
            src="./assets/images/jpg/etiquette_vin.jpg"
            alt="Wine label for Pierre Chavin's domains as professional part"
            title="Wine label"
          />
        </div>
        <div class="image__4 img_gallery">
          <img
            src="./assets/images/svg/nba_record_datavisualisation.svg"
            alt="This is a datavisualisation of NBA records in regular season games as part of my maths and graphics course"
            title="NBA Record"
          />
        </div>
        <div class="image__5 img_gallery">
          <img
            src="./assets/images/jpg/dessin_portrait_femme.jpg"
            alt="Women's portrait drawing as personnal part"
            title="Women's portrait"
          />
        </div>
        <div class="image__6 img_gallery">
          <img
            src="./assets/images/jpg/ramifications_femme_plantes.jpg"
            alt="Ramification of a woman-plant using the photoshop pen tool as part of my graphics course"
            title="Woman Plant"
          />
        </div>
        <div class="image__7 img_gallery">
          <img
            src="./assets/images/png/gameboy_3d_blender.png"
            alt="3D Gameboy made in Blender as part of my audiovisual course"
            title="GameBoy"
          />
        </div>
        <div class="image__8 img_gallery">
          <img
            src="./assets/images/png/filtre_snap_peupleurai.png"
            alt="As personnal part Snap filter of my hood : Peupleurai"
            title="Snap Filter"
          />
        </div>
        <div class="image__9 img_gallery">
          <img
            src="./assets/images/jpg/dessin_sorcier_sans_visage.jpg"
            alt="drawing of wizard without face as personnal part"
            title="No Face Wizard"
          />
        </div>
        <div class="image__10 img_gallery">
          <img
            src="./assets/images/jpg/identité_visuelle_MisTiger.jpg"
            alt="Visual identity of a fictitious brand of electronic cigarettes MisTiger as part of my graphics course"
            title="MisTiger's Logo"
          />
        </div>
        <div class="image__11 img_gallery">
          <img
            src="./assets/images/jpg/giant_elephant_drawing.jpg"
            alt="Drawing of a giant elephant as personnal part"
            title="Huge Elephant"
          />
        </div>
        <div class="image__12 img_gallery">
          <img
            src="./assets/images/jpg/styles_typographiques.jpg"
            alt="Typographic style, photoshop work as part of my graphics course"
            title="Typographic Research"
          />
        </div>
        <div class="image__14 img_gallery">
          <img
            src="./assets/images/jpg/girl_with_demon_of_forest_drawing.jpg"
            alt="Drawing of a girl with demon of forest as personnal part"
            title="Forest Demon"
          />
        </div>
      </section>
      <section class="overlay_gallery">
        <img
          src="./assets/images/jpg/welcolm_to_my_world_digital_painting.jpg"
          alt="Digital painting made on Photoshop with a graphic tablet to make the cover page of my portfolio for art schools"
          title="Welcolm to my World"
        />
        <div class="info_overlay_gallery">
          <i class="bi bi-arrow-left back_gallery"></i>
          <h2>Welcolm to my World</h2>
          <p>
            Digital painting made on Photoshop with a graphic tablet to make the
            cover page of my portfolio for art schools
          </p>
        </div>
        <div style="width: 40%"></div>
      </section>
      <div
        style="height: 150vh; width: 100%; z-index: -5"
        class="triggerGallery"
      ></div>
    </main>
    <?php
include_once 'pointer.php';
?>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js" integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="./assets/js/import/ScrollTrigger.min.js"></script>  
  <script src="./assets/js/import/locomotive.js"></script>
  <script src="./assets/js/script/script.js"></script>
  <script src="./assets/js/script/gallery.js"></script>
</html>
