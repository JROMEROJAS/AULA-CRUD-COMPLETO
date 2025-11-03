package com.example.aula.controller;

import java.util.List;

import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aula.entity.Aula;
import com.example.aula.service.AulaService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;





@RestController
@RequestMapping("/api/aulas")
@CrossOrigin(origins = "http://localhost:4200")
public class AulaController {
    
    private final AulaService aulaService;

    public AulaController(AulaService aulaService) {
        this.aulaService = aulaService;
    }

    //ENDPOINTS CRUD

    @PostMapping
    public ResponseEntity<?> crearAula(@RequestBody Aula aula) {
        try {
            Aula nuevaAula = aulaService.crearAula(aula);
            return new ResponseEntity<>(nuevaAula, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<List<Aula>> obtenerTodasLasAulas() {
        List<Aula> aulas = aulaService.obtenerTodasLasAulas();
        return new ResponseEntity<>(aulas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerAulaPorId(@PathVariable Long id) {
        Optional <Aula> aula = aulaService.obtenerAulaPorId(id);
        
        if (aula.isPresent()) {
            return new ResponseEntity<>(aula.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Aula no encontrada", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarAula(@PathVariable Long id, @RequestBody Aula aulaDetails) {
        try {
            Aula aulaActualizada = aulaService.actualizarAula(id, aulaDetails);
            return new ResponseEntity<>(aulaActualizada, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarAula(@PathVariable Long id) {
        try {
            aulaService.eliminarAula(id);
            return new ResponseEntity<>("Aula eliminada exitosamente", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    
    //ENDPOINTS CUSTOM

    @GetMapping("/tipo/{tipo}")
    public ResponseEntity<List<Aula>> obtenerAulasPorTipo(@PathVariable String tipo) {
        List<Aula> aulas = aulaService.obtenerAulasPorTipo(tipo);
        return new ResponseEntity<>(aulas, HttpStatus.OK);
    }

    @GetMapping("/disponibles")
    public ResponseEntity<List<Aula>> obtenerAulasDisponibles() {
        List<Aula> aulas = aulaService.obtenerAulasDisponibles();
        return new ResponseEntity<>(aulas, HttpStatus.OK);
    }

    @GetMapping("/test")
    public String test() {
        return "Backend funcionando correctamente.";
    }
    

}
