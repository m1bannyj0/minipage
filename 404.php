<?php

$fp = fopen($_SERVER['DOCUMENT_ROOT'].'/404.txt', "a+");
fwrite($fp, $_SERVER['REQUEST_URI'].';'.$_SERVER['HTTP_REFERER']."\n");
fclose($fp);//
$strnotfound = $_SERVER['REQUEST_URI'];
$boolFullUrl = false;

?>
    <script type="text/javascript">
      history.go(-1);
    </script>

<?

die();

if (stripos($strnotfound, 'http') !== false) {
    $boolFullUrl = true;
    $strnotfound = str_replace('http://testl', '', $strnotfound);
}

$arnotfound = explode('/', $strnotfound);
$rempved = array_pop($arnotfound);
if (empty($arnotfound[0])) {
    array_shift($arnotfound);
}
$strnotfound = implode('/', $arnotfound);
$patchnotfound = sprintf(
    '%s/%s',
    $_SERVER["DOCUMENT_ROOT"],
    $strnotfound
);

$strfilenotfound = explode('?', $rempved)[0];
if ( ! file_exists($patchnotfound.'/'.$strfilenotfound)) {
    if ( ! file_exists($patchnotfound)) {
        /**
         * 0755 - Permission
         * true - recursive?
         */
        if ( ! mkdir($patchnotfound, 0755, true) && ! is_dir($patchnotfound)) {
            throw new RuntimeException(sprintf('Directory "%s" was not created',
                $patchnotfound));
        }
    }
    file_put_contents($patchnotfound.'/'.$strfilenotfound, "\n", FILE_APPEND);
}

