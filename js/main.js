
window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hidePreloader');
    document.body.style.overflow = "visible";
});

$(document).ready(function(){
    // jquery fa-bars navigation responsive
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });

    // scroll Top
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#343a40','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
            $('.header').css({'background':'none','box-shadow':'none'});

        }
        
    });

    //notification Jquery
    let alert_close_icons = document.querySelectorAll('.alert-notif>.close');
    if(alert_close_icons)
    {
      alert_close_icons.forEach((alert_close_icon)=>{
        alert_close_icon.addEventListener('click', function()
        {
          this.closest('.alert-notif').classList.add('close');
          
          this.closest('.alert-notif').addEventListener('transitionend', function(event){
            if(event.propertyName=='transform')
            {
              this.remove();
            }
          });
        });
      });
    }

    //faq Accordion
     // jquery faq
     let acc = document.getElementsByClassName('accordion');
     let i;
     let len = acc.length;
     for(i = 0; i < len; i++){
         acc[i].addEventListener('click', function() {
             this.classList.toggle('active');
             let panel = this.nextElementSibling;
             if(panel.style.maxHeight){
                 panel.style.maxHeight = null;
             } else {
                 panel.style.maxHeight = panel.scrollHeight + 'px'
             }
         })
     }
 
    // coment Jquery
    $("#coment-form").on("submit", function(event) {
      event.preventDefault();
      const namecomentar = $(".name").val();
      const comentar = $(".message").val();

      if (namecomentar && comentar) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success to add a comment',
          showConfirmButton: false,
          timer: 1500
        })

        $(".box-container").append(`
        <div class="box">
          <img src="/images/user.svg" alt="user-coment">
          <div class="info">
              <p><i class="fas fa-quote-left"></i>${comentar}<i class="fas fa-quote-right"></i></p>
                <h2>${namecomentar}</h2>
            </div>
        </div>
    `);
    $(".name").val("");
    $(".message").val("");
      } else {

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed to add a comment',
          showConfirmButton: false,
          timer: 1500
        })

      }
  })
  
});

 

