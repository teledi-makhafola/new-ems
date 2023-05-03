import { Component , OnInit} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  constructor() { }
  ngOnInit(): void {
}
  simpleAlert(){
    Swal.fire('Successfully Added!');

}
}
