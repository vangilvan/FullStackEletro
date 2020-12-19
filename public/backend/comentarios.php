<?php
   require_once "Connection.php";

   $result = query("SELECT * FROM comentarios");
   $comentarios = [];
   
   while($row = mysqli_fetch_assoc($result)){
       $comentarios[] = $row;
   }

   header("Access-Control-Allow-Origin:*");
   echo json_encode($comentarios);