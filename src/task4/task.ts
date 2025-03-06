import { IEncryptable, IPrintable, IReadable, IScannable, ISignable, IWritable } from '@/task4/types'

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

export class TextDocument implements IReadable, IWritable, IPrintable {
  // Реализация методов
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date,
  ) {}

  read(): void {
    console.log('Reading Text')
  }

  write(content: string): void {
    this.content = content
    console.log('Writing Text: ', content)
  }

  print(): void {
    console.log('Printing Text')
  }
}

export class PDFDocument implements IReadable, IPrintable, IEncryptable, ISignable {
  // Реализация методов
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date,
  ) {}

  read(): void {
    console.log('Reading PDF')
  }

  print(): void {
    console.log('Printing PDF')
  }

  encrypt(): void {
    console.log('Encrypting PDF')
  }

  decrypt(): void {
    console.log('Decrypting PDF')
  }

  sign(signature: string): void {
    console.log('Signing PDF: ', signature)
  }
}

export class ScannedDocument implements IReadable, IScannable {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date
  ) {}

  read(): void {
    console.log('Reading Scan')
  }

  scan(): void {
    console.log('Scanning Scan')
  }
}
