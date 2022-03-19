package com.example.demo.models;


import javax.persistence.*;

@Entity
@Table(name = "ventas")
public class VentasModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String nombre;
    private String referencia;
    private Integer precio;
    private Integer peso;
    private String categoria;
    private int ventas;
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

      public void setVentas(Integer ventas){
        this.ventas = ventas;
    }

    public Integer getVentas(){
        return ventas;
    }


 public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    
}