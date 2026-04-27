import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TPipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly email = 'gilles-stephan@gmx.de';
  readonly expectationKeys = ['response', 'focus', 'model'] as const;
  copied = false;
  submitted = false;
  mailFeedback: 'idle' | 'success' | 'error' = 'idle';

  readonly form = this.fb.group({
    name: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    message: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(10)],
    }),
    privacy: this.fb.control(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  constructor(private readonly fb: NonNullableFormBuilder) {}

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied = true;
      window.setTimeout(() => {
        this.copied = false;
      }, 2200);
    } catch {
      this.copied = false;
    }
  }

  markTouched(controlName: keyof typeof this.form.controls): void {
    this.form.controls[controlName].markAsTouched();
  }

  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }

  submit(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
    this.mailFeedback = 'idle';

    if (this.form.invalid) {
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Portfolio-Anfrage: ${name}`);
    const body = encodeURIComponent(`Name: ${name}
E-Mail: ${email}

Nachricht:
${message}`);

    try {
      window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
      this.mailFeedback = 'success';
      window.setTimeout(() => {
        this.mailFeedback = 'idle';
      }, 6500);
    } catch {
      this.mailFeedback = 'error';
    }
  }
}

