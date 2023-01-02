<?php
include_once 'ModalQuizizz.php';
$get_data  = new GetData();
$questions = $get_data->Questions();
$answers   = $get_data->Answers();

// var_dump($questions[0]['question']);
$data = array();
for ($i = 0; $i < count($questions); $i++) {
    $answers_array = array();
    for ($j = 0; $j < count($answers); $j++) {
        if ($questions[$i]['id'] == $answers[$j]['id_question']) {
            array_push($answers_array, $answers[$j]['answer']);
        }
        $join = array(
            'id' => $questions[$i]['id'],
            'question' => $questions[$i]['question'],
            'answer' => $answers_array,
            'explication' => $questions[$i]['explication']
        );
    }
    array_push($data, $join);
}
var_dump($data);
json_encode($data);
