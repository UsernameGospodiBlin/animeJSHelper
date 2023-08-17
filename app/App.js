//https://animejs.com/documentation/#functionBasedPropVal
const blockMove = anime({
    targets: '.block',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    duration: 3000,
    autoplay:false

  });
  const button = document.querySelector('#button1');
  button.addEventListener('click',blockMove.restart);



  