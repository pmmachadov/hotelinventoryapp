import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;  // Inicialmente se muestran las habitaciones

  toggle() {
    this.hideRooms = !this.hideRooms; // Cambia el valor de hideRooms a su opuesto
  }

}
