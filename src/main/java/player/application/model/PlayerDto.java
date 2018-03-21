package player.application.model;

import java.util.Objects;

public class PlayerDto {

    Integer id;
    String name;
    String surname;
    String team;


    public PlayerDto() {
    }

    public PlayerDto(Integer id, String name, String surname, String team) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.team = team;
    }

    public PlayerDto(String name, String surname, String team) {
        this.name = name;
        this.surname = surname;
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

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("PlayerDto{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", surname='").append(surname).append('\'');
        sb.append(", team='").append(team).append('\'');
        sb.append('}');
        return sb.toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PlayerDto)) return false;
        PlayerDto player = (PlayerDto) o;
        return Objects.equals(id, player.id) &&
                Objects.equals(name, player.name) &&
                Objects.equals(surname, player.surname) &&
                Objects.equals(team, player.team);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, surname, team);
    }

}
