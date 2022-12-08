import { RouterModule } from "@angular/router";
import { LibraryComponent } from "./library.component";
import { ResultComponent } from "./result/result.component";

export const libraryRouting = RouterModule.forChild([
    { path: 'library', component: LibraryComponent },
    { path: 'library/result/:id/:name', component: ResultComponent }
]);