export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'))
};

// export default getUser;

export const getCurrencyUser = () => {
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  const user = getUser();
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
      if(user.isVip) {
        let li = list.querySelectorAll('.item');
        let search = document.querySelector('#search');
        let text;
        search.style.display = 'block';
        
        search.addEventListener('keyup', () => sort());
        
        
        


        function sort() {
          for (let i = 0; i < li.length; i++) {
            text = li[i].textContent || li[i].innerText;
            if (text.toUpperCase().indexOf(search.value.toUpperCase()) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }
      }
    })
  return data;
} 


export const getCurrencyVip = () => {
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp?date=20090201&period=m&json";
  const user = getUser();
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