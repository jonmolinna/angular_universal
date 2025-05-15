import { afterNextRender, afterRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
  import { DataService } from './service/data.service';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AnimatedRomboComponent } from './animated-rombo/animated-rombo.component';
import { TailwindAnimatedComponent } from './tailwind-animated/tailwind-animated.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AnimatedRomboComponent, TailwindAnimatedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ANTES
  private readonly platformId = inject(PLATFORM_ID)

  private readonly dataServide = inject(DataService);
  products$ = this.dataServide.getProducts();

  constructor() {

    // Da error porque no existe localStorage en el servidor
    // localStorage.setItem('cart', 'adidas_platanitos')
    // Ver donde se esta ejecutando
    console.log("SERVER O BROWSER ---> ", this.platformId)

    // Para Browser (Antes)
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', 'MY_TOKEN_KEY')
      console.log('Antes isPlatformBrowser', this.platformId)
    }

    // Para Server (Antes)
    if (isPlatformServer(this.platformId)) {
      console.log('Antes isPlatformId', this.platformId)
    }

    // Ahora
    afterNextRender(() => {
      localStorage.setItem('Shopping', 'ITEMS')
      console.log("After Next Render Ahora --> ", this.platformId)
    })

    afterRender(() => {
      console.log("After Render Ahora ---> ", this.platformId)
    })
  }


  // activeMenu = 'compras'; // Puedes cambiar según la ruta actual

  // menuItems = [
  //   { id: 'punto', label: 'Punto de Venta', icon: '🛒' },
  //   { id: 'caja', label: 'Caja', icon: '💰' },
  //   { id: 'clientes', label: 'Clientes', icon: '👤' },
  //   { id: 'inventario', label: 'Inventario', icon: '📦' },
  //   { id: 'compras', label: 'Compras', icon: '🛍' },
  //   { id: 'creditos', label: 'Creditos', icon: '💳' },
  //   { id: 'contable', label: 'Contable', icon: '📘' },
  //   { id: 'informes', label: 'Informes', icon: '📊' },
  //   { id: 'ajustes', label: 'Ajustes', icon: '⚙️' },
  //   { id: 'tablero', label: 'Tablero', icon: '📈' },
  // ];

  // setActive(menuId: string) {
  //   this.activeMenu = menuId;
  // }
}
