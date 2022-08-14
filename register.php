<?php
	    $username = $_POST['Username'];
        $email = $_POST['Email'];
        $password = $_POST['Password'];
	
	// Database connection
	$conn = new mysqli('bridalbells.mysql.database.azure.com','Bells@bridalbells','G7@Bridal','bridalbells_db');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into customer(User_name, Email, Password) values(?, ?, ?)");
		$stmt->bind_param("sss", $username, $email, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration Successful..";
        header('location: ../login.html');
		$stmt->close();
		$conn->close();
	}
?>
