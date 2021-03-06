import { Component } from '@angular/core';
import { Banco } from './banco.model';
import { ValidatorService, TableDataSource } from '@credix/components';
import { BancoValidatorService } from './service/banco.validator.service';
import { TableElementDataService } from '@credix/components';

@Component({
  selector: 'credix-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [
    { provide: ValidatorService, useClass: BancoValidatorService }
  ],
})
export class BancoComponent  {

  bancoList = [
    { nombre: 'Optimus Prime', codigo: 51, pais:1, estado:11, ciudad: 711, principal:true },
    { nombre: 'Megatron', codigo: 50, pais:2, estado: 52, ciudad:552, principal:true  },
    { nombre: 'Peter Parker', codigo: 53, pais:1 },
  ];

  constructor(  public  bancoValidator: BancoValidatorService, private tableElementDataService: TableElementDataService  ){
   
    this.tableElementDataService.dataSource  = new TableDataSource<any>(this.bancoList,
      Banco,  this.bancoValidator);  // 

    this.tableElementDataService.modelObject = this.bancoValidator.BancoObject;
     
  }
    
 }
