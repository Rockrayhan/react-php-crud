<?php 

require 'db_connection.php' ;

$abc = json_decode(file_get_contents("php://input"));

    if ( isset( $abc->data->name ) && !empty($abc->data->name) && isset($abc->data->email) && !empty( $abc->data->email)) {

        $name = $abc->data->name ;
        $email = $abc->data->email ;

$sql = "INSERT INTO user VALUES(NULL, '$name', '$email', now())";
    $db_conn->query($sql);

    if($db_conn->affected_rows>0){
        echo json_encode(["msg"=>"Successfuly Inserted"]);

    } else {
        echo json_encode(["msg"=>"Some Problem Occured"]);
    }
} else {
    echo json_encode(["msg"=>"Empty Not Allowed"]);
}



?> 