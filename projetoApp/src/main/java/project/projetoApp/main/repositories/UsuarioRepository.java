package project.projetoApp.main.repositories;

import project.projetoApp.main.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

   public List<Usuario> findByIdadeAndCpf(Integer idade, String cpf);
   
}