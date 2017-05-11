import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FeatureOneComponentOne } from "./components/feature-one-component-one/feature-one-component-one";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ FeatureOneComponentOne ],
    exports: [ FeatureOneComponentOne ],
})
export class FeatureOneModule { }