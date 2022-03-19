

package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.ProductsModel;
import com.example.demo.repositories.ProductsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductsService  {
    @Autowired
    ProductsRepository productsRepository;
    
    public ArrayList<ProductsModel> obtenerProductos(){
        return (ArrayList<ProductsModel>) productsRepository.findAll();
    }

    public ProductsModel guardarProductos(ProductsModel usuario){
        return productsRepository.save(usuario);
    }

    public ProductsModel editarProductos(ProductsModel usuario){
        return productsRepository.save(usuario);
    }


    public Optional<ProductsModel> obtenerPorId(Long id){
        return productsRepository.findById(id);
    }


    public ArrayList<ProductsModel>  obtenerPorStock(Integer Stock) {
        return productsRepository.findByStock(Stock);
    }

    public boolean eliminarProducto(Long id) {
        try{
            productsRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }


    
}