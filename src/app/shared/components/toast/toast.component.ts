import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  public selectedLeague: any;
  public teste: boolean = false;

  constructor(private router: Router) {
    this.selectedLeague = this.router.getCurrentNavigation().extras.state[0];
  }

  @Input() alert: Observable<boolean>;

  ngOnInit(): void {
    // console.log(this.alert)
    // this.activate();
  }

  public activate(): void {
    this.teste = true;
    this.createToast();
  }

  public createToast() {
    var toast = document.querySelector(".toast");
    var btn = document.querySelector(".toast-btn");
    var progress = document.querySelector(".progress");

    btn.addEventListener("click", () => {
      debugger
      toast.classList.add("active");
      progress.classList.add("active");

      setTimeout(() => {
        toast.classList.remove("active");
      }, 5000)

      setTimeout(() => {
        progress.classList.remove("active");
        this.teste = false;
      }, 5300)
    })
  }
}
