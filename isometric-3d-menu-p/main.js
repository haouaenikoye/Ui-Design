 class RotateView {
   constructor(rotateLeft, isoMenu, bloco, blocoAfter1, blocoAfter2,blocoAfter3, blocoAfter4, blocoAfter5, blocoAfter6, blocoBefore1, blocoBefore2, blocoBefore3, blocoBefore4, blocoBefore5, blocoBefore6) {

    this.rotateLeft = document.querySelector(rotateLeft);
    this.isoMenu = document.querySelector(isoMenu);
    this.bloco = document.querySelector(bloco);

    this.blocoAfter1 = document.querySelector(blocoAfter1);
    this.blocoAfter2 = document.querySelector(blocoAfter2);
    this.blocoAfter3 = document.querySelector(blocoAfter3);
    this.blocoAfter4 = document.querySelector(blocoAfter4);
    this.blocoAfter5 = document.querySelector(blocoAfter5);
    this.blocoAfter6 = document.querySelector(blocoAfter6);
  
    this.blocoBefore1 = document.querySelector(blocoBefore1);
    this.blocoBefore2 = document.querySelector(blocoBefore2);
    this.blocoBefore3= document.querySelector(blocoBefore3);
    this.blocoBefore4 = document.querySelector(blocoBefore4);
    this.blocoBefore5 = document.querySelector(blocoBefore5);
    this.blocoBefore6 = document.querySelector(blocoBefore6);
 
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }
 
    handleClick() {
      this.isoMenu.classList.toggle(this.activeClass);
      this.rotateLeft.classList.toggle(this.activeClass);
      this.bloco.classList.toggle(this.activeClass);

      this.blocoAfter1.classList.toggle(this.activeClass);
      this.blocoAfter2.classList.toggle(this.activeClass);
      this.blocoAfter3.classList.toggle(this.activeClass);
      this.blocoAfter4.classList.toggle(this.activeClass);
      this.blocoAfter5.classList.toggle(this.activeClass);
      this.blocoAfter6.classList.toggle(this.activeClass);

      this.blocoBefore1.classList.toggle(this.activeClass);
      this.blocoBefore2.classList.toggle(this.activeClass);
      this.blocoBefore3.classList.toggle(this.activeClass);
      this.blocoBefore4.classList.toggle(this.activeClass);
      this.blocoBefore5.classList.toggle(this.activeClass);
      this.blocoBefore6.classList.toggle(this.activeClass);


    }

    addClickEvent() {
      this.rotateLeft.addEventListener("click", this.handleClick);
    }


    init () {
      if (this.rotateLeft) {
        this.addClickEvent();
      }
      return this;
    }
 }

 const rotateView = new RotateView(
   ".rotate-left",
   ".iso-menu",
   ".bloco",
   ".bloco-after1",
   ".bloco-after2",
   ".bloco-after3",
   ".bloco-after4",
   ".bloco-after5",
   ".bloco-after6",
   ".bloco-before1",
   ".bloco-before2",
   ".bloco-before3",
   ".bloco-before4",
   ".bloco-before5",
   ".bloco-before6",

 );
 rotateView.init();        

