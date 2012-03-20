 <?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['contatos'];

	$data = json_decode(stripslashes($info));

	$nome = $data->nome;
	$email = $data->email;
	$id = $data->id;
	 
	//consulta sql
	$query = sprintf("UPDATE Contato SET nome = '%s', email = '%s' WHERE id=%d",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($email),
		mysql_real_escape_string($id));

	$rs = mysql_query($query);
	 
	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
?>