package br.edu.ifpb.wellplf.social.repositories;

import br.edu.ifpb.wellplf.social.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    public List<Usuario> findByIdadeAndCpf(Integer idade, String cpf);
}

