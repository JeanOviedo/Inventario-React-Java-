package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "productos")
public class ProductsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String nombre;
    private String referencia;
    private Integer precio;
    private String peso;
    private String categoria;
    private int Stock;
    private String date;

   
   
    

    public void setPrecio(Integer precio){
        this.precio = precio;
    }

    public Integer getPrecio(){
        return precio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

     public void setPeso(Integer peso){
        this.peso = peso;
    }

    public Integer getPeso(){
        return peso;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

      public void setStock(Integer stock){
        this.stock = stock
    }

    public Integer getStock(){
        return stock;
    }


 public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    
}