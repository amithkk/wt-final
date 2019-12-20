<!DOCTYPE html>
<html lang="en">
<head>
    <title>PHP Search</title>

    <style>
    td{ padding: 40px;}
    #srch{padding: 5px; width: 282px;}
    table{width: 282px; text-align: center}
    </style>
</head>
<body>


<form method="POST">

    <input name=searchval id="srch" type=text placeholder="Enter Search Term"></input>
    <br>
    <input type="submit" name="showAll" value="Show ALL">
    <input type="submit" name="byID" value="Search By ID">
    <input type="submit" name="byName" value="Search By Name">
</form>


    <?php

        $query = '';
        

        if($_SERVER['REQUEST_METHOD'] == 'POST')
        {
            $conn = mysqli_connect('localhost', 'root', '', 'st_db');
            if(isset($_POST["showAll"])){
                $query = 'SELECT * FROM STUDENT';
            }
            else if(isset($_POST["byID"])){
                $query = "SELECT * FROM STUDENT WHERE USN = '".$_POST['searchval']."'";
            }
            else if(isset($_POST["byName"])){
                $query ="SELECT * FROM STUDENT WHERE NAME LIKE '%".$_POST['searchval']."%'";
            }
            
            $qv = mysqli_query($conn, $query);
            if($qv && mysqli_num_rows($qv) > 0){

                echo "<br><br><table border=1><tr><th>ID</th><th>Name</th></tr>";
                while($row = mysqli_fetch_assoc($qv))
                {
                    echo "<tr><td>".$row['usn']."</td><td>".$row['name']."</td>";
                }

            }
            else{
                mysqli_error($conn);
                echo "<br><br>No such entries.";
            }
        } 
    ?>
</body>
</html>


