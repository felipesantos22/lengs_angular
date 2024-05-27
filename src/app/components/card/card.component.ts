import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Leng } from '../../interfaces/leng';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  leng: Leng[] = [];
  allLengs: Leng[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.leng = this.apiService.getLengs();
    this.allLengs = [...this.leng];
  }

  sortLeng(): void {
    this.leng.sort((a, b) => a.title.localeCompare(b.title));
  }

  filterFrameworks(): void {
    this.leng = this.allLengs.filter((l) => l.category === 'Framework');
  }

  filterOO(): void {
    this.leng = this.allLengs.filter(
      (l) => l.category === 'Orientado a Objetos'
    );
  }

  resetFilters(): void {
    this.leng = [...this.allLengs];
  }
}
