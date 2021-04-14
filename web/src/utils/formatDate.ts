import { Date as ParseDate } from 'prismic-reactjs'
import {
  parseISO,
  format,
} from 'date-fns';

//
// format : April 8, 2020
//
export const readableDate = ({ dateString }) => {
  const date = ParseDate(dateString)
  return (
    `<time dateTime=${dateString}>
      ${format(date, 'LLLL d, yyyy')}
    </time>`)
}

export const formatDateFull = (date: string) => {
  const parsedDate = parseISO(date)
  return format(parsedDate, "dd 'de' MMMM' 'de' YYYY")
  // 01 de Abril de 2020
};
//"'Dia' dd 'de' MMMM', às ' HH:mm'h'"
// Dia 01 de Abril às 16:00h


// Format date to MM/dd/yyyy - e.g 22/04/2029

//
// Format date - human readable format | 18 de março de 2029
//
export const formatDateShort = (date) => {
  const parsedDate = ParseDate(date)
  const formattedTimestamp = Intl.DateTimeFormat('pt-BR',{
    year: "numeric",
    month: "numeric",
    day: "numeric",
    //hour: "numeric",
    //minute: "2-digit",
    //second: "2-digit"
  }).format(parsedDate);

  return formattedTimestamp;
}

//
// Format date - human readable format | 18 de março de 2029
//
const formatDate = (date) => {
  const parsedDate = ParseDate(date)
  const formattedTimestamp = Intl.DateTimeFormat('pt-BR',{
    year: "numeric",
    month: "long",
    day: "2-digit",
    //hour: "numeric",
    //minute: "2-digit",
    //second: "2-digit"
  }).format(parsedDate);

  return formattedTimestamp;
}

export default formatDate;
