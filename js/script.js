// Data: https://assets.codepen.io/16425/web-3-spring-2024-roster.json

// Data source
const dataSource = 'https://assets.codepen.io/16425/web-3-spring-2024-roster.json';

// Get
const h1 = document.querySelector('h1');
const container = document.querySelector('.swiper-wrapper');

// Fetch It
fetch( dataSource )
  .then( response => response.json() )
  .then( students => { 

    console.log(students);
     
    students.forEach( (student) => {
      
      // template
      const template = `
      <div class="swiper-slide">
      <h1 style='color: ${student.Color}'>${student.Name}</h1>
      <img src=${student.Image} alt='picture' style='border:
      ${student.Color} 10px solid
      '>
      <h1 id='sp'>Superpower: ${student.Superpower}</h1>
      <span>${student.Emoji}</span>
      <blockquote>${student.Quote}</blockquote>
      </div>
     `
      
      //  dynamically insert      
      container.insertAdjacentHTML('afterbegin', template);
      
      
    });
  
});