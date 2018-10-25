<?php

require_once "assets/lib/scssphp/scss.inc.php";
use Leafo\ScssPhp\Compiler;

$md5_scss = md5_file("assets/sass/jsclicker.scss");
$md5_data = file_get_contents("assets/data/jsclicker_md5", FILE_USE_INCLUDE_PATH);

if ($md5_scss != $md5_data) {
	$scss = new Compiler();
	$scss->setImportPaths('assets/sass/');
	$css = $scss->compile('@import "jsclicker.scss";');

	$file_css = fopen("assets/css/jsclicker.css", "w");
	$file_data = fopen("assets/data/jsclicker_md5", "w");
	fwrite($file_css, $css);
    fwrite($file_data, $md5_scss);
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>JavaScript Clicker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/jsclicker.css"/>
    </head>
    <body>
        <a href="index.html">Retour</a><hr>
        <div class="boxClic">
            <input type="submit" name="clic" id="clic" value="Clic" onclick="clic()" class="btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" name="multi" id="multi" value="Mutiplicateur X2" onclick="multiplicateur()" class="btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" name="autoclic" id="autoclic" value="Auto Clic 1 (500pts)" onclick="autoClic()" class="btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" name="booster" id="booster" value="Booster Clic (5000pts 30sec)" onclick="booster()" class="btn">
            <br><div id="affichage" class="affichage">Score : 0</div>
        </div>
        <script src="assets/js/jsclicker.js" type="text/javascript"></script>
    </body>
</html>