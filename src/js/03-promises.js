import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(e) {
  e.preventDefault();

  const initialDelay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const currentDelay = initialDelay + step * i;

    createPromise(position, currentDelay)
      .then(result => {
        Notiflix.Notify.success(
          `Fulfilled promise ${result.position} in ${result.delay} ms`
        );
      })
      .catch(error => {
        Notiflix.Notify.failure(
          `Rejected promise ${error.position} in ${error.delay} ms`
        );
      });
  }
}
