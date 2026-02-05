// Validation utilities for contact form

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(data: unknown): {
  valid: boolean;
  errors?: ValidationError[];
} {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== 'object') {
    return {
      valid: false,
      errors: [{ field: 'form', message: 'Invalid form data' }],
    };
  }

  const form = data as Partial<ContactFormData>;

  // Validate name
  if (!form.name || typeof form.name !== 'string') {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (form.name.trim().length < 2) {
    errors.push({
      field: 'name',
      message: 'Name must be at least 2 characters',
    });
  } else if (form.name.length > 255) {
    errors.push({
      field: 'name',
      message: 'Name must be less than 255 characters',
    });
  }

  // Validate email
  if (!form.email || typeof form.email !== 'string') {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(form.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  } else if (form.email.length > 255) {
    errors.push({
      field: 'email',
      message: 'Email must be less than 255 characters',
    });
  }

  // Validate subject
  if (!form.subject || typeof form.subject !== 'string') {
    errors.push({ field: 'subject', message: 'Subject is required' });
  } else if (form.subject.trim().length < 5) {
    errors.push({
      field: 'subject',
      message: 'Subject must be at least 5 characters',
    });
  } else if (form.subject.length > 255) {
    errors.push({
      field: 'subject',
      message: 'Subject must be less than 255 characters',
    });
  }

  // Validate message
  if (!form.message || typeof form.message !== 'string') {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (form.message.trim().length < 10) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters',
    });
  } else if (form.message.length > 5000) {
    errors.push({
      field: 'message',
      message: 'Message must be less than 5000 characters',
    });
  }

  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}
