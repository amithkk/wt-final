<?php

    $q = '';
    $conn = mysqli_connect('localhost', 'root', '', 'st_db' );


    switch($_GET['query'])
    {
        case 'country':  $q = "SELECT * FROM COUNTRY"; break;
        case 'state': $q = "SELECT SID, SNAME FROM STATE where CID = ".$_GET['id']; break;
        case 'city': $q = "SELECT CTID, CTNAME FROM CITY where SID = ".$_GET['id']; break;
        default: die("<option> WRONGVAR </option>");
    }

    $rs = mysqli_query($conn, $q);
    $resp = '';
    while($r = mysqli_fetch_row($rs)){
        $resp = $resp."<option value=".$r[0].">".$r[1]."</option>";
    }

    echo $resp;


?>