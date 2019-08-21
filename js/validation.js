let form = document.form1
form.addEventListener('submit', (e) => {
   let name = form.name,
       phone = form.phone;
   if (name.value.length < 3 || phone.value.length === 0) {
      alert('Все поля должны быть заполненны!');
      e.preventDefault();
   }  
})