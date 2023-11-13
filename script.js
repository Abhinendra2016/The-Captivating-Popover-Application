document.addEventListener('DOMContentLoaded', function () {
    const popoverBtn = document.getElementById('popoverBtn');
    const popoverContent = document.getElementById('popoverContent');
    const closePopoverBtn = document.getElementById('closePopoverBtn');
  
    popoverBtn.addEventListener('click', function () {
      popoverContent.style.display = 'block';
    });
  
    closePopoverBtn.addEventListener('click', function () {
      popoverContent.style.display = 'none';
    });
  });
  