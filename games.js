function toggleShareMenu() {
  const shareMenu = document.querySelector('.share-menu');
  shareMenu.classList.toggle('active');
}

 


const currentUrl = encodeURIComponent(window.location.href); 
const pageTitle = encodeURIComponent(document.title); 


document.getElementById('facebookShare').href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
document.getElementById('twitterShare').href = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}`;
document.getElementById('linkedinShare').href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
document.getElementById('whatsappShare').href = `https://wa.me/?text=${pageTitle}%20${currentUrl}`;

document.querySelector('.overlay').addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
});

