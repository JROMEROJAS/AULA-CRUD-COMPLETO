package com.example.aula.service;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.example.aula.entity.Aula;
import com.example.aula.repository.AulaRepository;

@Service
public class AulaService {
    
    private final AulaRepository aulaRepository;

    public AulaService(AulaRepository aulaRepository) {
        this.aulaRepository = aulaRepository;
    }

    public Aula crearAula(Aula aula) {
        // ✅ CORREGIR: findByCodigo retorna List, no Optional
        List<Aula> aulasConMismoCodigo = aulaRepository.findByCodigo(aula.getCodigo());
        if (!aulasConMismoCodigo.isEmpty()) {
            throw new IllegalArgumentException("El código de aula ya existe");
        }

        return aulaRepository.save(aula);
    }

    public List<Aula> obtenerTodasLasAulas() {
        return aulaRepository.findAll();
    }

    public Optional<Aula> obtenerAulaPorId(Long id) {
        return aulaRepository.findById(id);
    }

    public Optional<Aula> obtenerAulaPorCodigo(String codigo){
        // ✅ CORREGIR: findByCodigo retorna List, tomar el primero si existe
        List<Aula> aulas = aulaRepository.findByCodigo(codigo);
        return aulas.isEmpty() ? Optional.empty() : Optional.of(aulas.get(0));
    }

    public Aula actualizarAula(Long id, Aula aulaActualizada) {
        return aulaRepository.findById(id).map(aula -> {
            aula.setCodigo(aulaActualizada.getCodigo());
            aula.setNsillas(aulaActualizada.getNsillas());
            aula.setTipo(aulaActualizada.getTipo());
            aula.setEstado(aulaActualizada.getEstado());
            return aulaRepository.save(aula);
        })
        .orElseThrow(() -> new IllegalArgumentException("Aula no encontrada"));
    }

    public void eliminarAula(Long id) {
        if (!aulaRepository.existsById(id)) {
            throw new IllegalArgumentException("Aula no encontrada");
        }
        aulaRepository.deleteById(id);
    }

    public List<Aula> obtenerAulasPorTipo(String tipo) {
        return aulaRepository.findByTipo(tipo);
    }

    public List<Aula> obtenerAulasDisponibles() {
        return aulaRepository.findByEstado("Disponible");
    }   

}
