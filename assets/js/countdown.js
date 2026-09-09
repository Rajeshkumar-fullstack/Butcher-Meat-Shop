/**
 * ==========================================================================
 * PRIME & CUT — LIVE COUNTDOWN TIMER
 * Reusable countdown timer for Coming Soon & Scheduled Maintenance pages.
 * Looks for elements with data-countdown-date attribute or defaults to 14 days.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimers();
});

function initCountdownTimers() {
  const countdownElements = document.querySelectorAll('[data-countdown-date]');
  
  countdownElements.forEach(container => {
    let targetStr = container.getAttribute('data-countdown-date');
    let targetDate;

    if (targetStr) {
      targetDate = new Date(targetStr).getTime();
    } else {
      // Default: 14 days from current timestamp
      targetDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);
    }

    const daysEl = container.querySelector('.cd-days');
    const hoursEl = container.querySelector('.cd-hours');
    const minutesEl = container.querySelector('.cd-minutes');
    const secondsEl = container.querySelector('.cd-seconds');

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  });
}
