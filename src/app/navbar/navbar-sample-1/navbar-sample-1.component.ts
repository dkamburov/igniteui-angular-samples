import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-navbar-sample-1",
  styleUrls: ["./navbar-sample-1.component.scss"],
  templateUrl: "./navbar-sample-1.component.html"
})
export class NavbarSample1Component implements OnInit {

  constructor() { }

  public ngOnInit() {
  }
}
