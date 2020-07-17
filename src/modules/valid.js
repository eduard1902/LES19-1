const validator = () => {
  const valid1 = new Validator({
      selector: '#form1',
      pattern: {
        phone: /^\+?[78]([-()]*\d){10}$/,
        name: /[а-яё]+/i
      },
      method: {
        'form1-name': [
          ['notEmpty'],
          ['pattern', 'name']
        ],
        'form1-phone': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'form1-email': [
          ['notEmpty'],
          ['pattern', 'email']
        ]
      }
    });
  
    const valid2 = new Validator({
      selector: '#form2',
      pattern: {
        phone: /^\+?[78]([-()]*\d){10}$/,
        name: /[а-яё]+/i,
        message: /[а-яё]+/i
      },
      method: {
        'form2-name': [
          ['notEmpty'],
          ['pattern', 'name']
        ],
        'form2-phone': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'form2-email': [
          ['notEmpty'],
          ['pattern', 'email']
        ],
        'form2-message': [
          ['notEmpty'],
          ['pattern', 'message']
        ]
      }
    });
  
    const valid3 = new Validator({
      selector: '#form3',
      pattern: {
        phone: /^\+?[78]([-()]*\d){10}$/,
        name: /[а-яё]+/i
      },
      method: {
        'form3-name': [
          ['notEmpty'],
          ['pattern', 'name']
        ],
        'form3-phone': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'form3-email': [
          ['notEmpty'],
          ['pattern', 'email']
        ]
      }
    });
  
    valid1.init();
    valid2.init();
    valid3.init();
}

export default validator;