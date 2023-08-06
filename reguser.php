<!DOCTYPE html>
<html>

<head>
	<title>Insert Page page</title>
</head>

<body>
	
		<?php

		// servername => localhost
		// username => root
		// password => empty
		// database name => staff
		$conn = mysqli_connect("localhost", "root", "", "justplants");
		
		// Check connection
		if(isset($_POST['submit1']))
    {
		
		// Taking all 5 values from the form data(input)
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$dob = $_POST['dob'];
		
		
    $gender = $_POST['gender'];
		$pwd= $_POST['pwd'];
    $email = $_POST['email'];
    $no = $_POST['phone'];
		 
		
		// Performing insert query execution
		// here our table name is registrationuser
		$sql = "INSERT INTO user_reg VALUES ('$fname','$lname','$dob','$gender','$pwd','$email','$no')";
			
		
		if(mysqli_query($conn, $sql)){
			echo "<h3>data stored in a database successfully."
				;

			
		} else{
			echo "ERROR: Sorry data couldn't be stored! $sql. "
				. mysqli_error($conn);
		}

  }
		
		
		// Close connection
		mysqli_close($conn);
		?>
	
</body>

</html>