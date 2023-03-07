import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public activate() {
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
