<?php

    $name =  $_POST['fname']." ".$_POST['lname'];
    $dob =  $_POST['dd']."-".$_POST['mm']."-".$_POST['yy'];
    $mob =  $_POST['phone'];
    $email =  $_POST['email'];
    $usn = $_POST['usn'];

    $conn = mysqli_connect('localhost', 'root', '', 'st_db');

    if(!$conn){
        die(mysqli_error($conn));
    }
    else{
        echo("Connection Successful<br>");
        $qry = mysqli_query($conn,
        "insert into reg values('$usn', '$name', '$dob', '$email', '$usn')"); 
        echo("Inserted Successfully.");       
    }

?>