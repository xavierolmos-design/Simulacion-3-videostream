document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Contador de "Me gusta"[cite: 1]
    // ==========================================
    const likeBtn = document.querySelector('.action-buttons .btn-action:nth-child(1)');
    let liked = false;
    let likesCount = 4800; // 4.8 K

    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            if (!liked) {
                likesCount += 1;
                liked = true;
                likeBtn.style.backgroundColor = '#e5e5e5';
                likeBtn.style.fontWeight = 'bold';
            } else {
                likesCount -= 1;
                liked = false;
                likeBtn.style.backgroundColor = '#f2f2f2';
                likeBtn.style.fontWeight = 'normal';
            }
            // Formatear el número de nuevo a miles
            const formattedLikes = (likesCount / 1000).toFixed(1).replace('.', ',');
            likeBtn.textContent = `👍 ${formattedLikes} K`;
        });
    }

    // ==========================================
    // 2. Botón de Suscripción[cite: 1]
    // ==========================================
    const subscribeBtn = document.querySelector('.btn-subscribe');
    const subsCountElement = document.querySelector('.subscribers');
    let isSubscribed = false;

    if (subscribeBtn && subsCountElement) {
        subscribeBtn.addEventListener('click', () => {
            if (!isSubscribed) {
                subscribeBtn.textContent = 'Suscrito';
                subscribeBtn.style.backgroundColor = '#606060';
                subsCountElement.textContent = '1,200,001 suscriptores';
                isSubscribed = true;
            } else {
                subscribeBtn.textContent = 'Suscribirse';
                subscribeBtn.style.backgroundColor = '#cc0000';
                subsCountElement.textContent = '1,2 M de suscriptores';
                isSubscribed = false;
            }
        });
    }

    // ==========================================
    // 3. Añadir de Recomendados a la Cola[cite: 1]
    // ==========================================
    const queueList = document.querySelectorAll('.sidebar-list')[0]; // Primera lista: Cola
    const recommendedList = document.querySelectorAll('.sidebar-list')[1]; // Segunda lista: Recomendados

    if (recommendedList && queueList) {
        recommendedList.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-add')) {
                const card = event.target.closest('.card-video-sidebar');
                
                // Cambiar el botón '+' por el botón de eliminar '✕'
                const actionBtn = card.querySelector('.btn-add');
                actionBtn.className = 'btn-remove';
                actionBtn.textContent = '✕';

                // Mover el elemento a la cola
                queueList.appendChild(card);
            }
        });

        // Eliminar elementos de la cola o moverlos de vuelta
        queueList.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-remove')) {
                const card = event.target.closest('.card-video-sidebar');
                card.remove(); // Elimina el video de la cola
            }
        });
    }

    // ==========================================
    // 4. Limpiar Toda la Cola
    // ==========================================
    const clearQueueBtn = document.querySelector('.btn-link');
    if (clearQueueBtn && queueList) {
        clearQueueBtn.addEventListener('click', () => {
            queueList.innerHTML = '';
        });
    }

    // ==========================================
    // 5. Previsualización al pasar el cursor sobre las miniaturas[cite: 1]
    // ==========================================
    const thumbnails = document.querySelectorAll('.thumb-box');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('mouseenter', () => {
            thumb.style.opacity = '0.7';
            thumb.style.transition = 'opacity 0.2s ease';
        });

        thumb.addEventListener('mouseleave', () => {
            thumb.style.opacity = '1';
        });
    });
});