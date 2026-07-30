let animals_bottom = document.querySelectorAll('.animals_bottom');
let real_animal = document.querySelectorAll('.real_animal');

animals_bottom.forEach((ani_bo, index) => {
    ani_bo.addEventListener('click', () => {
        real_animal[index].classList.toggle('on');
    });
});
