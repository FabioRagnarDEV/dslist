package com.devsuperior.dslist.services;

import com.devsuperior.dslist.dto.GameDTO;
import com.devsuperior.dslist.dto.GameMinDTO;
import com.devsuperior.dslist.entities.Game;
import com.devsuperior.dslist.projections.GameMinProjection;
import com.devsuperior.dslist.repositories.GameRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    @Transactional
    public GameDTO findByid(Long id) {
        Game result = gameRepository.findById(id).orElseThrow();
        return new GameDTO(result);
    }

    @Transactional
    public List<GameMinDTO> findAll() {
        List<Game> result = gameRepository.findAll();
        return result.stream().map(GameMinDTO::new).toList();
    }

    @Transactional
    public List<GameMinDTO> findByList(Long listId) {
        List<GameMinProjection> result = gameRepository.searchByList(listId);
        return result.stream().map(GameMinDTO::new).toList();
    }

    @Transactional
    public GameDTO create(GameDTO dto) {
        Game entity = new Game();
        copyDtoToEntity(dto, entity);
        entity = gameRepository.save(entity);
        return new GameDTO(entity);
    }

    @Transactional
    public GameDTO update(Long id, GameDTO dto) {
        Game entity = gameRepository.findById(id).orElseThrow();
        copyDtoToEntity(dto, entity);
        entity = gameRepository.save(entity);
        return new GameDTO(entity);
    }

    @Transactional
    public void delete(Long id) {
        gameRepository.deleteById(id);
    }

    // Método auxiliar para copiar os dados
    private void copyDtoToEntity(GameDTO dto, Game entity) {
        entity.setTitle(dto.getTitle());
        entity.setYear(dto.getYear());
        entity.setGenre(dto.getGenre());
        entity.setPlatforms(dto.getPlatforms());
        entity.setScore(dto.getScore());
        entity.setImgUrl(dto.getImgUrl());
        entity.setShortDescription(dto.getShortDescription());
        entity.setLongDescription(dto.getLongDescription());
    }
}
