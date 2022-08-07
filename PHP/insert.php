<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['Username']) && isset($_POST['Email']) &&  isset($_POST['Password']) ) 
    {
        
        $username = $_POST['Username'];
        $email = $_POST['Email'];
        $password = $_POST['Password'];
       

        $host = "bridalbells.mysql.database.azure.com";
        $dbUsername = "Bells";
        $dbPassword = "G7@bridal";
        $dbName = "bridalbells_db";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT Email FROM customer WHERE Email = ? LIMIT 1";
            $Insert = "INSERT INTO customer(User_name, Email, Password) values(?, ?, ?)";

            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("ssssii",$username, $email, $password);
                if ($stmt->execute()) {
                    echo "New User Registerd Sucessfully!";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone has already registerd using this email! Try anything else!";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}
?>