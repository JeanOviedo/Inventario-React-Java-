package com.example.demo.repositories;


import java.util.ArrayList;

import com.example.demo.models.ProductsModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends CrudRepository<ProductsModel, Long> {
    public abstract ArrayList<ProductsModel> findByStock(Integer stock);

}