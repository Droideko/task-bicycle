let form = document.form1;
form.addEventListener('submit', (e) => {
   let name = form.name,
       phone = form.phone;
   if (name.value.length < 3 || phone.value.length === 0) {
      alert('Все поля должны быть заполненны!');
      e.preventDefault();
   }  
});
let name = form.name;
name.addEventListener('input', (e) => {
   if (name.value.length < 3) name.style.borderBottom = '2px solid red';
   else name.style.borderBottom = '2px solid green'
});
let phone = form.phone;
phone.addEventListener('change', (e) => {
   if (/^\+?38[0-9]{8,14}$/.test(phone.value)) phone.style.borderBottom = '2px solid green';
   else phone.style.borderBottom = '2px solid red';
});