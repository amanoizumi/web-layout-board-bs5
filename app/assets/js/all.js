$(function () {
  // 導覽列當前頁面的 active
  function navActive() {
    const path = window.location.pathname.split('/')[1];
    const pathNameLen = path.length - 5;
    const pathName = path.substring(0, pathNameLen);

    $('.l-navbar .nav-link').each((idx, item) => {
      const currentPage = item.lastChild.textContent.toLowerCase();
      if (currentPage === pathName) {
        $(item).parent().addClass('active');
      }
    });
  }
  navActive();

  // replay 留言動畫效果
  function toggleComment() {
    let time = null;
    if (!$('.comment').hasClass('show')) {
      $('.comment').addClass('show');
      time = setTimeout(() => {
        $('.reply').focus();
      }, 700);
    } else {
      $('.comment').removeClass('show');
      clearTimeout(time);
    }
  }
  $('#replyButton').on('click', toggleComment);

  // 管理員資料 modal 展開按鈕
  function toggleExpandBtns(e) {
    e.preventDefault(e);
    if ($('#expandBtns').hasClass('d-none')) {
      $('#expandBtns').removeClass('d-none').addClass('d-flex');
      $('#toggleExpandBtns > .material-icons').text('expand_less');
    } else {
      $('#expandBtns').removeClass('d-flex').addClass('d-none');
      $('#toggleExpandBtns > .material-icons').text('expand_more');
    }
  }
  $('#toggleExpandBtns').on('click', toggleExpandBtns);
});
