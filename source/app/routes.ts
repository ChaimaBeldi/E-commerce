import{ Routes }from '@angular/router';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { MotdepasseComponent } from './motdepasse/motdepasse.component';
import { NvcompteComponent } from './nvcompte/nvcompte.component';


export const routes: Routes = [
    {path:'nvcompte' , component:  NvcompteComponent },
    {path:'se_connecter' , component:  SeConnecterComponent },
    {path:'motdepasse' , component:  MotdepasseComponent },
    {path:'' , redirectTo:'/', pathMatch:'full'},
    
]
