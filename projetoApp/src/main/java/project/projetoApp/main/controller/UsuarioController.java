package project.projetoApp.main.controller;

import project.projetoApp.main.model.Usuario;
import project.projetoApp.main.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class UsuarioController {

   @Autowired
   private UsuarioService usuarioService;

   @GetMapping("/usuarios")
   public List<Usuario> getUsuarios() {
       return this.usuarioService.getUsuarios();
   }

   @PostMapping("/usuarios")
   public Usuario inserirUsuario(@RequestBody Usuario usuario){
       return this.usuarioService.inserirUser(usuario);
   }
}