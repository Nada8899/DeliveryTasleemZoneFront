import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})



  export class FilterComponent implements OnInit {
    sideMenu!: HTMLElement;
    sideBar!: HTMLElement;
    galleryImages!: NodeListOf<HTMLImageElement>;
    imagePop!: HTMLElement;
    categoryBtns!: NodeListOf<HTMLButtonElement>;
  
    ngOnInit(): void {
      this.sideMenu = document.querySelector('#side-menu') as HTMLElement;
      this.sideBar = document.querySelector('.side-bar') as HTMLElement;
  
      this.sideMenu.onclick = () => {
        this.sideMenu.classList.toggle('fa-times');
        this.sideBar.classList.toggle('active');
      };
  
      this.galleryImages = document.querySelectorAll('.image-container img');
      this.imagePop = document.querySelector('.image-popup') as HTMLElement;
  
      this.galleryImages.forEach((img: HTMLImageElement) => {
        img.onclick = () => {
          const imageSrc: string = img.getAttribute('src') || '';
          this.imagePop.style.display = 'flex';
          const popupImg: HTMLImageElement = this.imagePop.querySelector('img') as HTMLImageElement;
          popupImg.src = imageSrc;
        };
      });
  
      this.imagePop.onclick = () => {
        this.imagePop.style.display = 'none';
      };
  
      document.querySelector('#search-box')?.addEventListener('input', () => {
        const value: string = (document.querySelector('#search-box') as HTMLInputElement).value.toLowerCase();
        this.galleryImages.forEach((img: HTMLImageElement) => {
          const filter: string = img.getAttribute('data-search')?.toLowerCase() || '';
          img.style.display = filter.indexOf(value) > -1 ? 'block' : 'none';
        });
      });
  
      this.categoryBtns = document.querySelectorAll('.category .btn');
      this.categoryBtns.forEach((btn: HTMLButtonElement) => {
        btn.onclick = () => {
          this.categoryBtns.forEach((remove: HTMLButtonElement) => remove.classList.remove('active'));
          const dataCategory: string | null = btn.getAttribute('data-category');
          this.galleryImages.forEach((img: HTMLImageElement) => {
            const imgCat: string | null = img.getAttribute('data-cat');
            img.style.display = dataCategory === 'all' || dataCategory === imgCat ? 'block' : 'none';
          });
          btn.classList.add('active');
        };
      });
    }
  }

