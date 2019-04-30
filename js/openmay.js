
// change these for the 

const featured = [
    ['#', './images/PNG/Featured/Featured_Openmay.png'],
    ['https://skinnytan.com.au', './images/PNG/Featured/featured_retail_skinny_tan.png'],
    ['https://tomsaustralia.com.au/', './images/PNG/Featured/featured_retail_toms.png']
];

const retail = [
    ['https://www.backyardcatenclosures.com.au/', './images/PNG/retail_backyard_kitten_palaces.png'],
    ['https://charlesandlee.com/', './images/PNG/retail_charles_and_lee.png'],
    ['https://www.backyardchickencoops.com.au/', './images/PNG/retail_Chicken_coops.png'],
    ['https://timbuk2.com.au/', './images/PNG/retail_timbuk2.png'],
    ['https://tomsaustralia.com.au/', './images/PNG/retail_Toms.png'],
];

const automotive = [
    ['http://autobahn.net.au/', './images/PNG/auto_UltraTune.png'],
    ['https://www.ultratune.com.au/', './images/PNG/auto_UltraTune.png'],
    ['https://www.ultratune.com.au/', './images/PNG/auto_UltraTune.png']
];

const home = [
    ['https://ihealthsaunas.com.au/', './images/PNG/home_iHealth.png'],
    ['https://bedsrus.com.au/', './images/PNG/home_bedsrus.png'],
    ['https://www.lincraft.com.au/', './images/PNG/home_Lincraft.png'],
    ['https://myhouse.com.au/', './images/PNG/home_MyHouse.png'],
]; 
 
function createCarouselItems(parentElement, array){
   let parent = document.getElementById(parentElement);
   array.forEach(element => {
        let child = document.createElement('div');
        child.innerHTML = element[0];
        parent.appendChild(child);
   });
}

function createCarouselImages(parentElement,array) {
    /* 
        Function to create the carousel images.
        Iterates the array given and 
        The result should be :
         <div>
            <a href="element[0]" target="_blank">
                <img src="element[1]">
            </a>
         </div>
    */
    let parent = document.getElementById(parentElement);
    array.forEach(element => {
         let child = document.createElement('div');
         let img = document.createElement('img');
         let link = document.createElement('a');
         link.setAttribute('href', element[0]);
         link.setAttribute('target', '_blank');
         img.setAttribute('src', element[1]);
         img.className = "img-fluid promo-card";
         link.appendChild(img);
         child.appendChild(link);
         parent.appendChild(child);
    });
}

createCarouselImages('featured', featured);
createCarouselImages('retail', retail);
createCarouselImages('automotive', automotive);
createCarouselImages('home', home);