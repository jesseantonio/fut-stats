import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  public selectedLeague: any;
  public alert: boolean;

  constructor(private router: Router, localStorageService: LocalStorageService) {
    if (this.router.getCurrentNavigation().extras.state != undefined) {
      this.selectedLeague = this.router.getCurrentNavigation().extras.state[0]; 3
    } else {
      this.selectedLeague = localStorageService.get("league");
    }
    this.selectedLeague.alert != undefined ? this.alert = this.selectedLeague.alert : null;
  }

  ngOnInit(): void {
    if (this.alert) {
      this.activate();
    }
  }

  public activate(): void {
    setTimeout(() => this.createToast(), 1200)
  }

  public createToast() {
    const toast = document.getElementById("toast");
    const closeBtn = document.getElementById("close");

    toast.classList.add("active");
    setTimeout(() => {
      toast.classList.remove("active");
    }, 7500)

    closeBtn.addEventListener("click", () => {
      toast.classList.remove("active");
    })
  }

}
