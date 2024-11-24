export interface FolderList {
  id: number
  name: string
  children?: Array<FolderList>
}
