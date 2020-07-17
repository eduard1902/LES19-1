const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
    loadMessage = '<img src = "./images/loading2.svg" height = "40vh">',
    successMesage = 'Спасибо! Мы скоро с вами свяжемся!';
const form = document.querySelector('body');

const statusMessage =document.createElement('div');
    statusMessage.style.cssText = 'form-size: 2 rem; color: white;';
    

form.addEventListener('submit', (event) => {
    event.preventDefault();

const attentionError = event.target.querySelector('.error');
    if (attentionError) {
    return;
    }

    let target = event.target;
    target.appendChild(statusMessage);
    statusMessage.innerHTML = loadMessage;

    const formData = new FormData(target);
    let body = {};

    formData.forEach((val, key) => {
        body[key] = val;
    });

    postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
          statusMessage.textContent = successMesage;
		  setTimeout(() => statusMessage.remove(), 5000);
          // Clear all inputs
          const allInput = document.querySelectorAll('input');
          allInput.forEach((elem) => {
            elem.value = '';
          });
        })
        .catch((error) => {
          statusMessage.innerHTML = errorMessage;
          console.error(error);
        });
    });

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    };

};

export default sendForm;