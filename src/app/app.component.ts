import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ticket_Booking';
  isSideNavbar: boolean = true;
  selected = 'option2';
  selectednavbar: any;
  onchange(selected: any) {
    console.log(selected.value);
    this.selectednavbar = selected.value;
    if (this.selectednavbar === 'sidebar') {
      this.isSideNavbar = true;
      console.log(this.isSideNavbar)
    } else if (this.selectednavbar === 'header') {
      this.isSideNavbar = false;
      console.log(this.isSideNavbar);
    }
    // Ensure that e and e.target are defined before accessing their properties
  }
}
