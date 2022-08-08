<?php
	    $username = $_POST['Username'];
        $email = $_POST['Email'];
        $password = $_POST['Password'];
	
	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into register(User_name, Email, Password) values(?, ?, ?)");
		$stmt->bind_param("sss", $username, $email, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration Successful..";
		$stmt->close();
		$conn->close();
	}
?>
