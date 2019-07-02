$(function() {
  function un_like_html(item){
    html = `
    <div class="iine__button iine__button-like un-like" data-item=${item.item}>
      <p>
        <span>
          <i class="fas fa-heart"></i>
        </span>
        ${item.count}
      </p>
    </div>
    `
    return html
  }

  $(document).on('click', ".like", function() {
    var item_id = $(this).data('item')
    $.ajax({
      type: 'POST',
      url: '/likes',
      data: { item_id: item_id},
      dataType: 'json'
    })
    .done(function(item){
      $(".item-like-link").empty()
      html = un_like_html(item)
      $(".item-like-link").append(html)
    })
  })


  function like_html(item){
    html = `
    <div class="iine__button like" data-item=${item.item}>
    <p>
      <span>
        <i class="far fa-heart"></i>
      </span>
      ${item.count}
    </p>
    </div>
    `
    return html
  }

  $(document).on('click', ".un-like", function() {
    var item_id = $(this).data('item')
    $.ajax({
      type: 'DELETE',
      url: `/likes/${item_id}`,
      data: {item_id: item_id},
      dataType: 'json'
    })
    .done(function(item){
      $(".item-like-link").empty()
      html = like_html(item)
      $(".item-like-link").append(html)
    })
  })
})