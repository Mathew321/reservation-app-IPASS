//format 'yyyy-MM-ddTHH:mm:ss'
export const formattedDate = (selectedDate: Date) => {
	const selectedMonth = selectedDate.getMonth() + 1
	const selectedDay = selectedDate.getDate()
	const selectedHours = selectedDate.getHours()
	return '' +
		selectedDate.getFullYear() +
		'-' +
		(selectedMonth < 10 ? '0' + selectedMonth : selectedMonth) +
		'-' +
		(selectedDay < 10 ? '0' + selectedDay : selectedDay) + 
		'T' +
		(selectedHours < 10 ? '0' + selectedHours : selectedHours) +
		':00:00'
}
//format 'yyyy-MM-dd'
export const formattedDateShort = (selectedDate: Date) => {
        const selectedMonth = selectedDate.getMonth() + 1
		const selectedDay = selectedDate.getDate()
        return '' +
          selectedDate.getFullYear() +
          '-' +
          (selectedMonth < 10 ? '0' + selectedMonth : selectedMonth) +
          '-' +
          (selectedDay < 10 ? '0' + selectedDay : selectedDay)
}