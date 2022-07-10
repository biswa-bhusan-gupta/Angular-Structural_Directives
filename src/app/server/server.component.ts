import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  // NGIF
  public displayComponent = true;
  public displayName = true;

  // NGSWITCH
  public color = "green";

  // NGFOR
  public lists = ["CSE", "IT", "EEE", "CSSE", "ETC"];
}
