import { RiAncientGateFill, RiHistoryLine, RiAccountPinBoxFill } from 'react-icons/ri'

import { Tab } from './components'

export const BottomNavigation = () => {
  return (
    <div className="flex absolute shadow-lg w-full bottom-0 py-2">
      <Tab href="/history" label="기록" icon={RiHistoryLine} />
      <Tab href="/exercise" label="운동" icon={RiAncientGateFill} />
      <Tab href="/my-account" label="내 정보" icon={RiAccountPinBoxFill} />
    </div>
  )
}
