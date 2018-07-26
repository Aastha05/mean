import { Routes } from '@angular/router';
import { VehicleHomeComponent } from '../../vehicles/components/vehicle-home/vehicle-home.component';
import { VehicleListComponent } from '../../vehicles/components/vehicle-list/vehicle-list.component';
import { DeviceListComponent } from '../../devices/components/device-list/device-list.component';
import { DeviceHomeComponent } from '../../devices/components/device-home/device-home.component';


export const routes: Routes = [
    {
        path:'vehicles',
        component:VehicleHomeComponent,
        children:[
            {
                path:'list',
                component: VehicleListComponent
            },
            {
                path: '**',
                redirectTo:'list'
            }
        ]
    },
    {
        path:'**',
        redirectTo: 'vehicles'
    }
]