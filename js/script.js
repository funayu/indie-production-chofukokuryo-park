$(document).ready(function () {

  // スムーススクロール
  // #で始まる出発地点をクリックした場合に処理を実行
  $('a[href^="#"]').click(function () {
    // 出発地点の値を取得
    const href = $(this).attr('href')
    // 到着地点を取得
    const target = $(href == '#' || href == '' ? 'html' : href)
    
    // 到着地点を数値で取得
    // ヘッダーと仕切り線の高さ分位置を調整する
    const headerHeight = $("header").height();
    // 一番高いボーダー仕切りの高さを使う、境界の調整のため+1
    const separationHeight = $(".separation img").eq(3).height() +1;
    const position = target.offset().top - headerHeight + separationHeight;
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
  

  // ハンバーガーボタンクリック時の処理
  $('.btnHamburger').on('click', function(){　
    $('.btnHamburger, #coverlayer, nav').toggleClass('is-active');　
  });
  // coverlayer上のナビゲーションボタンクリック時処理
  $('nav ul li a').on('click', function(){　
    $(".btnHamburger, #coverlayer, nav").removeClass('is-active');
  });
  
  
  //ヘッダー固定の処理（PCのみ）
  if($(window).width()>=980){
    const header = $('header'),
    offset = header.offset();
    
    $(window).scroll(function () {
      if($(window).scrollTop() > offset.top) {
        header.addClass('fixed');
        $("#recommend_attractions").css("margin-top","156px");
      } else {
        header.removeClass('fixed');
        $("#recommend_attractions").css("margin-top","0");
      }
    }); 
  }
  
  
})
