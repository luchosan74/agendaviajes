<?php
class tablaModel{
  private $db;
  function __construct()
  {
    $this->db=$this->Connect();
  }
  private function Connect(){
    return new PDO('mysql:host=localhost;'
    .'dbname=adv;charset=utf8'
    , 'root', '');
  }
 
  function getViajes(){
    $sentencia = $this->db->prepare( "select * from viaje");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }

 

 
  function getviaje($id_usuario){
    $sentencia = $this->db->prepare("select * from viaje where id_usuario=? ");
    $sentencia->execute(array($id_usuario));
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function GetKmRecorridos($id_viaje){
    $sentencia = $this->db->prepare( "SELECT SUM(kmRecorridos) FROM estadistica WHERE id_viaje=?");
    $sentencia->execute(array($id_viaje));
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
  function GetKmRecorridosGral(){
    $sentencia = $this->db->prepare( "SELECT SUM(kmRecorridos) FROM estadistica");
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }
 

 
 
} 
?>
