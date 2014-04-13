var mixArgs = {
  targetSelector: '.product',
  filterSelector: '',
  sortSelector: '.order',
  buttonEvent: 'click',
  effects: 'fade',
  listEffects: null,
  easing: 'smooth',
  layoutMode: 'grid',
  targetDisplayGrid: 'block',
  targetDisplayList: 'block',
  gridClass: '',
  listClass: '',
  transitionSpeed: 600,
  showOnLoad: 'none',
  sortOnLoad: false,
  multiFilter: false,
  filterLogic: 'and',
  resizeContainer: false,
  minHeight: 0,
  failClass: 'fail',
  perspectiveDistance: '3000',
  perspectiveOrigin: '50% 50%',
  animateGridList: true
}

$('#grid').mixitup(mixArgs);