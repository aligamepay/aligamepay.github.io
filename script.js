(function(){
      const thumbs = Array.from(document.querySelectorAll('.thumb img'));
      const lightbox = document.getElementById('lightbox');
      const lbImg = document.getElementById('lightboxImg');
      const imgTitle = document.getElementById('imgTitle');
      const imgIndex = document.getElementById('imgIndex');
      const closeBtn = document.getElementById('closeBtn');
      const downloadBtn = document.getElementById('downloadBtn');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let current = 0;

      function openAt(i){
        const t = thumbs[i];
        if(!t) return;
        lbImg.src = t.src;
        imgTitle.textContent = t.dataset.title || t.alt || 'Изображение';
        imgIndex.textContent = (i+1) + ' / ' + thumbs.length;
        lightbox.classList.add('open');
        current = i;
      }
      thumbs.forEach((t, i)=> t.addEventListener('click', ()=> openAt(i)));
      closeBtn.addEventListener('click', ()=> lightbox.classList.remove('open'));
      downloadBtn.addEventListener('click', ()=>{const a=document.createElement('a');a.href=lbImg.src;a.download='screenshot-'+(current+1)+'.jpg';a.click();});
      prevBtn.addEventListener('click', ()=> openAt((current-1+thumbs.length)%thumbs.length));
      nextBtn.addEventListener('click', ()=> openAt((current+1)%thumbs.length));
      document.addEventListener('keydown', (e)=>{if(!lightbox.classList.contains('open')) return;if(e.key==='ArrowLeft') prevBtn.click();if(e.key==='ArrowRight') nextBtn.click();if(e.key==='Escape') closeBtn.click();});
      lightbox.addEventListener('click', (e)=>{if(e.target === lightbox) closeBtn.click();});
    })();