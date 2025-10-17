import { Component, OnInit } from '@angular/core';
import { ReviewService } from './review.service';
import { ReviewResponse } from './models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Movie Reviews (AI)';
  result?: ReviewResponse;
  error?: string;
  form: FormGroup;
  isDark = true;

  constructor(private fb: FormBuilder, public svc: ReviewService) {
    this.form = this.fb.group({
      prompt: ['', [Validators.required, Validators.minLength(3)]],
      provider: ['openai'],
      model: ['gpt-4o-mini']
    });
  }
  ngOnInit(): void {
    const saved = localStorage.getItem('prefers-dark');
    this.isDark = saved === 'true';
    document.body.classList.toggle('dark-theme', this.isDark);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
    localStorage.setItem('prefers-dark', String(this.isDark));
  }

  submit() {
    this.error = undefined;
    this.result = undefined;
    if (this.form.invalid) return;

    this.svc.query(this.form.value as any).subscribe({
      next: (res) => this.result = res,
      error: (err) => this.error = (err?.error?.message || err.message || 'Unknown error')
    });
  }
}
