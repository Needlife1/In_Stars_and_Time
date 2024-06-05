import axios from 'axios';

const form = document.querySelector('.contact-form') as HTMLFormElement;
form?.addEventListener('submit', contact);

function contact(e: Event) {
  e.preventDefault();

  const formElements = e.target as HTMLFormElement;
  const namesInput: Array<string> = ['name', 'email', 'message'];
  const user: Record<string, string> = {};

  namesInput.forEach((name) => {
    const input = formElements.elements.namedItem(name) as HTMLInputElement;

    if (input.value.length === 0) {
      input.id = 'error';
    } else {
      user[name] = input.value;
      input.id = '';
    }

    if (Object.keys(user).length === 3) {
      send(user);
      form?.reset();
    }
  });
}

function send(user: Record<string, string>) {
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post('', options)
    .then((user) => {
      console.log(user);
      const successful: HTMLElement | null =
        document.querySelector('.successful');

      successful?.classList.remove('is-hidden');
    })
    .catch((error) => {
      console.log(error);
      const notSuccessful: HTMLElement | null =
        document.querySelector('.not-successful');

      notSuccessful?.classList.remove('is-hidden');
    });
}
