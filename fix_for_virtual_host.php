<?php


$class = "MyApp\\Data\\Core";
spl_autoload_register(function ($class) {
    include_once($_SERVER["DOCUMENT_ROOT"].'/src/data/Core.php');
});
$class = "MyApp\\Data\\Database";
spl_autoload_register(function ($class) {
    include_once($_SERVER["DOCUMENT_ROOT"].'/src/data/Database.php');
});


$class = "MyApp\\Content\\default_expand_horizontal";
spl_autoload_register(function ($class) {
    include_once($_SERVER["DOCUMENT_ROOT"]
        .'/src/content/default_expand_horizontal.php');
});

$class = "MyApp\\Content\\offset_section_mt_150";
spl_autoload_register(function ($class) {
    include_once($_SERVER["DOCUMENT_ROOT"]
        .'/src/content/offset_section_mt_150.php');
});
// instead in vendor/autoload.php

$class = "MyApp\\Content\\stage_slider_wrapper";
spl_autoload_register(function ($class) {
    include_once($_SERVER["DOCUMENT_ROOT"]
        .'/src/content/stage_slider_wrapper.php');
});

$class = "MyApp\\Content\\home_seo_block";
spl_autoload_register(function ($class) {
    include_once($_SERVER["DOCUMENT_ROOT"].'/src/content/home_seo_block.php');
});

$class = "MyApp\\Content\\offset_section_primary_background";
spl_autoload_register(function ($class) {
    include_once($_SERVER["DOCUMENT_ROOT"]
        .'/src/content/offset_section_primary_background.php');
});
