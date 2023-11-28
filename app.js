alert("Добро пожаловать на мой сайт")


document.addEventListener('DOMContentLoaded', function () {
	setTimeout(openPopup, 7000) // Открыть окно через 6 секунд после загрузки
})

function openPopup() {
	document.getElementById('popup').style.display = 'block'
}

function closePopup() {
	document.getElementById('popup').style.display = 'none'
}

function submitForm() {
	// Здесь вы можете добавить логику обработки отправки формы
	alert('Данные отправлены!') // Замените на свою логику
	closePopup()
	return false // Чтобы форма не отправляла реальный запрос (на сервер) в данном примере
}
