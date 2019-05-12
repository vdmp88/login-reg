export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'))
};

// export default getUser;

export const getCurrencyUser = () => {
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  const data = fetch(url)
    .then(response => response.json())
    .then(response => {
      const list = document.getElementById("ul");
      const dateNow = document.querySelector('.date');
      dateNow.textContent = 'Data as of this date: ' + response[0].exchangedate;
      const firstTitle = document.querySelector('.fisrtTitle');
      firstTitle.textContent = 'Official hryvnia exchange rate to foreign currencies and Bank metals';
      response.forEach(element => {
        let li = `<li class='item alert alert-warning text-dark font-weight-bold'>
          <span>${element.txt}: </span>
          <span>${element.rate}</span>
          <span> ${element.cc}</span>
        </li>`;
        list.insertAdjacentHTML('beforeend', li);
      });
    })
  return data;
} 


export const getCurrencyVip = () => {
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp?date=20090201&period=m&json";
  const user = getUser()
  const data = fetch(url)
    .then(response => response.json())
    .then(response => {
        if(user.isVip){
          const secondTitle = document.querySelector('.secondTitle');
          secondTitle.textContent = 'Income and expenses of banks: ';
          const list = document.querySelector('#ulTwo');
          response.forEach(el => {
            let li = `<li class='item alert alert-warning text-dark font-weight-bold'>${el.txt} : ${el.value}</li>`;
            list.insertAdjacentHTML('beforeend', li);
          });
        }
    })
  return data;
} 