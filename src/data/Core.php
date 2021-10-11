<?php


namespace MyApp\Data;


class Core
{
    const IMAGES_DIRECTORY = '';
    const ICONS_DIRECTORY = '';
    const SITE_DIRECTORY = '';

    public function __construct()
    {
//		echo 'make database';
        define("IMAGES_DIRECTORY", '/images');
        define("ICONS_DIRECTORY", '/icons');
        define("SITE_DIRECTORY", '');
        define("CSS_DIRECTORY", '/assests/css');
        define("JS_DIRECTORY", '/assests/js');

    }

    public function arMenu_container()
    {
        $arMenu_container = [];
        $arMenu_container[] = [
            [
                'li_class' => 'first   page-5',
                'a_href'   => '/projekte',
                'a_text'   => 'Projekte',
            ],
            [
                'li_class' => ' page-111',
                'a_href'   => '/gewerbeobjekte',
                'a_text'   => 'Gewerbe',
            ],
            [
                'li_class' => ' page-38',
                'a_href'   => '/aktuelles/referenzen',
                'a_text'   => 'Referenzen',
            ],
            [
                'li_class' => 'last   page-18',
                'a_href'   => '/objektsuche',
                'a_text'   => 'Objektsuche',
            ],
        ];
        $arMenu_container[] = [
            [
                'li_class' => 'first   page-14',
                'a_href'   => '/aktuelles/baustellenberatung',
                'a_text'   => 'Baustellenberatung',
            ],
            [
                'li_class' => ' page-109',
                'a_href'   => '/',
                'a_text'   => 'Kapitalanlage',
            ],
            [
                'li_class' => ' page-29',
                'a_href'   => '/leistungen',
                'a_text'   => 'Leistungen',
            ],
            [
                'li_class' => 'last   page-91',
                'a_href'   => '/',
                'a_text'   => 'Grundstücksankauf',
            ],
        ];
        $arMenu_container[] = [
            [
                'li_class' => 'first   page-12',
                'a_href'   => '/ueber-strenger',
                'a_text'   => 'Über Karcher',
            ],
            [
                'li_class' => ' page-15',
                'a_href'   => '/aktuelles/strenger-news',
                'a_text'   => 'News/Presse',
            ],
            [
                'li_class' => ' page-10',
                'a_href'   => '/jobs',
                'a_text'   => 'Jobs',
            ],
            [
                'li_class' => 'last   page-19',
                'a_href'   => '/weitere-links/kontakt-anfahrt',
                'a_text'   => 'Kontakt',
            ],
        ];

        return $arMenu_container;
    }

    public function arMenu_bottom()
    {
        $arMenu_bottom = [];
        $arMenu_bottom[] = [
            'title'         => '<h5><a
                            href="/ueber-strenger">Unternehmen:</a>
                            </h5>',
            'menu vertical' => [
                [
                    'li_class' => 'first   page-12',
                    'a_href'   => '/ueber-strenger',
                    'a_text'   => 'Über Karcher',
                ],
                [
                    'li_class' => ' page-15',
                    'a_href'   => '/aktuelles/strenger-news',
                    'a_text'   => 'News/Presse',
                ],
                [
                    'li_class' => ' page-10',
                    'a_href'   => '/jobs',
                    'a_text'   => 'Jobs',
                ],
                [
                    'li_class' => 'last   page-19',
                    'a_href'   => '/weitere-links/kontakt-anfahrt',
                    'a_text'   => 'Kontakt',
                ],
            ],
        ];
        $arMenu_bottom[] = [
            'title'         => '<h5><a
                            href="/ueber-strenger">Unternehmen:</a>
                            </h5>',
            'menu vertical' => [
                [
                    'li_class' => 'first   page-12',
                    'a_href'   => '/ueber-strenger',
                    'a_text'   => 'Über Karcher',
                ],
                [
                    'li_class' => ' page-15',
                    'a_href'   => '/aktuelles/strenger-news',
                    'a_text'   => 'News/Presse',
                ],
                [
                    'li_class' => ' page-10',
                    'a_href'   => '/jobs',
                    'a_text'   => 'Jobs',
                ],
                [
                    'li_class' => 'last   page-19',
                    'a_href'   => '/weitere-links/kontakt-anfahrt',
                    'a_text'   => 'Kontakt',
                ],
            ],
        ];
        $arMenu_bottom[] = [
            'title'         => '<h5><a
                            href="/ueber-strenger">Unternehmen:</a>
                            </h5>',
            'menu vertical' => [
                [
                    'li_class' => 'first   page-12',
                    'a_href'   => '/ueber-strenger',
                    'a_text'   => 'Über Karcher',
                ],
                [
                    'li_class' => ' page-15',
                    'a_href'   => '/aktuelles/strenger-news',
                    'a_text'   => 'News/Presse',
                ],
                [
                    'li_class' => ' page-10',
                    'a_href'   => '/jobs',
                    'a_text'   => 'Jobs',
                ],
                [
                    'li_class' => 'last   page-19',
                    'a_href'   => '/weitere-links/kontakt-anfahrt',
                    'a_text'   => 'Kontakt',
                ],
            ],
        ];

        return $arMenu_bottom;
    }
}
