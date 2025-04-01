document.getElementById('byoForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let requiredFields = ['name', 'mascot', 'imageCaption', 'personalBackground', 'professionalBackground', 'academicBackground', 'webDevBackground', 'computerPlatform'];
    for (let field of requiredFields) {
      if (!document.getElementById(field).value) {
        alert('Please fill out all required fields!');
        return;
      }
    }
  
    let imageFile = document.getElementById('image').files[0];
    if (!imageFile || !['image/png', 'image/jpeg'].includes(imageFile.type)) {
      alert('Please upload a valid PNG or JPG image.');
      return;
    }
  
    // Replace form with user data
    document.getElementById('byoForm').innerHTML = `
      <h3>Your Page:</h3>
      <p>Name: ${document.getElementById('name').value}</p>
      <p>Mascot: ${document.getElementById('mascot').value}</p>
      <img src="${URL.createObjectURL(imageFile)}" alt="${document.getElementById('imageCaption').value}">
      <p>Caption: ${document.getElementById('imageCaption').value}</p>
      <p>Personal Background: ${document.getElementById('personalBackground').value}</p>
      <p>Professional Background: ${document.getElementById('professionalBackground').value}</p>
      <p>Academic Background: ${document.getElementById('academicBackground').value}</p>
      <p>Background in Web Development: ${document.getElementById('webDevBackground').value}</p>
      <p>Primary Computer Platform: ${document.getElementById('computerPlatform').value}</p>
      <p>Funny thing? ${document.getElementById('funnyThing').value}</p>
      <p>Anything else? ${document.getElementById('anythingElse').value}</p>
      <button onclick="window.location.reload()">Reset</button>
    `;
  });

  document.getElementById('byoForm').addEventListener('reset', function() {
    window.location.reload();
  });

  document.getElementById('addCourse').addEventListener('click', function() {
    let container = document.getElementById('coursesContainer');
  
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('courseField');
  
    let courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.placeholder = 'Enter a course';
    courseDiv.appendChild(courseInput);
  
    let deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      container.removeChild(courseDiv);
    });
    courseDiv.appendChild(deleteButton);
  
    container.appendChild(courseDiv);
  });