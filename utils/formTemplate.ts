import type { Form6QData, Form714Data } from '@/types/form'
import { form714Template } from '@/views/Sample_Form_714'
import { form6QTemplate } from '@/views/Sample_Form_6Q'

export const customRender = (template: string, data: Record<string, any>): string => {
  // Replace <%= variable %> with corresponding values
  return template.replace(/<%=\s*([^%>]+)\s*%>/g, (match, key) => {
    const trimmedKey = key.trim()
    return data[trimmedKey] !== undefined ? String(data[trimmedKey]) : ''
  })
}

export const getFormTemplate = (formName: string, data: any) => {
  // Define default empty values based on form type
  let defaultValues: Form714Data | Form6QData
  let template: string

  switch (formName) {
    case '714':
      defaultValues = {
        respondent_identification_code: '',
        respondent_name: '',
        mailing_address: '',
        contact_name: '',
        contact_title: '',
        contact_email_address: '',
        contact_telephone_number: '',
        certifying_official_name: '',
        certifying_official_title: '',
        certifying_official_date: '',
        name: '',
      } as Form714Data
      template = form714Template
      break

    default: // Form 6Q is the default case
      defaultValues = {
        respondent_exact_legal_name: '',
        year_period_report: '',
        previous_name_and_change_date: '',
        principal_office_address: '',
        contact_person_name: '',
        contact_person_title: '',
        contact_person_address: '',
        contact_person_phone: '',
        date_of_report: '',
      } as Form6QData
      template = form6QTemplate
      break
  }

  // Merge default values with provided search params
  const formData = {
    ...defaultValues,
    ...data,
  }

  // Render the template with the merged form data
  const previewHtml = customRender(template, formData)
  return previewHtml
}

export const getFormTemplateFromUrl = (url: string) => {
  try {
    // Try to parse the URL
    const parsedUrl = new URL(url)

    // Check if the path matches /form/[name] pattern
    const pathMatch = parsedUrl.pathname.match(/^\/form\/([^\/]+)$/)
    if (!pathMatch)
      return null

    // Extract form name
    const formName = pathMatch[1]

    // Get all search params as an object
    const searchParams: { [key: string]: string } = {}
    parsedUrl.searchParams.forEach((value, key) => {
      searchParams[key] = value
    })

    // Call getFormTemplate with the extracted data
    return getFormTemplate(formName, searchParams)
  }
  catch (error) {
    // Return null if URL is invalid or any other error occurs
    return null
  }
}
