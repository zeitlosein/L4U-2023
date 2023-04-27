document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      const targetElement = document.querySelector(target);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // const imageNames = ['warehouse', 'lumping', 'check'];
  // let currentImageIndex = 0;
  
  // setInterval(() => {
  //   const sections = document.querySelectorAll('.bg-image');
  //   currentImageIndex++;
  //   if (currentImageIndex >= imageNames.length) currentImageIndex = 0;
  
  //   sections.forEach((section, index) => {
  //     const nextImageIndex = (index + currentImageIndex) % imageNames.length;
  //     section.style.backgroundImage = `url('/assets/images/${imageNames[nextImageIndex]}.jpg')`;
  //   });
  // }, 10000);
  