import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-share-btn',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './share-btn.component.html',
  styleUrl: './share-btn.component.css'
})
export class ShareBtnComponent {

  compartirAhora() {

    if (navigator.share) {
      navigator.share({
          title: 'Link compartido', // Estas variables son propias del metodo share
          url: 'https://depplin.net' // Esta variable es propia del metodo share
      })
    .then( () => {   console.log('Gracias por compartirlo !'); })
    .catch (console.error)

  }
