  // 위젯
$(function(){
  const widgetNav = document.querySelector('.nav .drag-group');
  const widgetContent = document.querySelector('.content .drag-group');

  new Sortable(widgetNav, {
    group     : {
      name: 'widget',
      pull: 'clone',
      put : false,
    },
    sort: false,
    dataIdAttr:'data-widget-id',
    swapThreshold:1,
    onSort:function(evt){
    },
    animation : 150,
    ghostClass: 'blue-background-class',
  });

  new Sortable(widgetContent, {
    group     : {
      name: 'widget',
    },
    animation : 150,
    swapThreshold:1,
    dataIdAttr:'data-widget-id',
    draggable:'.content .drag-group .drag-item',
    ghostClass: 'blue-background-class',
    handle: ".drag-item button.drag",
    onAdd     : function (evt) {
      const widgetId = evt.item.dataset.widgetId;

      if ($(widgetContent).find('[data-widget-id=' + widgetId).length > 1) {
        alert('이미 존재하는 위젯입니다.');
        evt.item.remove();
      }
    },
    store: {
      get: function (sortable) {
      },
      set: function (sortable) {
        const order = sortable.toArray();
        $(window).trigger('widgetChanged', {'widgetIds':order});
      }
    }
  });

  // 위젯 삭제
  $('.drag-item button.delete').on('click', function(e){
    if (confirm('삭제 하시겠습니까?')) {
      const widgetId = $(this).closest('.drag-item').data('widgetId');
      $(window).trigger('widgetRemove', {'widgetId':widgetId});
      $(this).closest('.drag-item').remove();
    }
  });

  // 위젯 삭제 시 삭제된 위젯 아이디 전달
  $(window).on('widgetRemove', function(e, params){
    console.log(params.widgetId); //삭제된 위젯 아이디
  });

  // 위젯 추가 및 위치이동 시 위젯 순서 array 전달
  $(window).on('widgetChanged', function(e, params){
    console.log(params.widgetIds);
  });
});