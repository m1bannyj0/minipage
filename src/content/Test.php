<?php


namespace MyApp\Content;


class Test
{
    public function __construct()
    {
        echo 'make content';
    }

    public function abcd()
    {
        $content = <<<EOT

EOT;
        echo $content;
    }

    public function efgh()
    {
        ob_start();
        ?>
        <div class="crm_import_require_fields">
            <?= GetMessage('CRM_REQUIRE_FIELDS') ?>: <b><?= implode('</b>, <b>',
                    $arRequireFields) ?></b>.
        </div>
        <?
        $content = ob_get_contents();
        ob_end_clean();
        echo $content;
    }
}
