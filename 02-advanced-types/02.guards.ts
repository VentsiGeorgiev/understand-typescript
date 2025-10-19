type FileSource = { path: string }
const fileSource: FileSource = {
  path: 'some/path/to/file.svg',
}

type DBSource = { connectionUrl: string }
const dbSource: DBSource = {
  connectionUrl: 'some-connection-url',
}

type Source = FileSource | DBSource

function loadData(source: Source) {
  if ('path' in source) {
    // source.path => use that to open the file
    return
  }

  // source.connectionUrl => to reach out to database
}

// Example 2 - Discriminated Unions
type FileSource2 = { type: 'file', path: string }
const fileSource2: FileSource2 = {
  type: 'file',
  path: 'some/path/to/file.svg'
}

type DBSource2 = { type: 'db', connectionUrl: string }
const dbSource2: DBSource2 = {
  type: 'db',
  connectionUrl: 'some-connection-url'
}

type Source2 = FileSource2 | DBSource2

function loadData2(source: Source2) {
  if (source.type === 'file') {
    // source.path => use that to open the file
    return
  }

  // source.connectionUrl => to reach out to database
}