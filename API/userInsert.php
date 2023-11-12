<?php 

require 'db_connection.php' ;

$abc = json_decode(file_get_contents("php://input"));

$name = $abc->data->name ;
$email = $abc->data->email ;

$sql = "INSERT INTO user VALUES(NULL, '$name', '$email', now())";
    $db_conn->query($sql);

    if($db_conn->affected_rows>0){
        echo "Success";
    } else {
        echo "Problem" ;
    }



?> 