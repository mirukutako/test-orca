import { IcHigh, IcMedium, IcLow } from './Icons'
const StatusIcon = ({ status = 'High' }) => {
  const statusMap = { IcHigh, IcMedium, IcLow }
  const dynamicStatus = `Ic${status}`
  const DynamicIcon = statusMap[dynamicStatus]
  return <DynamicIcon />
}

export default StatusIcon
