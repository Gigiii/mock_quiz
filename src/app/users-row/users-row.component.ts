import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'users-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-row.component.html',
  styleUrl: './users-row.component.scss'
})
export class UsersRowComponent {
  users: User[] = [];
  constructor(private userService: UserService, private router: Router){}

  ngOnInit() {
    this.users = this.userService.getAllUsers();

  }
  
  goToUserDetails(userId: number){
    this.router.navigate(['/user', userId])
  }
}
