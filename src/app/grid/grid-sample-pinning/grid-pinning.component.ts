import { Component, Injectable, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
import { DataType } from "igniteui-angular/data-operations/data-util";
import { IgxButtonDirective } from "igniteui-angular/directives/button/button.directive";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { BehaviorSubject, Observable } from "rxjs/Rx";
import { DATA } from "./data";
@Component({
    providers: [],
    selector: "grid-sample",
    styleUrls: ["grid-pinning.component.scss"],
    templateUrl: "grid-pinning.component.html"
})

export class PinningSampleComponent {
    @ViewChild("grid1") public grid1: IgxGridComponent;

    public data: any[];
    public columns: any[];
    public ngOnInit(): void {
        this.columns = [
            { field: "ID", header: "ID", width: 100, hidden: true },
            { field: "CompanyName", header: "Company Name", width: 300 },
            { field: "ContactName", header: "Contact Name", width: 200, pinned: true },
            { field: "ContactTitle", header: "Contact Title", width: 200, pinned: true },
            { field: "Address", header: "Address", width: 300 },
            { field: "City", header: "City", width: 100 },
            { field: "Region", header: "Region", width: 100 },
            { field: "PostalCode", header: "Postal Code", width: 150 },
            { field: "Phone", header: "Phone", width: 150 },
            { field: "Fax", header: "Fax", width: 150 }
        ];
        this.data = DATA;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
