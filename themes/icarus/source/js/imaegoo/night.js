(function() {
  /**
   * Icarus 夜间模式 by iMaeGoo
   * https://www.imaegoo.com/
   */ 
  var isNight = localStorage.getItem('night');
  var nightNav;
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function applyNight(value) {
      if (value.toString() === 'true') {
          document.body.classList.remove('light');
          document.body.classList.add('night');
      } else {
          document.body.classList.remove('night');
          document.body.classList.add('light');
      }
  }

  // 当无用户手动偏好时，跟随系统主题（不设置任何 class，交由 CSS @media 控制）
  function applyAuto() {
      document.body.classList.remove('night');
      document.body.classList.remove('light');
  }

  function findNightNav() {
      nightNav = document.getElementById('night-nav');
      if (!nightNav) {
          setTimeout(findNightNav, 100);
      } else {
          nightNav.addEventListener('click', switchNight);
      }
  }

  function switchNight() {
      isNight = isNight ? isNight.toString() !== 'true' : true;
      applyNight(isNight);
      localStorage.setItem('night', isNight);
  }

  findNightNav();
  // 如果未设置手动偏好，则跟随系统；否则应用手动偏好
  if (isNight === null) {
      applyAuto();
  } else {
      applyNight(isNight);
  }

  // 系统主题变化时，只有在未设置手动偏好时才跟随变化
  prefersDark.addEventListener('change', function() {
      if (localStorage.getItem('night') === null) {
          applyAuto();
      }
  });
}());
