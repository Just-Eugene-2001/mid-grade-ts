export interface Document {
  id: string
  title: string
  content: string
  author: string
  createdAt: Date

  read(): void
  write(content: string): void
  print(): void
  scan(): void
  sign(signature: string): void
  encrypt(): void
  decrypt(): void
}

export class TextDocument implements Document {
  // Реализация методов
}

export class PDFDocument implements Document {
  // Реализация методов
}
