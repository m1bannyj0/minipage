<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <?php
    
    use MyApp\Data\Database;
    use MyApp\Content;
    use MyApp\Data\Core;

    require_once realpath("vendor/autoload.php");

    $initCore = new Core();

    $strUrlHost = ''; //ht_tp://www.Karcher.de
    $strUrlHttpSite = ''; //htt_ps://www.Karcher.de

    $rundata = new Database();

    //    $cssjsdir = '/typo3temp/assets';

    ?>


    <meta charset="utf-8">


    <title>Karcher Gruppe | Karcher Bauen und Wohnen</title>
    <meta name="generator" content="TYPO3 CMS"/>
    <meta name="description"
          content="Die Karcher Gruppe bietet alle Leistungen rund um Immobilien aus einer Hand und steht für exklusive Eigentumswohnungen und durchdachte Siedlungskonzepte, Neubauwohnungen und Gebrauchtimmobilien im Grossraum Stuttgart."/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"/>
    <meta name="application-name" content="Webpage"/>
    <meta property="og:site_name" content="Karcher BAUEN UND WOHNEN"/>
    <meta property="og:description" content="page:description"/>
    <meta property="og:locale" content="de_DE"/>
    <meta property="og:locale:alternate" content="de_DE"/>
    <meta property="og:locale:alternate" content="en_US"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="language" content="de"/>


    <link rel="stylesheet" type="text/css"
          href="<?= CSS_DIRECTORY; ?>/merged-772e5f3bcb9b9f107eaec81e8047a6a8-9eb85b37da72a4ab745f2432eb2d0f11.css?1626259390"
          media="all">


    <!--    <script src="-->
    <? //= $cssjsdir; ?><!--/compressed/merged-2bfaadf64771431d21fa12490134212b-7fc2cd7672011c45060f430033bb7d76.js?1626259390"-->
    <!--            type="text/javascript"></script>-->
    <script src="<?= JS_DIRECTORY; ?>/jquery-3.6.0.js.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/flickity.pkgd.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/flickity.pkgd.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/jquery.fancybox.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/jquery-ui.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/select2.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/jquery.form.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/jquery.columnizer.min.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/lazysizes.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/js-cookie.js"
            type="text/javascript"></script>
    <script src="<?= JS_DIRECTORY; ?>/main.js"
            type="text/javascript"></script>


    <!--    <script src="-->
    <? //= $cssjsdir; ?><!--/compressed/merged-1403c7fb77692100580a1702d69f8d42-a0d656a15debf48bc89f47e571722e67.js?1626259390"-->
    <!--            type="text/javascript"></script>-->


    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
    <!-- Google Tag Manager -->
    <script data-ignore="1" data-cookieconsent="statistics" type="text/plain">

    </script>
    <!-- End Google Tag Manager -->

    <script data-ignore="1" data-cookieconsent="statistics"
            type="text/plain"></script>
    <link rel="canonical" href="<?= $strUrlHost; ?>/"/>
</head>
<body>


<a id="main"></a>

<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
            height="0" width="0"
            style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="off-canvas-wrapper">
    <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        <div class="off-canvas position-top top-menu" id="offCanvas"
             data-off-canvas data-position="top"
             data-transition="overlap">
            <div class="grid-container position-relative">

                <div class="grid-x align-middle menu-container">
                    <div class="cell small-6 sxxlarge-offset-0">
                        <div class="logo"><a href="/"><img
                                        src="<?= ICONS_DIRECTORY; ?>/Karcher_logo_mit_claim.svg"
                                        width="100" height="100" alt=""
                                        border="0"></a></div>
                    </div>
                    <div class="cell small-6 text-right">
                        <button class="close-button" aria-label="Close menu"
                                type="button" data-close>
                            <img src="<?= ICONS_DIRECTORY; ?>/menu-close.svg"
                                 width="34"
                                 height="34" alt=""/>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div class="grid-x grid-margin-x align-bottom menu-container">
                    <?
                    $arMenu_container = $initCore->arMenu_container();

                    foreach ($arMenu_container as $key => $value) {
                        $var = $value;
                        echo '<div class="cell small-12 large-4">
                        <ul class="menu vertical meta-menu">';
                        $r = array_walk($value, function ($item) use ($value) {
                            $var = $item;
                            echo sprintf('<li class="%s">
                                <a href="%s">%s</a>
                            </li>',
                                $item['li_class'],
                                $item['a_href'],
                                $item['a_text'],
                            );
                        });
                        echo '</ul>
                    </div>';
                    }
                    ?>


                </div>

            </div>
        </div>

        <div class="off-canvas position-right primary-background"
             id="offCanvasRight" data-off-canvas
             data-position="right" data-transition="overlap">
            <div class="grid-container">
                <div class="grid-x align-middle">
                    <div class="cell">
                        <a class="contact-close" aria-label="Close menu"
                           data-close>
                            <img src="<?= ICONS_DIRECTORY; ?>/contact-close.svg"
                                 width="119"
                                 height="150" alt=""/>
                        </a>


                        <div id="c129"
                             class="frame frame-default  frame-type-text frame-layout-0">
                            <h5><strong>Rufen Sie
                                    uns an:</strong></h5>
                            <h1>07141/47 77-0</h1><h5><strong>oder nutzen Sie
                                    unser Kontaktformular:</strong></h5></div>


                        <div id="contact-form-wrapper"></div>

                    </div>
                </div>
            </div>
        </div>


        <div class="off-canvas-content" data-off-canvas-content>

            <header class="top grid-container">
                <div class="grid-x grid-margin-x align-middle menu-container">
                    <div class="cell small-6">
                        <div class="logo"><a href="/"><img
                                        src="<?= ICONS_DIRECTORY; ?>/Karcher_logo_mit_claim.svg"
                                        width="100" height="100" alt=""
                                        border="0"></a></div>
                    </div>
                    <div class="cell small-6">
                        <div class="mobile-menu-wrapper">
                            <a class="menu-open" data-toggle="offCanvas">
                                <div class="hamburger"><span>MENU</span></div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>


            <main id="main">


                <div class="row">
                    <div class="small-12 columns">
                        <div class="content no-visual">

                            <?
                            $cnt = new MyApp\Content\stage_slider_wrapper();
                            $f = $cnt->c306();
                            ?>

                            <?
                            $cnt = new MyApp\Content\home_seo_block();
                            $f = $cnt->c394();
                            ?>

                            <?
                            $cnt
                                = new MyApp\Content\default_expand_horizontal();
                            $f = $cnt->c316();
                            ?>

                            <?
                            $cnt
                                = new MyApp\Content\offset_section_primary_background();
                            $f = $cnt->c115();
                            ?>

                            <?
                            $cnt = new MyApp\Content\offset_section_mt_150();
                            $f = $cnt->c115();
                            ?>

                            <?
                            $cnt
                                = new MyApp\Content\offset_section_primary_background();
                            $f = $cnt->c440();
                            ?>
                        </div>
                    </div>
                </div>


            </main>


            <footer>
                <div class="grid-container">
                    <div class="grid-x align-middle logo-holder">
                        <div class="cell small-6"></div>
                        <div class="cell small-6 text-right">
                            <a class="back-to-top scrool-to-target"
                               href="#main">
                                nach oben
                                <span>
                            <img class="arrow-icon-horisontal"
                                 src="<?= ICONS_DIRECTORY; ?>/arrow-up-magenta.svg"
                                 width="32" height="18" alt=""/>
                        </span>
                            </a>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="cell large-3 xmedium-6 small-12 immo-block">
                            <h5><a href="/projekte">Immobilien:</a>
                            </h5>
                            <ul class="menu vertical"></ul>
                        </div>
                        <?
                        $arMenu_bottom = $initCore->arMenu_bottom();
                        foreach ($arMenu_bottom as $ar) {
                            echo '<div class="cell large-3 xmedium-6 small-12">';
                            foreach ($ar as $key => $value) {
                                $var = $value;
                                if ($key == 'title') {
                                    echo $value;
                                } else {
                                    echo '<ul class="menu vertical">';
                                    $r = array_walk($value,
                                        function ($item) use ($value) {
                                            $var = $item;
                                            echo sprintf('<li class="%s">
                                <a href="%s">%s</a>
                            </li>',
                                                $item['li_class'],
                                                $item['a_href'],
                                                $item['a_text'],
                                            );
                                        });
                                    echo '</ul>';
                                }
                            }
                            echo '</div>';
                        }
                        ?>


                        <div class="cell small-3 hide"><h5><a
                                        href="/elements"></a></h5></div>
                    </div>
                    <div class="grid-x">
                        <div class="cell text-right social">
                     <span>
                         <a href="https://www.linkedin.com/Karcher/"
                            alt="Linkedin" target="_blank">
                             <img src="<?= ICONS_DIRECTORY; ?>/linkedin.svg"
                                  width="80"
                                  height="80" alt=""/>
                         </a>
                     </span>

                            <span>
                        <a href="" alt="Facebook" target="_blank">
                            <img src="<?= ICONS_DIRECTORY; ?>/facebook.svg"
                                 width="80"
                                 height="80" alt=""/>
                        </a>
                    </span>

                            <span>
                        <a href="https://www.instagram.com/Karcher_bauen_und_wohnen/"
                           alt="Instagram" target="_blank">
                            <img src="<?= ICONS_DIRECTORY; ?>/instagram.svg"
                                 width="80"
                                 height="80" alt=""/>
                        </a>
                    </span>

                            <span>
                        <a href="https://www.youtube.com/channel/Karcher-qQk0AjHQBRiE3OA"
                           alt="YouTube"
                           target="_blank">
                            <img src="<?= ICONS_DIRECTORY; ?>/" width="80"
                                 height="80" alt=""/>
                        </a>
                    </span>
                        </div>
                    </div>
                </div>
            </footer>


            <a data-ajaxuri="/weitere-links/kontakt-anfahrt?tx_form_formframework%5Baction%5D=perform&amp;tx_form_formframework%5Bcontroller%5D=FormFrontend&amp;tx_typoscriptrendering%5Bcontext%5D=%7B%22record%22%3A%22tt_content_574%22%2C%22path%22%3A%22tt_content.form_formframework.20%22%7D&amp;cHash=cac7b20c5d52b765b59d6d48d7821db1 #c574"
               data-toggle="offCanvasRight" data-target="#contact-form-wrapper"
               class="contact-open" title="Kontakt"
               href="/weitere-links/kontakt-anfahrt">
                <img class="default-icon"
                     src="<?= ICONS_DIRECTORY; ?>/contact-open.svg"
                     width="119" height="150" alt=""/>
                <img class="inverse-icon"
                     src="<?= ICONS_DIRECTORY; ?>/contact-open-alt.svg"
                     width="119" height="150" alt=""/>
            </a>

        </div>
    </div>
</div>
<div id="loading-div"></div>

<!--<script src="-->
<? //= $cssjsdir; ?><!--/compressed/merged-ae47a000c10f8f3ec3a338ef7670729c-c6602a4974a38767113170e02fe7f99d.js?1626259390"-->
<!--type="text/javascript"></script>-->
<script src="<?= JS_DIRECTORY; ?>/misc.js" type="text/javascript"></script>

<!-- Facebook Pixel Code -->


<!-- End Facebook Pixel Code -->

<!-- MK7: 2020_01_13: LinkedIn -->


<!-- Begin Cookie Consent plugin by Dirk Persky - https://github.com/DirkPersky/typo3-dp_cookieconsent -->
<script type="text/plain" data-ignore="1" data-dp-cookieDesc="layout">
    Wir nutzen Cookies auf unserer Website. Einige sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.


    <a aria-label="learn more about cookies"
       role=button tabindex="0"
       class="cc-link"
       href="/weitere-links/datenschutz"
       rel="noopener noreferrer nofollow"
       target="_blank"
    >
        Mehr Informationen
    </a>















</script>
<script type="text/plain" data-ignore="1" data-dp-cookieSelect="layout">
    <div class="dp--cookie-check" xmlns:f="http://www.w3.org/1999/html">
    <label for="dp--cookie-require">
        <input type="hidden" name="" value="" /><input disabled="disabled" class="dp--check-box" id="dp--cookie-require" type="checkbox" name="" value="" checked="checked" />
        Notwendig
    </label>
    <label for="dp--cookie-statistics">
        <input class="dp--check-box" id="dp--cookie-statistics" type="checkbox" name="" value="" />
        Statistiken
    </label>
    <label for="dp--cookie-marketing">
        <input class="dp--check-box" id="dp--cookie-marketing" type="checkbox" name="" value="" />

    </label>
</div>














</script>
<script type="text/plain" data-ignore="1" data-dp-cookieRevoke="layout">
    <div class="cc-revoke dp--revoke {{classes}}">
    <i class="dp--icon-fingerprint"></i>
    <span class="dp--hover">Cookies</span>
</div>
















</script>
<script type="text/plain" data-ignore="1" data-dp-cookieIframe="layout">
    <div class="dp--overlay-inner">
    <div class="dp--overlay-header">{{notice}}</div>
    <div class="dp--overlay-description">{{desc}}</div>
    <div class="dp--overlay-button">
        <button class="db--overlay-submit" onclick="window.DPCookieConsent.forceAccept(this)"
                data-cookieconsent="{{type}}" {{style}}>
        {{btn}}
        </button>
    </div>
</div>














</script>
<script type="text/javascript" data-ignore="1">
  window.cookieconsent_options = {
    overlay: {
      notice: true,
      box: {
        background: '#42474d',
        text: '#fff',
      },
      btn: {
        background: '#b81839',
        text: '#fff',
      },
    },
    content: {
      message: 'Wir nutzen Cookies auf unserer Website. Einige sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.',
      dismiss: 'Auswahl akzeptieren',
      allow: 'Auswahl akzeptieren',
      deny: 'Ablehnen',
      link: 'Mehr Informationen',
      href: '/weitere-links/datenschutz',
      target: '_blank',

      media: {
        notice: 'Cookie-Hinweis',
        desc: 'Durch das Laden dieser Ressource wird eine Verbindung zu externen Servern hergestellt, die Cookies und andere Tracking-Technologien verwenden, um die Benutzererfahrung zu personalisieren und zu verbessern. Weitere Informationen finden Sie in unserer Datenschutzerklärung.',
        btn: 'Erlaube Cookies und lade diese Ressource',
      },

      'allow-all': 'Alle akzeptieren',
    },
    autoOpen: true || false,
    layout: 'dpextend',
    theme: 'edgeless',
    position: 'bottom-left',
    type: 'opt-in',
    revokable: true,
    reloadOnRevoke: false,
    checkboxes: {'statistics': 'false', 'marketing': 'false'},
    dismissOnScroll: parseInt('') || false,
    palette: {
      popup: {
        background: 'rgba(0,0,0,.8)',
        text: '#fff',
      },
      button: {
        background: '#f4920a',
        text: '#fff',
      },
    },
  };
</script>
<!-- End Cookie Consent plugin -->
</body>
</html>
