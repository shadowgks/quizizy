<?php
include_once 'ModalQuizizz.php';
$get_data  = new GetData();
$data      = $get_data->Quiz();

//fill file newData.json
echo '<pre>' . $data . '</pre>';
file_put_contents('assets/js/newData.json', $data);



if(isset($_POST['arr'])){
    $data = $_POST['arr'];
    var_dump($data);
    die;
}