import React, { useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const History = () => {
  const [value, onChange] = useState(new Date())
  const histories: Record<string, string> = {
    '03-03-2023': 'routine1',
    '07-03-2023': 'routine2',
    '12-03-2023': 'routine3',
    '13-03-2023': 'routine4',
    '15-03-2023': 'routine5',
  }
  const mark = Object.keys(histories)
  const pick = moment(value).format('DD-MM-YYYY')
  const history = histories[pick] !== undefined ? histories[pick] : 'none'
  const tileClassName = ({ date, view }: any) => {
    const dateString = moment(date).format('DD-MM-YYYY')
    console.log(dateString)
    if (mark.includes(dateString)) {
      console.log('marked')
      return 'highlight'
    }
    return ''
  }
  return (
    <div>
      <div className="flex justify-center mt-8">
        <Calendar onChange={onChange} value={value} tileClassName={tileClassName} />
      </div>
      <div className="text-gray-500 mt-4">{pick}</div>
      <div className="text-gray-500 mt-4">{history}</div>
      <div className="text-gray-500 mt-4">{mark}</div>
    </div>
  )
}
export default History
