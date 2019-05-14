import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatNativeDateModule, MatIconModule, MatSnackBarModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { AppComponent } from './app.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { SellerRegestrationComponent } from './seller-regestration/seller-regestration.component';
import { SellerForgotPasswordComponent } from './seller-forgot-password/seller-forgot-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductsComponent } from './products/products.component';
import { WalletComponent } from './wallet/wallet.component';
import { EdituserComponent } from './edituser/edituser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { OrdersComponent } from './orders/orders.component';
import {UserService} from './servicess/user.service';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';


 

const appRoutes: Routes = [
   { path: 'sellerLogin', component:SellerloginComponent},
   { path: '',   redirectTo: 'sellerLogin', pathMatch: 'full' },
   { path: 'sellerRegistration',component:SellerRegestrationComponent},
   { path: 'sellerForgotPassword',component:SellerForgotPasswordComponent},
   
   { path: 'dashbord',component:DashbordComponent,

   children:[{ path: 'userData',component:UserDataComponent},
   { path: '',   redirectTo: 'products', pathMatch: 'full' },
   { path: 'products',component:ProductsComponent},
   { path: 'wallet',component:WalletComponent},
   { path: 'orders', component:OrdersComponent},

 ],
  
  },
 
   { path: 'sideNavComponent',component:DashbordComponent,
  //  chidren:[
  //    {path:'userData',component:UserDataComponent},]
},
      

  


  ];
@NgModule({
  declarations: [
    AppComponent,
    SellerloginComponent,
    
    SellerRegestrationComponent,
    SellerForgotPasswordComponent,
    MainPageComponent,
    DashbordComponent,
    HeaderComponent,
    SideNavComponent,
    UserDataComponent,
    ProductsComponent,
    WalletComponent,
    EdituserComponent,
    PageNotFoundComponent,
    ProductListComponent,
    CreateComponent,
    OrdersComponent,
  

   
    // HttpClientModule,
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatSelectModule,
  
    MatSortModule,
    RouterModule.forRoot(
      appRoutes,
     
      
     
    ),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
