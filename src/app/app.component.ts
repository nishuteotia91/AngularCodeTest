import { Component } from '@angular/core';
import { AlbumServiceService } from './album-service.service';
import { UserServiceService } from './user-service.service';
import { Observable, forkJoin } from 'rxjs';
import { Albums } from './model/Albums';
import { Users } from './model/Users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'interview_pract';
   ships = ['UAUS', 'OFF', 'UH', 'UMEX', 'UTWN', 'USGP'];

   constructor(private albumService: AlbumServiceService,private usersService : UserServiceService){

   }

  
  users: any

  result:any

   tableColumns : string [] = ['title', 'username','email']

   ngOnInit(){
   
    let albums = this.albumService.getAlbums();

    let users = this.usersService.getUsers();
    
    forkJoin([ users,albums]).subscribe(results => {
      
      this.result = mergeById(results[0], results[1]);
    });
 

    const mergeById = (array1 : Users, array2 : Albums) =>
  array1.map(itm => ({
    ...array2.find((item) => (item.id === itm.id) && item),
    ...itm
  }));
    
  }
 
  

}
