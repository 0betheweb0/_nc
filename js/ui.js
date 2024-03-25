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