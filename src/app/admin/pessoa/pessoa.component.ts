import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {PessoasService} from '../pessoas.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoa;
  constructor(private pessoasService: PessoasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pessoasService.getPessoa(id)
      .subscribe(pessoa => this.pessoa = pessoa);
  }

}
