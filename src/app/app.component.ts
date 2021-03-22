import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ejs-inplaceeditor id="element" type="Text" value="Andrew" [model]="modelObj"></ejs-inplaceeditor>`
})
export class AppComponent {
  title = 'Angular11-inplace-Editor';
  public modelObj: Object = { placeholder: 'Enter employee name' };
}
