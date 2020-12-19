<?php
   require_once "Connection.php";

   $result = query("SELECT pr.nome_produto, pr.precofinal, SUM(p.quantidade) AS total FROM pedidos AS p INNER JOIN produto AS pr on p.idprod = pr.idproduto GROUP BY pr.nome_produto ORDER BY SUM(p.quantidade) DESC");
   $pedidos = [];
   
   while($row = mysqli_fetch_assoc($result)){
    $pedidos[] = $row;
   }

   header("Access-Control-Allow-Origin:*");
   echo json_encode($pedidos);





