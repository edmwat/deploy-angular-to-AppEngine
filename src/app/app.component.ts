import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Greeting } from './classes/Greeting';
import { JibtestService } from './services/jibtest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testDemo';
  greetings:any | undefined;
  constructor(private jibtestService:JibtestService){
  }
  ngOnInit(){
    this.jibtestService.getGreetings().subscribe(result=>{
      this.greetings = result;
    });
    
  }

}
