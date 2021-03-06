import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule } from "igniteui-angular/main";
import { InputGroupSample2Component } from "../../src/app/input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample5Component } from "../../src/app/input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupSample6Component } from "../../src/app/input-group/input-group-sample-6/input-group-sample-6.component";

export class InputGroupConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // input group sample 2
        configs.push(new Config({
            component: InputGroupSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, InputGroupSample2Component],
                ngDeclarations: [InputGroupSample2Component],
                ngImports: [IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/input-group/"
        }));

        // input group sample 5
        configs.push(new Config({
            component: InputGroupSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxInputGroupModule, InputGroupSample5Component],
                ngDeclarations: [InputGroupSample5Component],
                ngImports: [IgxIconModule, IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/input-group/"
        }));

        // input group sample 6
        configs.push(new Config({
            component: InputGroupSample6Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, InputGroupSample6Component, IgxDatePickerModule, IgxTimePickerModule],
                ngDeclarations: [InputGroupSample6Component],
                ngImports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule]
            }),
            shortenComponentPathBy: "/input-group/"
        }));

        return configs;
    }
}
