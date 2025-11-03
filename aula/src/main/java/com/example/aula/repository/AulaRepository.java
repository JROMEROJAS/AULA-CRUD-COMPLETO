package com.example.aula.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.aula.entity.Aula;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Long> {
    

    List<Aula> findByCodigo(String codigo);
    List<Aula> findByTipo(String tipo);
    List<Aula> findByEstado(String estado);

    @Query("SELECT a FROM Aula a WHERE a.nsillas >= :minSillas")
    List<Aula> findAulasConMasSillasQue(@Param("minSillas") int minSillas); 

}
