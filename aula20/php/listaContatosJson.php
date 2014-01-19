<?php
//connect to db
include("db.php");
 
//sql query
$query = mysql_query("SELECT * FROM Contact") or die(mysql_error());
 
//interates the result and creates an array with each row
$rows = array();
while($contact = mysql_fetch_assoc($query)) {
    $rows[] = $contact;
}

//JSON
echo json_encode($rows);
?>