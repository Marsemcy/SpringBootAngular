package player.application.service;

import org.springframework.stereotype.Service;
import player.application.entity.PlayerEntity;
import player.application.model.PlayerDto;
import player.application.repository.PlayerRepository;

import java.util.List;
import java.util.stream.Collectors;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

@Service
public class PlayerService {

    private final PlayerRepository repository;


    public PlayerService(PlayerRepository repository) {
        this.repository = repository;
    }


    public Iterable<PlayerDto> findAll() {
        return toPlayerList(repository.findAll());

    }

    public PlayerDto findOne(Integer id) {
        checkNotNull(id,"id can not be null");
        return toPlayer(repository.findOne(id));
    }



    public PlayerDto add(PlayerDto player) {
        checkNotNull(player, "Player can not be null");
        checkArgument(player.getId() == null, "New player can not have an id");
       return toPlayer(repository.save(toEntity(player)));
    };

    public PlayerDto edit(PlayerDto player) {
        checkNotNull(player, "Edited player can not be null");
        checkArgument(player.getId()!=null,"Edited player should have allready an ID");
        return toPlayer(repository.save(toEntity(player)));
    }

    public void remove(Integer id) {
        checkNotNull(id, "Id can not be null");
        repository.delete(id);
    }




    private PlayerDto toPlayer(PlayerEntity playerEntity) {
        PlayerDto player = new PlayerDto();
        player.setId(playerEntity.getId());
        player.setName(playerEntity.getName());
        player.setSurname(playerEntity.getSurname());
        player.setTeam(playerEntity.getTeam());
        return player;
    }


    private List<PlayerDto> toPlayerList(List<PlayerEntity> entityList) {
        return entityList.stream().map(this::toPlayer).collect(Collectors.toList());
    }

    private PlayerEntity toEntity(PlayerDto player) {
        PlayerEntity entity = new PlayerEntity();
        entity.setId(player.getId());
        entity.setName(player.getName());
        entity.setSurname(player.getSurname());
        entity.setTeam(player.getTeam());
        return entity;
    }



}
