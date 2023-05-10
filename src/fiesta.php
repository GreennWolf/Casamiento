<?php
    require_once('./conexion.php');
    $confirmacion_no = $_POST['confirmacion-no'];
    $confirmacion_si = $_POST['confirmacion-si'];
    $apenom=$_POST['nombre'];
    $detalle=$_POST['detalle'];
    
    $confirmacion = '';

    if ($confirmacion_no == 'on') {
        $confirmacion = 'no';
        echo $confirmacion_no;
    } else {
        $confirmacion = 'si';
    }


    $q="INSERT INTO fiesta (confirmacion,apenom,detalles) VALUES ('$confirmacion','$apenom','$detalle')";
    $r=mysqli_query($conexion,$q);

    if($r){
        echo "<script> window.location='../index.html'; </script>";
    }else {
        echo "<script> window.location='../index.html; </script>";
    }
