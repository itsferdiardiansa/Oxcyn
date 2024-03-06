import { getDocumentCollections } from '@oxcyn/firebase'

export async function getBaseMetadata() {
  const response = getDocumentCollections(
    'metadata',
    'baseMetadata',
    'oxcyn#getBaseMetadata'
  )

  return response
}
