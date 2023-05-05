<?php
    require_once('./conexion.php');
    $confirmacion=$_POST['confirmacion'];
    $apenom=$_POST['nombre'];
    $detalle=$_POST['detalle'];
    
    $q="INSERT INTO civil (confirmacion,apenom,detalles) VALUES ('$confirmacion','$apenom','$detalle')";
    $r=mysqli_query($conexion,$q);

    if($r){
        echo "<script> window.location='../index.html'; </script>";
    }else {
        echo "<script> window.location='../index.html; </script>";
    }
?>