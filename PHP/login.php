<?php

$email = $_POST['Email'];
$password = $_POST['Password'];

$conn = new mysqli('bridalbells.mysql.database.azure.com','Bells@bridalbells','G7@Bridal','bridalbells_db');
if($conn->connect_error){
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("select * from customer where Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0){
        $data = $stmt_result->fetch_assoc();
        if($data['Password'] == $password){
            echo "Login Successfully";
            header('location: ../index.html');
            
        }else {
            echo "Invalid Email or Password";
        }

    }else {
        echo "Invalid Email or Password";
    }
}



?>