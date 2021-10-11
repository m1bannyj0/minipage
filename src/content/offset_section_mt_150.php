<?php


namespace MyApp\Content;


class offset_section_mt_150
{
    public function __construct()
    {
//        echo 'make content';
    }

    public function c115()
    {
        ob_start();
        ?>
        <section id="c117"
                 class="mt-150 offset-section  fluid-height">
            <div class="grid-container ">
                <div class="grid-x ">
                    <div class="cell small-12            xxlarge-8 xxlarge-offset-2 sxxlarge-12 sxxlarge-offset-0">

                        <div id="c325"
                             class="frame frame-default  frame-type-header frame-layout-0">
                            <header><h2 class="">Jetzt Ihr
                                    neues Zuhause
                                    finden</h2></header>
                        </div>


                        <div id="c114"
                             class="frame frame-default  frame-type-list frame-layout-0">
                            <div class="tx-exc-immo">
                                <div class="landing-block-grid featured-projects-home">
                                    <div class="grid-x grid-margin-x">
                                        <div class="cell  xmedium-6 xxlarge-4">
                                            <div class="ce-media">
                                                <a
                                                        href="/projektdetail/sachsenheim-green-hills"><img
                                                            title="QUARTIER SACHSENHEIM GREEN HILLS"
                                                            alt="QUARTIER SACHSENHEIM GREEN HILLS"
                                                            src="<?= IMAGES_DIRECTORY; ?>/offset_section_mt_150_43.jpg"
                                                            width="555"
                                                            height="495"/>
                                                    <div class="slider-flag text-right"><span
                                                                class="flag-main">Beratung</span><span
                                                                class="flag-meta">jeden Donnerstag und Sonntag</span>
                                                    </div>
                                                    <div class="description">
                                                        <p>
                                                            Wohnen
                                                            in
                                                            Sachsenheim</p>
                                                        <h4 class="no-margin">


                                                            QUARTIER
                                                            SACHSENHEIM
                                                            GREEN
                                                            HILLS


                                                        </h4>
                                                        <img class="arrow-icon-vertical"
                                                             src="<?= ICONS_DIRECTORY; ?>/arrow-right.svg"
                                                             width="32"
                                                             height="59"
                                                             alt=""/>
                                                    </div>
                                                </a></div>
                                        </div>
                                        <div class="cell  xmedium-6 xxlarge-4">
                                            <div class="ce-media">
                                                <a
                                                        href="/projektdetail/wohnen-mit-betreuungskonzept"><img
                                                            title="LÖCHGAU LIVING TOGETHER – MIT BETREUUNGSKONZEPT"
                                                            alt="LÖCHGAU LIVING TOGETHER – MIT BETREUUNGSKONZEPT"
                                                            src="<?= IMAGES_DIRECTORY; ?>/offset_section_mt_150_79.jpg"
                                                            width="555"
                                                            height="495"/>
                                                    <div class="slider-flag text-right"><span
                                                                class="flag-main">Beratung</span><span
                                                                class="flag-meta">jeden Donnerstag</span>
                                                    </div>
                                                    <div class="description">
                                                        <p>
                                                            Wohnen
                                                            in
                                                            Löchgau</p>
                                                        <h4 class="no-margin">


                                                            LÖCHGAU
                                                            LIVING
                                                            TOGETHER
                                                            –
                                                            MIT
                                                            BETREUUNGSKONZEPT


                                                        </h4>
                                                        <img class="arrow-icon-vertical"
                                                             src="<?= ICONS_DIRECTORY; ?>/arrow-right.svg"
                                                             width="32"
                                                             height="59"
                                                             alt=""/>
                                                    </div>
                                                </a></div>
                                        </div>
                                        <div class="cell  xmedium-6 xxlarge-4">
                                            <div class="ce-media">
                                                <a href="/projektdetail/arkadien"><img
                                                            title="ARKADIEN ULM/DORNSTADT"
                                                            alt="ARKADIEN ULM/DORNSTADT"
                                                            src="<?= IMAGES_DIRECTORY; ?>/offset_section_mt_150_116.jpg"
                                                            width="555"
                                                            height="495"/>
                                                    <div class="slider-flag text-right"><span
                                                                class="flag-main">Bereits</span><span
                                                                class="flag-meta">über 90% verkauft</span>
                                                    </div>
                                                    <div class="description">
                                                        <p>
                                                            Wohnen
                                                            in
                                                            Dornstadt</p>
                                                        <h4 class="no-margin">


                                                            ARKADIEN
                                                            ULM/DORNSTADT


                                                        </h4>
                                                        <img class="arrow-icon-vertical"
                                                             src="<?= ICONS_DIRECTORY; ?>/arrow-right.svg"
                                                             width="32"
                                                             height="59"
                                                             alt=""/>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>
                                    <div class="projects-page-link text-center">
                                        <a
                                                class="button white"
                                                href="/objektsuche">zur
                                            Objektsuche</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
        <?
        $content = ob_get_contents();
        ob_end_clean();
        echo $content;
    }
}
