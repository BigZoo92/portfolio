<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Discover my Web Designer portfolio of Front-End Development, UX/UI Design and Graphic Arts projects">
    <!-- Open Graph meta pour Facebook -->
    <meta property="og:title" content="Titre de la page" />
    <meta property="og:url" content="http://www.enzogivernaud.fr" />
    <meta property="og:image" content="./assets/images/png/home_portfolio.png" />
    <meta property="og:description" content="Discover my Web Designer portfolio of Front-End Development, UX/UI Design and Graphic Arts projects" />
    <meta property="og:site_name" content="Enzo GIVERNAUD | Front-End Developer | Portfolio" />
    <meta property="og:type" content="portfolio" />
    <!-- Card meta pour Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@OriginArtAll">
    <meta name="twitter:title" content="Enzo GIVERNAUD | Front-End Developer | Portfolio" />
    <meta name="twitter:description" content="Discover my Web Designer portfolio of Front-End Development, UX/UI Design and Graphic Arts projects" />
    <!-- Twitter summary card avec image large de 280x150px -->
    <meta name="twitter:image:src" content="./assets/images/png/home_portfolio_twitter.png" />
    <link rel="shortcut icon" href="./assets/images/png/logo_berserk_mark.png" type="image/x-icon">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" class="aos_css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Enzo GIVERNAUD | Front-End Developer | Portfolio</title>
</head>

<body>
    <header>
        <div class="menu_toggle" onmouseover="toggleMOver()" onmouseout="toggleMOut()">
            <span class="toggle_arm1"></span>
            <span class="toggle_arm2"></span>
            <p class="menu">menu</p>
            <p class="close">close</p>
        </div>
        <section class="overlay_header">
            <p class="copyright">E.Givernaud - © <i>2022</i></p>
            <div class="header_gauche">
                <nav>
                    <ul>
                        <li onmouseover="liOver1()" onmouseout="liOut1()" class="li1" onclick="toHome()">
                            <a href="enzogivernaud.fr#home">
                                <i class="head_01 i1">1.</i>
                                <div>
                                    <div class="li_top">
                                        <p class="li_letter11">H</p>
                                        <p class="li_letter11">o</p>
                                        <p class="li_letter11">m</p>
                                        <p class="li_letter11">e</p>
                                    </div>
                                    <div class="li_hover">
                                        <p class="li_letter12">H</p>
                                        <p class="li_letter12">o</p>
                                        <p class="li_letter12">m</p>
                                        <p class="li_letter12">e</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li onmouseover="liOver2()" onmouseout="liOut2()" class="li2" onclick="toAbout()">
                            <a href="enzogivernaud.fr#about-me" class="linkAbout">
                                <i class="i2">2.</i>
                                <div>
                                    <div class="li_top">
                                        <p class="li_letter21">A</p>
                                        <p class="li_letter21">b</p>
                                        <p class="li_letter21">o</p>
                                        <p class="li_letter21">u</p>
                                        <p class="li_letter21">t</p>
                                    </div>
                                    <div class="li_hover">
                                        <p class="li_letter22">A</p>
                                        <p class="li_letter22">b</p>
                                        <p class="li_letter22">o</p>
                                        <p class="li_letter22">u</p>
                                        <p class="li_letter22">t</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li onmouseover="liOver3()" onmouseout="liOut3()" class="li3" onclick="toWorks()">
                            <a href="enzogivernaud.fr#works">
                                <i class="i3">3.</i>
                                <div>
                                    <div class="li_top">
                                        <p class="li_letter31">W</p>
                                        <p class="li_letter31">o</p>
                                        <p class="li_letter31">r</p>
                                        <p class="li_letter31">k</p>
                                        <p class="li_letter31">s</p>
                                    </div>
                                    <div class="li_hover">
                                        <p class="li_letter32">W</p>
                                        <p class="li_letter32">o</p>
                                        <p class="li_letter32">r</p>
                                        <p class="li_letter32">k</p>
                                        <p class="li_letter32">s</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header_droite">
                <ul class="social_media">
                    <li>
                        <a href="https://github.com/BigZoo92" target="_blank" onmouseover="overPointer()" onmouseout="outPointer()">
                            <div class="rond_sm">
                                <i class="bi bi-github"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/enzo-givernaud-921061226/" target="_blank" onmouseover="overPointer()" onmouseout="outPointer()">
                            <div class="rond_sm">
                                <i class="bi bi-linkedin"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:enzo.givernaud.pro@gmail.com?subject=Project&body=Hello Mr Givernaud !" onmouseover="overPointer()" onmouseout="outPointer()">
                            <div class="rond_sm">
                                <i class="bi bi-envelope-fill"></i>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="contact_header">
                    <h6 onclick="window.location ='mailto:enzo.givernaud.pro@gmail.com?subject=Project&body=Hello Mr Givernaud !'">Contact me :</h6>
                    <p>enzo.givernaud.pro@gmail.com</p>
                </div>
            </div>
        </section>
    </header>
    <div class="pointer">
        <span></span>
    </div>

    <main id="cd_404">
        <h2>Enzo Givernaud | Portfolio // Not Found</h2>
        <hr>
        <p><i>This page</i> does not exist.</p>
        <a href="enzogivernaud.fr"><i class="bi bi-arrow-left"></i>Return to the place of</a>
        <h1>404</h1>
        <img src="./assets/images/gif/john_travolta_lost_meme.gif" alt="GIF John Travolta lost meme" title="GIF John Travolta lost meme" class="john_404">
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js" integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" class="aos_js"></script>
    <script src="./assets/js/script/script.js"></script>
</body>

</html>