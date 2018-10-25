<?php

require_once "assets/lib/scssphp/scss.inc.php";
use Leafo\ScssPhp\Compiler;

$md5_scss = md5_file("assets/sass/apiajax.scss");
$md5_data = file_get_contents("assets/data/apiajax_md5", FILE_USE_INCLUDE_PATH);

if ($md5_scss != $md5_data) {
	$scss = new Compiler();
	$scss->setImportPaths('assets/sass/');
	$css = $scss->compile('@import "apiajax.scss";');

	$file_css = fopen("assets/css/apiajax.css", "w");
	$file_data = fopen("assets/data/apiajax_md5", "w");
	fwrite($file_css, $css);
    fwrite($file_data, $md5_scss);
}
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Web Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/apiajax.css"/>
    </head>
    <body>
        <a href="index.html">Retour</a><hr>
            <blockquote class="quote" id="quote" style=""></blockquote>
        <script src="assets/js/apiajax.js" type="text/javascript"></script>
    </body>
</html>