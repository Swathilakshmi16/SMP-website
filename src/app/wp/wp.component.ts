import { Component } from '@angular/core';

@Component({
  selector: 'app-wp',
  templateUrl: './wp.component.html',
  styleUrl: './wp.component.scss'
})
export class WpComponent {
[x: string]: any;
   
orderTitle = "status"

changeTab(order:any){
    
   switch(order){
    case "status":
        this.orderTitle = "status";
        break;
     case "summary":
        this.orderTitle = "summary";
        break;
     case "invoice":
          this.orderTitle = "invoice";
          break;
     case "notify":
            this.orderTitle = "notify";
            break;
     default:
         this.orderTitle = "status"

   }

}

}
