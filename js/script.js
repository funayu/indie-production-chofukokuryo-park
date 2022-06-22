$(document).ready(function () {
  // スムーススクロール
  // #で始まる出発地点をクリックした場合に処理を実行
  $('a[href^="#"]').click(function () {
    // 出発地点の値を取得
    const href = $(this).attr('href')
    // 到着地点を取得
    const target = $(href == '#' || href == '' ? 'html' : href)
    // 到着地点を数値で取得
    const position = target.offset().top
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, 500, 'swing')
    // トップへ戻るボタンを押した時にボタンがちらつかないようにする
    return false
  })

  // トップへ戻るボタンをスクロールしたら出す
  const totop = $('#totop')
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      totop.fadeIn()
    } else {
      totop.fadeOut()
    }
  })
})
