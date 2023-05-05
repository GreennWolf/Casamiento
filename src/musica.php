<?php
    require_once('./conexion.php');
    $apenom=$_GET['nombre'];
    $cancion=$_GET['cancion'];
    $link=$_GET['link'];
    
    $q="INSERT INTO musica (apenom,cancion,link) VALUES ('$apenom','$cancion','$link')";
    $r=mysqli_query($conexion,$q);

    if($r){
        echo "<script> window.location='../index.html'; </script>";
    }else {
        echo "<script> window.location='../index.html; </script>";
    }

?>