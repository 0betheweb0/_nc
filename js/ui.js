// dragable
/*const columns = document.querySelectorAll(".drag-group");
columns.forEach((column) => {
  new Sortable(column, {
    group: "shared",
    animation: 150,
    ghostClass: "blue-background-class"
  });
});*/

$(function(){

  // nav expand
  $('.service-wrap .btn-icon.expand').click(function () {
    if ($(this).parents('nav').hasClass('wide')) {
      $(this).parents('nav').removeClass('wide');
      $(this).removeClass('active');
      $(this).find('span').text('메뉴 보기');
      $(this).parents('nav').find('.widget-wrap').removeClass('wide');
      $(this).parents('nav').find('.widget-wrap .btn-icon.expand').removeClass('active');
      $(this).parents('nav').find('.widget-wrap .btn-icon.expand span').text('위젯 목록 보기');
    } else {
      $(this).parents('nav').addClass('wide');
      $(this).addClass('active');
      $(this).find('span').text('메뉴 숨기기');
      $(this).parents('nav').find('.widget-wrap').addClass('wide');
      $(this).parents('nav').find('.widget-wrap .btn-icon.expand').addClass('active');
      $(this).parents('nav').find('.widget-wrap .btn-icon.expand span').text('위젯 목록 숨기기');
    }
  });
  $('.widget-wrap .btn-icon.expand').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('span').text('위젯 목록 보기');
      $(this).parents('.widget-wrap').removeClass('wide');
    } else {
      $(this).addClass('active');
      $(this).find('span').text('위젯 목록 숨기기');
      $(this).parents('.widget-wrap').addClass('wide');
    }
  });
  $('.nav .btn-menu').click(function () {
    if ($(this).parents('nav').hasClass('wide')) {
      $(this).parents('nav').removeClass('wide');
      $(this).removeClass('active');
      $(this).find('span').text('메뉴 보기');
    } else {
      $(this).parents('nav').addClass('wide');
      $(this).addClass('active');
      $(this).find('span').text('메뉴 숨기기');
    }
  });

  // Form Dropdown
  $('.form-dropdown button').click(function () {
    $(this).parent('.form-dropdown').toggleClass('active');
  });

  $('.form-dropdown ul li a').on('click', function(e){
    e.preventDefault();
    $('.form-dropdown button').html($(this).html());
    $('.form-dropdown').removeClass('active');

    const cate = $(this).attr('href').replace('#','');

    if (cate === 'ALL') {
      $('.nav .drag-item').show();
    } else {
      $(`[data-cate=${cate}]`).show().siblings('.drag-item').hide();
    }
  });
});

// 개발 시 삭제해주세요: 공통 파일 인클루드
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}