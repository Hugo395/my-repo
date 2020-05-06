
document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



document.getElementById('dice').addEventListener('click',() => {
  event.preventDefault();


axios
.get('https://opentdb.com/api.php?amount=1')
.then(response =>{
  console.log(response)
  const category = response.data.results[0].category
  console.log(category)
  
//   let button = document.getElementsByTagName('button')
 
// button.remove()

  const newCharacterHTML= 
  `
    <h3>${category}</h3>
 
  `
  document.getElementById('ShowMe').innerHTML += newCharacterHTML;
}).catch(err =>{
  console.log(err)
})
})


