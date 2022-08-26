import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit{
  title = 'ViewChildAndAfterViewInit';

  @ViewChild(ChildComponent) childData !: ChildComponent;

  ngAfterViewInit():void{
    console.log(this.childData.childValue1);//getting childValue1 from child component
    console.log(this.childData.childValue1);//getting childValue2 from child component
  }

}
