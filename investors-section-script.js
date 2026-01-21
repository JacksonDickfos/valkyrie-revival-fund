/* ============================================
   WHAT OUR INVESTORS GET SECTION - JAVASCRIPT
   Copy this JavaScript into your site
   ============================================ */

// Investor Card Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.investor-card[data-modal]');
    const modals = document.querySelectorAll('.investor-modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Open modal when card is clicked
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.investor-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close modal when clicking outside the modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });
});
