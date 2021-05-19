import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';
import {UsuarioFirestoreService} from '../../shared/service/usuario-firestore.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios!: Array<Usuario>;

  constructor(private usuarioService: UsuarioFirestoreService) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

}
