import { CalendarIcon, ChartPieIcon, ClockIcon, GlobeAltIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import type { DefaultConversationItem } from '@/types/app'

const defaultConversationItems: DefaultConversationItem[] = [
  {
    id: 'daily-report',
    name: 'Daily Report',
    icon: <ClockIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'Give me today\'s report.',
  },
  {
    id: 'end-of-month-report',
    name: 'End of Month Report',
    icon: <CalendarIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'Show me the end-of-month report.',
  },
  {
    id: 'production-analysis',
    name: 'Production Analysis',
    icon: <ChartPieIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'What’s the production analysis looking like?',
  },
  {
    id: 'performance-metrics',
    name: 'Performance Metrics',
    icon: <PresentationChartBarIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'How are the performance metrics?',
  },
  {
    id: 'field-operations-status',
    name: 'Field Operations Status',
    icon: <GlobeAltIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'What’s the status in the field?',
  },
  // {
  //   id: 'resource-allocation',
  //   name: 'Resource Allocation',
  //   icon: <ChartBarIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
  //   value: 'How are we doing on resource allocation?',
  // },
]

export default defaultConversationItems
