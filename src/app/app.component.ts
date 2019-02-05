import { Component, OnInit } from '@angular/core';
import { BodyService } from './body/shared/body.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  nomes: string[];

  constructor(private _bodyService: BodyService) {

  }
  ngOnInit() {
   this.nomes = this._bodyService.ObterNomes();
   
  }
  title = 'exemple';
}
