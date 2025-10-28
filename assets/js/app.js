(function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click',()=>{
      const visible = nav.style.display === 'flex';
      nav.style.display = visible ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '.75rem';
      nav.style.background = 'rgba(13,13,15,.98)';
      nav.style.position = 'absolute';
      nav.style.top = '56px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '1rem';
      nav.style.borderBottom = '1px solid #272731';
    });
  }

  const cartBtn = document.querySelectorAll('.card-cta .btn, .mini-card .btn');
  const cartCountEl = document.querySelector('.cart-count');
  let cartCount = 0;
  cartBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
      cartCount += 1;
      if(cartCountEl) cartCountEl.textContent = cartCount > 0 ? String(cartCount) : '';
    })
  });

  const form = document.getElementById('signup-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const email = (document.getElementById('email')||{}).value || '';
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('올바른 이메일을 입력하세요.');
        return;
      }
      alert('Oddtype 구독해주셔서 감사합니다!');
      form.reset();
    });
  }

  const tabs = document.querySelectorAll('.tab');
  const sections = ['skin-section', 'lipcheek-section'];
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = tab.getAttribute('data-target');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const scrollLeft = document.querySelector('.scroll-left');
  const scrollRight = document.querySelector('.scroll-right');
  const skinGrid = document.getElementById('skin-grid');
  if (scrollLeft && scrollRight && skinGrid) {
    scrollLeft.addEventListener('click', () => {
      skinGrid.scrollBy({ left: -340, behavior: 'smooth' });
    });
    scrollRight.addEventListener('click', () => {
      skinGrid.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  // enable mouse drag scrolling
  if (skinGrid) {
    let isDown = false;
    let startX;
    let scrollLeft;

    skinGrid.addEventListener('mousedown', (e) => {
      isDown = true;
      skinGrid.classList.add('active');
      startX = e.pageX - skinGrid.offsetLeft;
      scrollLeft = skinGrid.scrollLeft;
    });

    skinGrid.addEventListener('mouseleave', () => {
      isDown = false;
      skinGrid.classList.remove('active');
    });

    skinGrid.addEventListener('mouseup', () => {
      isDown = false;
      skinGrid.classList.remove('active');
    });

    skinGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - skinGrid.offsetLeft;
      const walk = (x - startX) * 2;
      skinGrid.scrollLeft = scrollLeft - walk;
    });
  }
})();


