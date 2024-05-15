// Show toast function
function toast({ title = '', 
    message = '', 
    type = 'info', 
    duration = 3000 
    }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000); 

        // Remove toast when clicked
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-exclamation',
            warning: 'fa-solid fa-triangle-exclamation',
            error: "fa-solid fa-xmark"
        };
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Kết nối thành công',
        type: 'success',
        duration: 3000
    })
}

function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Kết nối thất bại, vui lòng liên hệ quản trị viên',
        type: 'error',
        duration: 5000
    })
}

function showInfoToast() {
    toast({
        title: 'Thông tin không đầy đủ',
        message: 'Kết nối chưa thành công, nhập lại thông tin',
        type: 'info',
        duration: 3000
    })
}

function showWarningToast() {
    toast({
        title: 'Cảnh báo',
        message: 'Kết nối có vấn đề, vui lòng kiểm tra lại',
        type: 'warning',
        duration: 5000
    })
}