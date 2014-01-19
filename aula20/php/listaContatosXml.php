<?php
header('Content-type: text/xml');

//connect to db
include("db.php");
 
//sql query
$query = mysql_query("SELECT * FROM Contact") or die(mysql_error());
 
//interates the result and creates an array with each row
$xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
$xml.="<contatos>";

$rows = array();
while($contato = mysql_fetch_assoc($query)) {
    $xml.=   "<contato>";
    $xml.=      "<id>" . $contato['ID'] . "</id>";
    $xml.=      "<nome>" . $contato['nome'] . "</nome>";
    $xml.=      "<email>" . $contato['email'] . "</email>";
    $xml.=   "</contato>";
}

$xml.="</contatos>";
      
//envia resultado do XML
echo $xml;

?>