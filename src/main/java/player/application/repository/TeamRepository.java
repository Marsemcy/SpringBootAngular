package player.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import player.application.entity.PlayerEntity;
import player.application.entity.TeamEntity;

import java.util.Optional;

public interface TeamRepository extends JpaRepository<PlayerEntity, Integer> {
    Optional<TeamEntity> findByName(String name);
}
