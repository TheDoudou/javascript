<?php
require_once "assets/lib/scssphp/scss.inc.php";
use Leafo\ScssPhp\Compiler;

$md5_scss = md5_file("assets/sass/pioupiou.scss");
$md5_data = file_get_contents("assets/data/pioupiou_md5", FILE_USE_INCLUDE_PATH);

if ($md5_scss != $md5_data) {
	$scss = new Compiler();
	$scss->setImportPaths('assets/sass/');
	$css = $scss->compile('@import "pioupiou.scss";');

	$file_css = fopen("assets/css/pioupiou.css", "w");
	$file_data = fopen("assets/data/pioupiou_md5", "w");
	fwrite($file_css, $css);
    fwrite($file_data, $md5_scss);
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Jeu Piou-Piou</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/pioupiou.css"/>
    </head>
    <body onload="menu()">
        <a href="index.html">Retour</a> - Mouvement : Fleche gauche/droite &nbsp;&nbsp;Tir : Espace<hr>
        Pseudo : <input type="text" id="nom">
        <input type="submit" id="start_stop" value="Start game" onclick="stateG()"> - Score : <span id="lscore">0</span> Nombre de coup : <span id="lcout">10</span><br><br>
        <canvas id="canvas" width="800" height="600">
            Utilisez un vrais navigateur merci ;).
        </canvas>
        <script src="assets/js/pioupiou.js" type="text/javascript"></script>
    </body>
</html>