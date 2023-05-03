import { Component ,OnInit} from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {
  constructor() { }
  ngOnInit(): void {

}

 
  showPopup() {
  // Call the alert() method with the message
  alert("successful Added New Employee");
} 
alertWithSuccess(){
  Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
}
}
