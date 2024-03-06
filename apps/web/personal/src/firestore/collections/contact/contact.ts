import { getDocumentCollections } from '@oxcyn/firebase'

type SocialType = 'gmail' | 'github' | 'linkedin'
type Domain = '.com' | '.id' | '.dev' | '.org'
type AcnhorTarget = '_blank' | '_self' | '_parent' | '_top'

type SocialItem = {
  type: SocialType
  url: `https://${string}${Domain}`
  target: AcnhorTarget
}

type Social = {
  title: string
  items: SocialItem[]
}

export async function getSocials() {
  const response = getDocumentCollections<Social>(
    'contact',
    'socials',
    'oxcyn#getSocials'
  )

  return response
}
