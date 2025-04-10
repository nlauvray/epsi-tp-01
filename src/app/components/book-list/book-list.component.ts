import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HighlightDirective],
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  data: any[] = [];
  searchTerm: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des livres:', err);
      }
    });
  }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id).subscribe({
      next: (updatedBook: Book) => {
        alert(`Le favori de "${updatedBook.title}" a été ${updatedBook.isFavorite ? 'ajouté' : 'retiré'}.`);
      },
      error: (err: any) => {
        alert('Erreur lors de la modification du favori. Veuillez réessayer.');
        console.error('Erreur lors de la modification du favori:', err);
      }
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        alert('Le livre a été supprimé avec succès.');
        console.log('Livre supprimé:', id);
      },
      error: (err: any) => {
        alert('Erreur lors de la suppression du livre. Veuillez réessayer.');
        console.error('Erreur lors de la suppression du livre:', err);
      }
    });
  }

  goToBookDetails(id: string): void {
    this.router.navigate(['/books', id]);
  }
}
