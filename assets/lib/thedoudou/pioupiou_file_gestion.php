<?php
if(!empty($_POST['name'])){
    $name = $_POST['name'];
    $score = $_POST['score'];
    $file = file_get_contents('../../data/pioupiou_db.json');
    $json_decode = json_decode($file, true);
    for ($i = 0; $i < count($json_decode); $i++) {
        if($score > $json_decode[$i]['score']) {
            $json_decode[$i]['name'] = $name;
            $json_decode[$i]['score'] = $score;
            break;
        }
    }
    $json_encode = json_encode($json_decode);
    $file = fopen('../../data/pioupiou_db.json', 'w');
    fwrite($file, $json_encode);
    fclose($file);
}
?>