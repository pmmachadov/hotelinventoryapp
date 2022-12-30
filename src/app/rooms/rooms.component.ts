import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;  // Inicialmente se muestran las habitaciones

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 10,
    totalRooms: 5,

  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Single',
      amenities: 'TV, Wifi, Air Conditioning',
      price: 100,
      photos: 'https://www.hilton.com/im/en/rooms/room-1.jpg',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 2.654568441
    },
    {
      roomNumber: 2,
      roomType: 'Double',
      amenities: 'TV, Wifi, Air Conditioning',
      price: 200,
      photos: 'https://www.hilton.com/im/en/rooms/room-2.jpg',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 4.1542
    },
    {
      roomNumber: 3,
      roomType: 'Triple',
      amenities: 'TV, Wifi, Air Conditioning',
      price: 300,
      photos: 'https://www.hilton.com/im/en/rooms/room-3.jpg',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 3.0215452
    },
  ];

  Toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
