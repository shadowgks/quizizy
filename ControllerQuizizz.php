<?php
include_once 'ModalQuizizz.php';

$get_data  = new GetData();
$data      = $get_data->Quiz();
$check_db     = $get_data->answerCorrect();


//fill from file newData.json
file_put_contents('assets/js/newData.json', $data);



//data request of ajax
$res_final = [];
$score = 0;
if (isset($_POST['your_answer'])) {
    $data = $_POST['your_answer'];

    //decode data
    $decode_data = json_decode($data, true);

    // create new array
    $separe_data = array();

    //loop data
    for ($i = 0; $i < count($decode_data); $i++) {
        if ($check_db[$i]['id'] == $decode_data[$i]['id']) {
            $score++;
        } else {
            $obj_data = array(
                'question'     => $decode_data[$i]['question'],
                'wrong_answer' => $decode_data[$i]['answer'],
                'right_answer' => $check_db[$i]['answer'],
                'explication'  => $decode_data[$i]['explication'],
            );
            array_push($separe_data, $obj_data);
        }
    }
    $res_final['result'] = $separe_data;
    $res_final['score'] = $score;
    echo json_encode($res_final);
}


// if (isset($_POST['your_answer'])) {
//     json_encode($res_final);
// }
