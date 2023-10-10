import zeRequest from '@/service'

export function newStory(title: string, content: string) {
  return zeRequest.post({
    url: '/story',
    data: {
      title,
      content
    }
  })
}

export function getStoryList(pageInfo: any) {
  return zeRequest.post({
    url: '/story/list',
    data: pageInfo
  })
}
