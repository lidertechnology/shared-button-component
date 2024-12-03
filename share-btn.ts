
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-share-btn',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './share-btn.component.html',
  styleUrl: './share-btn.component.css'
})
export class ShareBtnComponent {
  
  
  compartir() {
    // Obtiene la URL actual de la página
    const url = window.location.href; 

    // Verifica si el navegador soporta la Web Share API
    if (navigator.share) { 
      // Si la API está disponible, la usa para compartir la URL
      navigator.share({
        title: 'Catálogo de Bolígrafos', // Título para compartir
        text: 'Check out this awesome Angular app!', // Descripción para compartir
        url: url // URL a compartir
      })
      .then(() => console.log('Compartido exitosamente')) // Mensaje en la consola si se comparte con éxito
      .catch((error) => console.log('Error al compartir:', error)); // Mensaje en la consola si hay un error
    
    } else {
          // Si la API no está disponible, copia la URL al portapapeles
          this.copyToClipboard(url); 
          alert('Link copido al portapepeles!'); // Muestra una alerta al usuario
        }
      }
  
    
  async copyToClipboard(text: string) {
    try {
      // Intenta copiar el texto al portapapeles usando la Clipboard API
      await navigator.clipboard.writeText(text);
      
      console.log('Texto copiado al portapapeles!'); // Mensaje en la consola si se copia con éxito
    } catch (err) {
      // Si hay un error al copiar, lo muestra en la consola
      console.error('Error al copiar: ', err);
    }
  }



}

/**
 * 
 * Puntos clave:

compartir(): Esta función se encarga de iniciar el proceso de compartir la URL.
navigator.share: Es la clave para usar la Web Share API. Si está presente, se usa para abrir el diálogo nativo de compartir del dispositivo.
Fallback al portapapeles: Si navigator.share no está disponible, se usa la función copyToClipboard para copiar la URL al portapapeles como alternativa.
copyToClipboard(): Esta función usa la Clipboard API para copiar texto al portapapeles de forma asíncrona.
Manejo de errores: El bloque try...catch en copyToClipboard asegura que cualquier error durante la copia sea capturado y registrado en la consola.
 



 */
