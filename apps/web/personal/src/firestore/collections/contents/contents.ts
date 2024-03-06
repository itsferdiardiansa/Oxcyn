import { getDocumentCollections } from '@oxcyn/firebase'

export type Contents = {
  banner: {
    title: string
    subTitle: string
  }
}

export async function getContents() {
  const response = getDocumentCollections<Contents>(
    'contents',
    'personal',
    'oxcyn#getContents'
  )

  return response
}
