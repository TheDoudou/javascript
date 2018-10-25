<?php
require_once "assets/lib/scssphp/scss.inc.php";
use Leafo\ScssPhp\Compiler;

//$md5_scss = md5_file("assets/sass/pendu.scss");
$md5_data = file_get_contents("assets/data/pendu_md5", FILE_USE_INCLUDE_PATH);

if ($md5_scss != $md5_data) {
	$scss = new Compiler();
	$scss->setImportPaths('assets/sass/');
	$css = $scss->compile('@import "pendu.scss";');

	$file_css = fopen("assets/css/pendu.css", "w");
	$file_data = fopen("assets/data/pendu_md5", "w");
	fwrite($file_css, $css);
    fwrite($file_data, $md5_scss);
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Jeu Pendu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/pioupiou.css"/>
    </head>
    <body onload="">
        <a href="index.html">Retour</a><hr>
        <input type="submit" id="start_stop" value="Pend toi" onclick="stateG()">
        <script src="assets/js/pendu.js" type="text/javascript"></script>
    </body>
</html>