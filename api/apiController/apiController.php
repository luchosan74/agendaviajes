<?php
require_once "api.php";
require_once "./../model/tablaModel.php";
class apiController extends api{
  private $model;
    function __construct(){
      parent::__construct();
      $this->model=new tablaModel();
    }
    function getViaje($param=null){
      if(isset($param)){
       $id_usuario=$param[0];
        $arreglo=$this->model->getViaje($id_usuario);
        $data=$arreglo;
      }
      else{
        $data=$this->model->getViajes();
      }
      if (isset($data)){
           return $this->jsonResponse($data,200);
      }
      else{
        return $this->jsonResponse(null,404);
      }
    }
    

     ?>
