<?php


namespace MyApp\Content;

use MyApp\Data\Core;

$boolInit = new Core();

class default_expand_horizontal
{
    public function __construct()
    {
//        echo 'make content';
    }

    public function c316()
    {
        ob_start();
        ?>
        <section id="c316"
                 style="background-image: url('<?= IMAGES_DIRECTORY; ?>/default_expand_horizontal_545.jpg');"
                 class=" default expand-horizontal">
            <div class="section-content ">


                <div class="grid-x align-middle ">
                    <div class="cell">

                        <div class="home-ce-wrapper">
                            <div class="home-ce">
                                <div class="home-ce-innerwrap">
                                    <a
                                            href="/immobilien/neubau">
                                        <h1>
                                            Ausgezeichnet
                                        </h1></a><a
                                            href="/immobilien/neubau">
                                        <h4>
                                            HEILBRONN URBAN
                                            GARDEN IN DIE
                                            OFFICIAL
                                            SELECTION 2019
                                            DES FIABCI PRIX
                                            D&#039;EXCELLENCE
                                            GERMANY GEWÄHLT
                                        </h4></a>
                                    <div class="description">
                                        <p>Erneut wurde eine
                                            Karcher
                                            Immobilie
                                            von der
                                            hochkarätigen
                                            Jury des FIABCI
                                            Prix
                                            d'Excellence
                                            Germany unter
                                            die besten
                                            Bauprojekte des
                                            Jahres gewählt.
                                            Das Projekt
                                            URBAN GARDEN
                                            liegt auf dem
                                            Gelände der
                                            Bundesgartenschau
                                            2019. Neben der
                                            eindrücklichen
                                            Architektur und
                                            Fassadensprache
                                            würdigte die
                                            Jury
                                            besonders die
                                            Realisierung des
                                            Projekts als
                                            Holz-Beton-Hybridhaus,
                                            das die besten
                                            Eigenschaften
                                            von
                                            Massiv- und
                                            Holzbauweise mit
                                            intelligentem
                                            dezentralen
                                            Energie- und
                                            Wärmemanagement
                                            vereint als
                                            vorbildlichen
                                            Beitrag zur
                                            Entwicklung
                                            nachhaltigerer
                                            Bauweisen.</p>
                                    </div>
                                    <a class="back hide-content"><img
                                                class="arrow-icon-vertical"
                                                src="<?= ICONS_DIRECTORY; ?>/arrow-right.svg"
                                                width="32"
                                                height="59"
                                                alt=""/></a>
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
