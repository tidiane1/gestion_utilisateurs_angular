<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$nom = trim($request->nom);
$prenom = trim($request->prenom);
$pseudo = trim($request->pseudo);
$adresse = trim($request->adresse);
$telephone = trim($request->telephone);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$role = trim($request->role);
$mot_de_pass = mysqli_real_escape_string($mysqli, trim($request->mot_de_pass));
$date_ajout = trim($request->date_ajout);
$date_modification = trim($request->date_modification);
$supression = trim($request->supression);
$sql = "INSERT INTO utilisateurs(nom,prenom,pseudo,adresse,telephone,email,role,mot_de_pass,
date_ajout,date_modification,suppression) VALUES ('$nom','$prenom','$pseudo','$adresse','$telephone','$email'
,'$role','$mot_de_pass','$date_ajout','$date_modification','$suppression')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'nom' => $nom,
'prenom' => $prenom,
'pseudo' => $pseudo,
'adresse' => $adresse,
'telephone' => $telephone,
'email' => $email,
'role' => $role,
'mot_de_pass' => '',
'date_ajout' => $date_ajout,
'date_modification' => $date_modification,
'suppression' => $suppression,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>