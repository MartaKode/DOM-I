const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//My work below:  
const nav = document.querySelectorAll('nav a');
const link1 = document.querySelector('nav a');

// link1.textContent = siteContent.nav['nav-item-1'] ;
// nav[1].textContent = siteContent.nav['nav-item-2'] ;
// nav[2].textContent = siteContent.nav['nav-item-3'] ;
// nav[3].textContent = siteContent.nav['nav-item-4'] ;
// nav[4].textContent = siteContent.nav['nav-item-5'] ;
// nav[5].textContent = siteContent.nav['nav-item-6'] ;

//Q&A trick : nav section 
navArray = Array.from(nav);

const navTexts = Object.values(siteContent.nav);

navArray.forEach((link, idx) => {
  link.textContent =navTexts[idx]
});

//end of Q&A

//Updating  imgs: 
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Updating text

//H1s
const theH1 = document.querySelector('h1');
theH1.textContent = siteContent['cta']['h1'];


//buttons 
const btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];


//H4's
document.querySelector('h4').textContent = siteContent['main-content']['features-h4']
const theH4s = document.querySelectorAll('h4');
theH4s[1].textContent= siteContent['main-content']['about-h4'];
theH4s[2].textContent = siteContent['main-content']['services-h4'];
theH4s[3].textContent = siteContent['main-content']['product-h4'];
theH4s[4].textContent = siteContent['main-content']['vision-h4'];
//theH4s[5].textContent = siteContent['contact']['contact-h4'];


//Paragraphs
const paraphs = document.querySelectorAll('.main-content p');
document.querySelector('.main-content p').textContent = siteContent['main-content']['features-content'];
paraphs[1].textContent = siteContent['main-content']['about-content'];
paraphs[2].textContent = siteContent['main-content']['services-content'];
paraphs[3].textContent = siteContent['main-content']['product-content'];
paraphs[4].textContent = siteContent['main-content']['vision-content'];

//Contact sections: 

//const contacth4 = document.querySelector('.contact h4');
//contacth4.textContent = siteContent['contact']['contact-h4'];

 const contactPs = document.querySelectorAll('.contact p');
// contactPs[0].textContent = siteContent['contact']['address'];
// contactPs[1].textContent = siteContent['contact']['phone'];
// contactPs[2].textContent = siteContent['contact']['email'];

contactArray = Array.from(contactPs)
contactArray.unshift(document.querySelector('.contact h4'))
const contactTexts = Object.values(siteContent['contact']);

contactArray.forEach( (item, idx) => item.textContent = contactTexts[idx])


//Footer Section: 
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']



//Task 3


//for(element of nav){element.style.color = "green"};
nav.forEach( link => link.style.color = 'green');


const newLink1 = document.createElement('a');
newLink1.textContent = `Meow`;
newLink1.href = '#';
newLink1.style.color = 'pink'

const navigation = document.querySelector('nav');
navigation.appendChild(newLink1);

const newLink2 = document.createElement('a');
newLink2.textContent = `Woof`;
newLink2.href = '#';
newLink2.style.color = 'blue';''

navigation.prepend(newLink2)









