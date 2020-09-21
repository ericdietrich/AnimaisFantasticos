function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo'); 

  //Verifica se existem esses elementos na página
  if(tabMenu.length && tabContent.length){
      
      function activeTab (index){
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        });
        direction = tabContent[index].dataset.anime
        tabContent[index].classList.add('ativo', direction);
      };

      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function(){
          activeTab(index);
        });
      });
  }
}
initTabNav(); 

function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo'
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  if(accordionList.length){
    function activeAccordion(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
  }
}
initAccordion();


function initScrollSuave(){
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    
    //forma alternativa de scroll suave
    /* 
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth"
    }); */

  };

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  sections[0].classList.add('ativo');
  const windowMetade = window.innerHeight * 0.6;

  if(sections.length){
    function animaScroll(){
      sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisibble = (sectionTop - windowMetade) < 0;
        if(isSectionVisibble){
          section.classList.add('ativo');
        }
        else {
          section.classList.remove('ativo');
        }
      });
    }

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();