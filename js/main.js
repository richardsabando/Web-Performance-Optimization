$(document).foundation();


//
// Todo dynamically insert this html below the footer when a picture is clicked in the photo gallery then fire reveal modal command
//


const photoGrid = document.querySelector('.image-grid');
let footer = document.querySelector('.footer');

photoGrid.addEventListener('click', (e) => {
  e.preventDefault();
  let modalID = e.target.parentElement.getAttribute('data-reveal-id');
  let alt = e.target.getAttribute('alt');
  let src = e.target.getAttribute('src');
  let source = src.replace('-preview', '').replace('thumbnails/', '');
  let avatar = e.target.parentElement.nextElementSibling.firstElementChild.getAttribute('src');

  let modalHTML = `
  <div id="${modalID}" class="reveal-modal" data-reveal aria-hidden="true" role="dialog">
    <h2 class="modalTitle">Photo</h2>
    <img src="${source}" alt="${alt}" >
      <div class="info">
        <img src="${avatar}" alt="Photo"  class="avatar">
          <span class="attribution">Photo by <b>Werner Bechtelar</b></span>
        </div>
        <a class="close-reveal-modal" aria-label="Close">&#215;</a>
      </div>`;

      footer.insertAdjacentHTML('afterend',modalHTML);

      $('#'+modalID).foundation('reveal', 'open');
    });