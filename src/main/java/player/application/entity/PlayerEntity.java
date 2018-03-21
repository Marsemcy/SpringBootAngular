package player.application.entity;

import javax.persistence.*;

@Entity
@Table(name = "player", catalog = "postgres")
public class PlayerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String name;
    String surname;
    String team;

    public PlayerEntity() {
    }

    public PlayerEntity(Integer id, String name, String surname, String team) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.team = team;
    }

    public PlayerEntity(String name, String surname, String team) {
        this.name = name;
        this.surname = surname;
        this.team = team;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getTeam() {
        return team;
    }
}
