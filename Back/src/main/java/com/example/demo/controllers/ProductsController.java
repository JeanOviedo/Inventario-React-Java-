package com.example.demo.controllers;




import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.ProductsModel;
import com.example.demo.services.ProductsService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/products")
public class  ProductsController {
    @Autowired
    ProductsService productsService;

    @GetMapping()
    public ArrayList<ProductsModel> obtenerProductos(){
        return productsService.obtenerProductos();
    }
    

   

    @PostMapping()
    public ProductsModel guardarProductos(@RequestBody ProductsModel usuario){
        return this.productsService.guardarProductos(usuario);
    }


    @PutMapping(path = "/{id}")
    public ProductsModel  updateProductos(@RequestBody ProductsModel usuario, @PathVariable int id) {
        return productsService.updateProductos(usuario, id);
    }





    
    

    @GetMapping( path = "/{id}")
    public Optional<ProductsModel> obtenerUsuarioPorId(@PathVariable("id") Long id) {
        return this.productsService.obtenerPorId(id);
    }

   

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping( path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.productsService.eliminarProducto(id);
        if (ok){
            return "Se eliminó producto " + id;
        }else{
            return "No se pudo eliminar producto" + id;
        }
    }

}