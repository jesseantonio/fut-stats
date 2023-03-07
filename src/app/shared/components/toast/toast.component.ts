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

  constructor(private router: Router) {
    this.selectedLeague = this.router.getCurrentNavigation().extras.state[0];
   }

  @Input() alert: Observable<string>;

  ngOnInit(): void {
    console.log(this.selectedLeague)
  }

  public activate() {
    debugger
    console.log(this.selectedLeague)
    var toast = document.querySelector(".toast");
    var btn = document.querySelector(".toast-btn");
    var close = document.querySelector(".toast-close");
    var progress = document.querySelector(".progress");

    btn.addEventListener("click", () => {
      toast.classList.add("active");
      progress.classList.add("active");

      setTimeout(() => {
        toast.classList.remove("active");
      }, 5000)

      setTimeout(() => {
        progress.classList.remove("active");
      }, 5300)
    })

    close.addEventListener("click", () => {
      toast.classList.remove("active");

      setTimeout(() => {
        progress.classList.remove("active");
      }, 300)
    })
  }
}
