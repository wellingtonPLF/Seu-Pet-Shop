package project.projetoApp.main.service;

import project.projetoApp.main.repositories.UsuarioRepository;
import project.projetoApp.main.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UsuarioService {

   @Autowired
   private UsuarioRepository usuarioRepository;

   public List<Usuario> getUsuarios() {
       return this.usuarioRepository.findAll();
   }

   @Transactional
   public Usuario inserirUser(Usuario usuario) {
       Usuario usuarioInserido = this.usuarioRepository.save(usuario);
       return usuarioInserido;
   }
}