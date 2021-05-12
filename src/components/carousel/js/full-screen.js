const fullScreenCarousel = ($el) => {
  console.log('fullScreenCarousel', $el)
  document.documentElement.classList.add('scroll-snap-y');
  // const $carousel = $el.querySelector('.cmp-carousel');
  const $content = $el.querySelector('.cmp-carousel__content');
  const $items = $content.querySelectorAll('.cmp-carousel__item');
  console.log('$items',$items);
  const $indicators = $el.querySelector('.cmp-carousel__indicators');
  // $carousel.insertBefore($indicators, $content);
  $indicators.querySelectorAll('.cmp-carousel__indicator').forEach($li => {
    $li.addEventListener('click', (e) => {
      const [carouselId,itemNumber] = $li.getAttribute('aria-controls').split('-item-');
      const id = $items[itemNumber].getAttribute('id');
      console.log('carouselId',carouselId);
      console.log('carouselId',itemNumber);
      console.log('id',id);
      window.location.hash = id;
      $items[itemNumber].scrollIntoView({ block: 'end',  behavior: 'smooth' });
      $li.classList.add('cmp-carousel__indicator--active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel--preset\\:full-screen').forEach($el => fullScreenCarousel($el))
})