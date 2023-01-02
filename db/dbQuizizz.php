<?php
class DB
{
    private static $dbHost     = "localhost";
    private static $dbUsername = "root";
    private static $dbPassword = "";
    private static $dbName     = "quizizz";

    //Methode dbConnection
    public static function dbConnection()
    {
        // Connect to the database
        try {
            $conn = new PDO("mysql:host=" . self::$dbHost . ";dbname=" . self::$dbName . ';', self::$dbUsername, self::$dbPassword);
            $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Failed to connect with MySQL: " . $e->getMessage());
        }
        return $conn;
    }
}
