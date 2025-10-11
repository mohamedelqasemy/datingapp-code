import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {};

  //usersFromHomeComponent = input.required<any>();// we dont need it it just for learning
  cancelRegister = output<boolean>();
  private accountService = inject(AccountService);
  private toastr = inject(ToastrService);



  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: err => {
        this.toastr.error(err.error);
        console.log(err);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
