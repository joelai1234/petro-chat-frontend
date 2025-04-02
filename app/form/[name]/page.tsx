import { getFormTemplate } from '@/utils/formTemplate'

export default async function FormPage({
  params,
  searchParams,
}: {
  params: { name: string }
  searchParams: { [key: string]: string }
}) {
  const previewHtml = getFormTemplate(params.name, searchParams)

  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full border-0 preview-content"
        srcDoc={previewHtml}
        sandbox="allow-same-origin allow-scripts"
        title="Preview Content"
      />
    </div>
  )
}
