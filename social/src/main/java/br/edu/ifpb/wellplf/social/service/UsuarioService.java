package br.edu.ifpb.wellplf.social.service;

import br.edu.ifpb.wellplf.social.repositories.UsuarioRepository;
import br.edu.ifpb.wellplf.social.model.Usuario;
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
    public Usuario inserirUsuario(Usuario usuario) {
        Usuario usuarioInserido = this.usuarioRepository.save(usuario);
        return usuarioInserido;
    }
}
