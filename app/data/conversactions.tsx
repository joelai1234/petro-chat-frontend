import { CalendarIcon, ChartPieIcon, ClockIcon, GlobeAltIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import type { DefaultConversationItem } from '@/types/app'

const defaultConversationItems: DefaultConversationItem[] = [
  {
    id: 'daily-report',
    name: 'Daily Report',
    icon: <ClockIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'daily-report',
  },
  {
    id: 'end-of-month-report',
    name: 'End of Month Report',
    icon: <CalendarIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'end-of-month-report',
  },
  {
    id: 'production-analysis',
    name: 'Production Analysis',
    icon: <ChartPieIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'production-analysis',
  },
  {
    id: 'performance-metrics',
    name: 'Performance Metrics',
    icon: <PresentationChartBarIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'performance-metrics',
  },
  {
    id: 'field-operations-status',
    name: 'Field Operations Status',
    icon: <GlobeAltIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
    value: 'field-operations-status',
  },
  // {
  //   id: 'resource-allocation',
  //   name: 'Resource Allocation',
  //   icon: <ChartBarIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />,
  //   value: 'resource-allocation',
  // },
]

export default defaultConversationItems
