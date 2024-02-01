import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pratica-rxjs',
  templateUrl: './pratica-rxjs.component.html',
  styleUrls: ['./pratica-rxjs.component.scss']
})
export class PraticaRxjsComponent implements OnInit{
  constructor(private apiService: ApiService) {
    
  }
    
  ngOnInit(): void {
    
  }

}
