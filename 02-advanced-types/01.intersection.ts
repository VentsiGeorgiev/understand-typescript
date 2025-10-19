type FileData = {
  path: string
  content: string
}

type DatabaseData = {
  connectionUrl: string
  credentials: string
}

type Status = {
  isOpen: string
  errorMessage?: string
}

type AccessedFileData = FileData & Status
type AccessDatabaseData = DatabaseData & Status

// Interface
interface ImageData {
  path: string
  content: string
}
interface ImageStatus {
  isLoaded: string
  errorMessage?: string
}
interface accessImage extends ImageData, ImageStatus { }