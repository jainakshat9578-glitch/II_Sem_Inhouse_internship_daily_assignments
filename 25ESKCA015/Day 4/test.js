    let clickCount = 0;
    const clickDisplay = document.getElementById('clickCount');
    const resetBtn = document.getElementById('resetBtn');
    const toggleThemeBtn = document.getElementById('toggleTheme');

    document.addEventListener('click', function (event) {
        if (event.target === resetBtn || event.target === toggleThemeBtn) return;
        clickCount++;
        clickDisplay.textContent = clickCount;
    });

    resetBtn.addEventListener('click', function () {
        clickCount = 0;
        clickDisplay.textContent = clickCount;
    });

    toggleThemeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    });
