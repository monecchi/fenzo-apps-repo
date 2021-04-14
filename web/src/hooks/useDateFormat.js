import { useState, useEffect } from 'react'
import formatDate, { readableDate, formatDateShort } from '../utils/formatDate'

const useFormatDate = (date) => {

  const [publisedDate, setPublishedDate] = useState(date)

  useEffect(() => {
    setPublishedDate(formatDateShort(date))
  }, [publisedDate])

  return publisedDate
}

export default useFormatDate;
