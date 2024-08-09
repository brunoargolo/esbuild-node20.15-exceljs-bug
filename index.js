import exceljs from 'exceljs';

export const handler = () => {
  const workbook = new exceljs.stream.xlsx.WorkbookWriter({});
}
