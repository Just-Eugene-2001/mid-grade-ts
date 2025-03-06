export interface IReadable {
  read(): void
}

export interface IWritable {
  write(content: string): void
}

export interface IPrintable {
  print(): void
}

export interface IScannable {
  scan(): void
}

export interface ISignable {
  sign(signature: string): void
}

export interface IEncryptable {
  encrypt(): void
  decrypt(): void
}
