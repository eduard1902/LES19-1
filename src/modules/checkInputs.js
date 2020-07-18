const checkInputs = () => {
    document.body.addEventListener('keypress', (event) => {
        const target = event.target.getAttribute('name'),
          targetValue = event.target.value,
          keyValue = event.key;
    
        if (target === 'user_name' || target === 'user_message') {
          if (!/[а-я А-Я]/.test(keyValue)) {
            event.preventDefault();
          }
        }
        if (target === 'user_phone') {
          if (!/[0-9+]/.test(keyValue)) {
            event.preventDefault();
          } else {
            if (targetValue.length > 0 && keyValue === '+') {
              event.preventDefault();
            }
          }
        }
        if (target === 'user_email') {
          if (target === 'user_email') {
            if (!/[0-9a-zA-Z@!#$%&'*+-/=?^_`{}|~]/.test(keyValue)) {
              event.preventDefault();
            }
          }
        }
      });
};
export default checkInputs;

