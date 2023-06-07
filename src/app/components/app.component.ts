import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Application';

opened=false;
  // to chk in console it will appear as opened nd close
  log(state: any){
    console.log(state)
  }
}
