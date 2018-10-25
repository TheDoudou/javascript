<?php
if(!empty($_GET['name']) && $_GET['score'] <= 110) {
    $name = $_GET['name'];
    $score = $_GET['score'];
    $file = file_get_contents('../../data/pioupiou_db.json');
    $json_decode = json_decode($file, true);
    for ($i = 0; $i < count($json_decode); $i++) {
        if($score > $json_decode[$i]['score']) {
            $data[$i]['name'] = $name;
            $data[$i]['score'] = $score;
            array_splice( $json_decode, $i, 0, $data );
            array_pop($json_decode);
            break;
        }
    }
    $json_encode = json_encode($json_decode);
    $file = fopen('../../data/pioupiou_db.json', 'w');
    fwrite($file, $json_encode);
    fclose($file);

    print_r($json_encode);
}
?>