<?php
include_once 'db/dbQuizizz.php';
$conn = DB::dbConnection();

class GetData
{
    private function Questions()
    {
        global $conn;
        //READ
        try {
            $stm = $conn->prepare("SELECT * FROM questions");
            $stm->execute();
            return $stm->fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    private function Answers()
    {
        global $conn;
        //READ
        try {
            $stm = $conn->prepare("SELECT * FROM answers");
            $stm->execute();
            return $stm->fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    //join data
    function Quiz()
    {
        $questions = $this->Questions();
        $answers   = $this->Answers();
        $data = array();
        for ($i = 0; $i < count($questions); $i++) {
            $answers_array = array();
            for ($j = 0; $j < count($answers); $j++) {
                if ($questions[$i]['id'] == $answers[$j]['id_question']) {
                    $object = array(
                        'id'      => $answers[$j]['id'],
                        'choix'   => $answers[$j]['answer']
                    );
                    array_push($answers_array, $object);
                }
            }
            $join = array(
                'id' => $questions[$i]['id'],
                'question' => $questions[$i]['question'],
                'answer' => $answers_array,
                'explication' => $questions[$i]['explication']
            );
            array_push($data, $join);
        }
        return json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
}
