<?php
include_once 'db/dbQuizizz.php';
$conn = DB::dbConnection();

class GetData
{
    function Questions()
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

    function Answers()
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
}
