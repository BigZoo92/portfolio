<?php
include_once 'header.php';
?>
<section class="cd_loader">  
        <div class="loader">
			<span></span>
			<span></span>
		</div>
        <div class="progress-bar">
            <div class="loaded">
          </div>
    </section>
	<main id="laptop">
		<section class="hero" id="home">
			<div class="enzo_givernaud">
				<a href="#works" class="hero_works" onmouseover="overPointer()" onmouseout="outPointer()" onclick="toWorks()">
					My Works
				</a>
				<div class="enzo_creative">
					<h1 class="bigzoo">
						Creative
					</h1>
					<h1 class="enzo">
						Enzo
					</h1>
					<h1 class="creative">
						Creative
					</h1>
				</div>
				<div class="givernaud_developer">
					<div class="overlay_hero"></div>
					<h1 class="bigzoo">
						Givernaud
					</h1>
					<h1 class="givernaud">
						Givernaud
					</h1>
					<h1 class="developer">
						Developer
					</h1>
				</div>
			</div>
			<div class="wrap_text_scrolling">
				<p class="text_scrolling">
					<span>HTML <i>★</i> CSS <i>★</i> SCSS <i>★</i> Sass <i>★</i> JavaScript <i>★</i> Gsap <i>★</i>
						Jquery <i>★</i> Angular <i>★</i> Node.js <i>★</i> PHP <i>★</i> WordPress <i>★</i> MySQL <i>★</i>
						SEO <i>★</i> GitHub <i>★</i> Blender <i>★</i> Unity <i>★</i> Figma <i>★</i> Photoshop <i>★</i>
						AfterEffect <i>★</i> Canva <i>★</i></span>
				</p>
				<p class="text_scrolling text_scrolling2">
					<span>HTML <i>★</i> CSS <i>★</i> SCSS <i>★</i> Sass <i>★</i> JavaScript <i>★</i> Gsap <i>★</i>
						Jquery <i>★</i> Angular <i>★</i> Node.js <i>★</i> PHP <i>★</i> WordPress <i>★</i> MySQL <i>★</i>
						SEO <i>★</i> GitHub <i>★</i> Blender <i>★</i> Unity <i>★</i> Figma <i>★</i> Photoshop <i>★</i>
						AfterEffect <i>★</i> Canva <i>★</i></span>
				</p>
				</div>
				
		</section>
		<section class="cd_about_me" id="about-me">
			<div class="cd-basket-ball">
				<div class="basket-ball">
					<div class="line2"></div>
					<div class="line1"></div>
				</div>
			</div>
			<img src="./assets/images/svg/basket_of_basket_ball_icon.svg" alt="Icon of basket of basketball"
				class="basket_icon">
			<p class="text_about_1">Hi ! I'm <i> Enzo </i> and I'm 19, I'll introduce myself in 4 words</p>
			<p class="text_about_2">I have been playing <i> basketball </i> since I was 4 years old. I have acquired a
				team spirit and discipline that I use in my life</p>
			<p class="text_about_3">My passion for <i> art </i> in all its forms has allowed me to be curious and
				creative</p>
			<p class="text_about_4">I have turned my affection and ambition for <i> code </i> and new
				<i>technologies</i> into the vocation that will be mine
			</p>
			<p class="text_about_5">Congrats ! You have the <i>soul</i> of a basketball player</p>
			<img src="./assets/images/png/curry_meme.png" alt="Stephen Curry shocked basketball meme" class="curry">
		</section>

		</section>
		<div class="scroll_txt">
			<i class="bi bi-arrow-down"></i>
			<i class="bi bi-arrow-down"></i>
			<p>
				keep
				<br />
				scroll
			</p>
		</div>
		<section class="cd_works" id="works">
			<h1 class="works_title">Works</h1>
			<img src="./assets/images/png/beefrench.png" alt="Home page Beefrench WordPress custom theme website in HTML CSS SCSS Sass JavaScript and PHP by Enzo Givernaud"
				class="img_works beefrench_img">
				<img src="./assets/images/png/home_vosptitsoins.png" alt="Home page Vos P'tits Soins  website in HTML CSS JavaScript PHP and SQL by Enzo Givernaud"
				class="img_works ptitsoins_img">
				<img src="./assets/images/png/homepage_catchies_by_fear.png" alt="Home page catchies by fear interactive website in HTML CSS SCSS Sass and JavaScript by Enzo Givernaud"
				class="img_works catchies_img">
				<img src="./assets/images/jpg/art-greek-statue-image-torn-paper.jpg" alt="art greek statue image torn paper by Enzo Givernaud"
				class="img_works graphic_img">
			<nav>
				<ul class="list_works">
					<li onmouseover="liOverWorks(this)" onmouseout="liOutWorks(this)" class="liWorks_1" onclick="document.location.href = 'beefrench.php'">
						<a href="beefrench.php">
							<span class="revealWorks">B</span><span class="revealWorks">e</span><span
								class="revealWorks">e</span><span class="revealWorks">f</span><span
								class="revealWorks">r</span><span class="revealWorks">e</span><span
								class="revealWorks">n</span><span class="revealWorks">c</span><span
								class="revealWorks">h</span>
						</a>
						<p class="novisible">Beefrench</p>
						<p class="img_name">beefrench_img</p>
					</li>
					<li onmouseover="liOverWorks(this)" onmouseout="liOutWorks(this)"  class="liWorks_2" onclick="document.location.href = 'ptitsoins.php'">
						<a href="ptitsoins.php">
							<span class="revealWorks">P</span><span class="revealWorks">'</span><span
								class="revealWorks">t</span><span class="revealWorks">i</span><span
								class="revealWorks">t</span><span class="revealWorks">s</span><span
								class="revealWorks" style="padding-inline: 10px;"></span><span class="revealWorks">s</span><span
								class="revealWorks">o</span><span class="revealWorks">i</span><span class="revealWorks">n</span><span class="revealWorks">s</span>
						</a>
						<p class="novisible">P'tits<span style="padding-inline: 10px;"></span>soins</p>
						<p class="img_name">ptitsoins_img</p>
					</li>
					<li onmouseover="liOverWorks(this)" onmouseout="liOutWorks(this)" class="liWorks_3" onclick="document.location.href = 'catchiesbyfear.php'">
						<a href="catchiesbyfear.php">
							<span class="revealWorks">F</span><span class="revealWorks">e</span><span
								class="revealWorks">a</span><span class="revealWorks">r</span><span
								class="revealWorks">P</span><span class="revealWorks">r</span><span
								class="revealWorks">o</span><span class="revealWorks">j</span><span
								class="revealWorks">e</span><span class="revealWorks">c</span><span class="revealWorks">t</span>
						</a>
						<p class="novisible">FearProject</p>
						<p class="img_name">catchies_img</p>
					</li>
					<li onmouseover="liOverWorks(this)" onmouseout="liOutWorks(this)" class="liWorks_4" onclick="document.location.href = 'gallery.php'">
						<a href="gallery.php">
							<span class="revealWorks">G</span><span class="revealWorks">r</span><span
								class="revealWorks">a</span><span class="revealWorks">p</span><span
								class="revealWorks">h</span><span class="revealWorks">i</span><span
								class="revealWorks">c</span><span class="revealWorks">s</span>
						</a>
						<p class="novisible">Graphics</p>
						<p class="img_name">graphic_img</p>
					</li>
					
				</ul>
				<div class="overlay_links" onmouseover="liOverWorks(this)" onmouseout="liOutWorks(this)"></div>
			</nav>
		</section>
		<div style="height: 400vh;width: 100%;z-index: -10;"></div>
	</main>
	<section id="mobile">
		<section class="hero_mobile">
			<h2>Enzo Givernaud</h2>
			<h1>
				Front-end 
				<br />
				Developer
			</h1>
			<h3>Meet your next<br />
				front-end developer</h3>
			<a href="#">Let's Talk</a>
			<div class="scroll_txt">
				<i class="bi bi-arrow-down"></i>
				<i class="bi bi-arrow-down"></i>
				<p>
					keep
					<br />
					scroll
				</p>
			</div>
		</section>
		<section class="works_mobile">
				<div class="cd_project_mobile">
					<p class="date_project" data-aos="fade-right" >08/2022</p>
					<img src="./assets/images/png/beefrench.png" alt="Home page Beefrench WordPress custom theme website in HTML CSS SCSS Sass JavaScript and PHP by Enzo Givernaud" data-aos="fade-up" >
					<h4 data-aos="fade-left" >Beefrench</h4>
				</div>
				<div class="cd_project_mobile">
					<p data-aos="fade-right"  class="date_project">08/2022</p>
					<img data-aos="fade-up"  src="./assets/images/png/home_vosptitsoins.png" alt="Home page Vos P'tits Soins  website in HTML CSS JavaScript PHP and SQL">
					<h4 data-aos="fade-left" >Ptits soins</h4>
				</div>
				<div class="cd_project_mobile">
					<p data-aos="fade-right"  class="date_project">08/2022</p>
					<img data-aos="fade-up"  src="./assets/images/png/homepage_catchies_by_fear.png" alt="Home page catchies by fear interactive website in HTML CSS SCSS Sass and JavaScript">
					<h4 data-aos="fade-left">Catchies</h4>
				</div>
				<div class="cd_project_mobile">
					<p data-aos="fade-right" class="date_project">Design</p>
					<img data-aos="fade-up" src="./assets/images/jpg/art-greek-statue-image-torn-paper.jpg" alt="art greek statue image torn paper">
					<h4 data-aos="fade-left">My art</h4>
				</div>
		</section>
		<div style="width: 100%;height:210vh;"></div>
	</section>
	<footer>
		<p data-aos="fade-up">Getting <i>ready</i> for a new <i>venture</i> ?</p>
		<a data-aos="fade-up" href="">Let's talk</a>
		<p data-aos="fade-up" onclick="window.location ='mailto:enzo.givernaud.pro@gmail.com?subject=Project&body=Hello Mr Givernaud !'"><i>Contact</i> me by mail<i class="bi bi-arrow-up-right" onclick="window.location ='mailto:enzo.givernaud.pro@gmail.com?subject=Project&body=Hello Mr Givernaud !'"></i></p>
		<ul class="social_media">
			<li data-aos="fade-up">
				<a href="https://github.com/BigZoo92">
					<div class="rond_sm">
						<i class="bi bi-github"></i>
					</div>
				</a>
			</li>
			<li data-aos="fade-up">
				<a href="https://www.linkedin.com/in/enzo-givernaud-921061226/">
					<div class="rond_sm">
						<i class="bi bi-linkedin"></i>
					</div>
				</a>
			</li>
			<li data-aos="fade-right">
				<a href="mailto:enzo.givernaud.pro@gmail.com?subject=Project&body=Hello Mr Givernaud !" >
					<div class="rond_sm">
						<i class="bi bi-envelope-fill"></i>
					</div>
				</a>
			</li>
		</ul>
	</footer>
<?php
include_once 'pointer.php';
?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js" class="aos_js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
<script src="./assets/js/import/ScrollTrigger.min.js"></script>
<script src="./assets/js/script/script.js"></script>
<script src="./assets/js/script/home.js"></script>

</html>