const slider = {

    images: ["https://syn.org.au/app/uploads/cat-disco-470x432.jpg","https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F299%2F255%2F29d.jpeg","https://i0.wp.com/www.fox21news.com/wp-content/uploads/sites/37/2022/11/thumbnail_image.jpg?ssl=1"], // список зображень
    
    currentIndex: 0, // поточний індекс зображення
    
    init: function() {
        const prevButton = document.getElementById("prevButton");
      const nextButton = document.getElementById("nextButton");
      
      prevButton.addEventListener("click", this.showPrevImage.bind(this));
      nextButton.addEventListener("click", this.showNextImage.bind(this));
      
      this.updateButtons();
    },
    
    showPrevImage: function() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.updateImage();
          this.updateButtons();
      }
    },
    
    showNextImage: function() {
        if(this.currentIndex < this.images.length-1 ){
            this.currentIndex++;
          this.updateImage();
          this.updateButtons();
        }
    },
    
    updateImage: function () {
        const imageElement = document.getElementById("image"); 
      imageElement.src = this.images[this.currentIndex];
    },
    
    updateButtons : function() {
        const prevButton = document.getElementById("prevButton");
         const nextButton = document.getElementById("nextButton");
      
        if (this.currentIndex === 0) {
          prevButton.style.display = "none"; // ховати кнопку Prev
        } else {
          prevButton.style.display = "block"; // показувати кнопку Prev
        }
    
        if (this.currentIndex === this.images.length - 1) {
          nextButton.style.display = "none"; // ховати кнопку Next
        } else {
          nextButton.style.display = "block"; // показувати кнопку Next
        }
      
    }
    };
slider.init();