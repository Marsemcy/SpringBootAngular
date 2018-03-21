package player.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import player.application.model.PlayerDto;
import player.application.service.PlayerService;

@Controller
@RequestMapping("players")
public class PlayerController {
    private final PlayerService service;

    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @ResponseBody
    @GetMapping("")
    public Iterable<PlayerDto> display() {
        return service.findAll();
    }

    @ResponseBody
    @GetMapping("{id}")
    public PlayerDto show(@PathVariable Integer id){
        return service.findOne(id);
    }


    @PostMapping("")
    public PlayerDto save(@RequestBody PlayerDto player){
        return service.add(player);
    };


    @PutMapping("{id}")
    public PlayerDto update(@PathVariable Integer id, @RequestBody PlayerDto player) {
        player.setId(id);
        service.edit(player);
        return player;
    }


    @DeleteMapping("{id}")
    public String delete(@PathVariable Integer id) {
        service.remove(id);

        return "";
    }



    @GetMapping("top-secret")
    public String secret(Model model) {
        model.addAttribute("players", service.findAll());
        model.addAttribute("message", "Hello secret player World!");
        return "players";
    }



}
