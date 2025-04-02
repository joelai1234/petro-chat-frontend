import type { ThoughtItem } from '@/app/components/chat/type'
import type { VisionFile } from '@/types/app'

export const sortAgentSorts = (list: ThoughtItem[]) => {
  if (!list)
    return list
  if (list.some(item => item.position === undefined))
    return list
  const temp = [...list]
  temp.sort((a, b) => a.position - b.position)
  return temp
}

export const addFileInfos = (list: ThoughtItem[], messageFiles: VisionFile[]) => {
  if (!list || !messageFiles)
    return list
  return list.map((item) => {
    if (item.files && item.files?.length > 0) {
      return {
        ...item,
        message_files: item.files.map(fileId => messageFiles.find(file => file.id === fileId)) as VisionFile[],
      }
    }
    return item
  })
}

export const isHtmlString = (str: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1)
}

export const isUrlString = (url: string) => {
  try {
    // Try to parse the URL
    const parsedUrl = new URL(url)

    // Check if the path matches /form/[name] pattern
    const pathMatch = parsedUrl.pathname.match(/^\/form\/([^\/]+)$/)

    return !!pathMatch
  }
  catch (error) {
    // Return null if URL is invalid or any other error occurs
    return false
  }
}
