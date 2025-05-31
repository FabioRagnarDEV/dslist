package com.devsuperior.dslist.controllers;

import com.devsuperior.dslist.dto.GameDTO;
import com.devsuperior.dslist.dto.GameMinDTO;
import com.devsuperior.dslist.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/games")
@CrossOrigin(origins = "http://localhost:3000")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping
    public List<GameMinDTO> findAll() {
        return gameService.findAll();
    }

    @GetMapping(value = "/{id}")
    public GameDTO findById(@PathVariable Long id) {
        return gameService.findByid(id);
    }

    // 🔥 Endpoint para criar um jogo
    @PostMapping
    public GameDTO create(@RequestBody GameDTO dto) {
        return gameService.create(dto);
    }

    // 🔥 Endpoint para atualizar um jogo
    @PutMapping(value = "/{id}")
    public GameDTO update(@PathVariable Long id, @RequestBody GameDTO dto) {
        return gameService.update(id, dto);
    }

    // 🔥 Endpoint para deletar um jogo
    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        gameService.delete(id);
    }
}
