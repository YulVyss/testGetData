const userLogin = '493358_stroyzar';
const userPassword = 'sAVDkrEbqd';
const art = 'OC47';

const btn = document.querySelector('.submit')
const row = document.querySelector('.data-row')
const input = document.querySelector('.input')



async function sendReq(id) {
  console.log(id)
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    let json = await response.json();
    console.log(json)
    document.querySelector('.userId').textContent = json.id
    document.querySelector('.title').textContent = json.title
    document.querySelector('.body').textContent = json.body


  } catch (error) {
    console.log(`Error! ${error}`);
  }



}

btn.addEventListener('click', (ev) => {

  sendReq(input.value)
})