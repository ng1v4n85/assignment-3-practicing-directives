import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-3-practicing-directives';
  displayParagraph = false;
  log = [];


  onClickedButton() {
    this.displayParagraph = !this.displayParagraph;
    this.log.push(this.log.length +1)
  }
}
