import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
heads:string[]=["alan1","alan2","alan3","alan4"];
list=[
  {
    id:1,
    name:"ali can",
    surname:"yucel",
    age:31
  },
  {
    id:2,
    name:"atıl",
    surname:"bayyar",
    age:35
  }
]
}
