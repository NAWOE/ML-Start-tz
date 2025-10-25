// Ждем, пока вся страница загрузится
document.addEventListener('DOMContentLoaded', () => {

    // Находим кнопку по ее ID
    const themeToggleButton = document.getElementById('theme-toggle');
    // Находим body, чтобы менять его класс
    const body = document.body;

    // Функция для применения сохраненной темы
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        // Если в памяти сохранена 'light', применяем светлую тему
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
        }
    };

    // Применяем тему сразу при загрузке страницы
    applySavedTheme();

    // Добавляем обработчик клика на кнопку
    themeToggleButton.addEventListener('click', () => {
        // Переключаем класс 'light-theme' на body
        body.classList.toggle('light-theme');

        // Сохраняем выбор в localStorage
        if (body.classList.contains('light-theme')) {
            // Если светлая тема активна, сохраняем 'light'
            localStorage.setItem('theme', 'light');
        } else {
            // Иначе удаляем запись, чтобы по умолчанию была темная
            localStorage.removeItem('theme');
        }
    });

});