const bideshi =() =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayBideshi(data))
}

const displayBideshi = user =>{
  
    const nameTitle = document.getElementById('name');
    nameTitle.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
  
   const phoneNumber = document.getElementById('location');
   phoneNumber.innerHTML = user.results[0]?.location.city;

    console.log(user?.results[0]?.location.city);
 
}

bideshi()