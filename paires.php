<?php

require_once "assets/lib/scssphp/scss.inc.php";
use Leafo\ScssPhp\Compiler;

$md5_scss = md5_file("assets/sass/paires.scss");
$md5_data = file_get_contents("assets/data/paires_md5", FILE_USE_INCLUDE_PATH);

if ($md5_scss != $md5_data) {
	$scss = new Compiler();
	$scss->setImportPaths('assets/sass/');
	$css = $scss->compile('@import "paires.scss";');

	$file_css = fopen("assets/css/paires.css", "w");
	$file_data = fopen("assets/data/paires_md5", "w");
	fwrite($file_css, $css);
    fwrite($file_data, $md5_scss);
    echo 'ok';
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Les paires</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/css/paires.css"/>
    </head>
    <body>
        <a href="index.html">Retour</a><hr>
        <div class="row">
            <div class="col-auto">
                <input type="submit" id="start" name="start" value="Start" onClick="start()"> - Timer : <span id="timer">00:00</span> - Score : <span id="score">0</span>
            </div>
        </div>
        <div class="wrap">
            <div class="game"></div>
        </div>
        <div class="board container-fluid" id="board">
        <!--<div class="row">
                <div class="col-auto scene scene-1-card"><div class="card" id="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-2-card"><div class="card" id="card1"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-3-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-4-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-5-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-6-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-7-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-8-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-9-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
            </div>
            <div class="row">
                <div class="col-auto scene scene-10-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-11-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-12-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-13-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-14-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-15-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-16-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-17-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-18-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
            </div>
            <div class="row">
                <div class="col-auto scene scene-19-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-20-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-21-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-22-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-23-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-24-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-25-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-26-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-27-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
            </div>
            <div class="row">
                <div class="col-auto scene scene-28-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-29-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-30-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-31-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-32-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-33-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-34-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-35-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
                <div class="col-auto scene scene-36-card"><div class="card"><div class="card__face card__face--front">Back</div><div class="card__face card__face--back"><div class="card__face card__face--front"><img src="" alt=""></div></div></div></div>
            </div>-->
        </div>
        <script src="assets/js/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="assets/js/popper-1.14.1.min.js" type="text/javascript"></script>
        <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="assets/js/paires.js" type="text/javascript"></script>
    </body>
</html>