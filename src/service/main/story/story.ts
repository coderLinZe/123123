import zeRequest from '@/service'

export function newStory(title: string, content: string) {
  zeRequest.post({
    url: '/story',
    data: {
      title,
      content
    }
  })
}
