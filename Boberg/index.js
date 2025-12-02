const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerBtn = document.querySelector("#menu-open");
const xBtn = document.querySelector("#menu-close");
 
 let showEvents = 3;
const news = [
    {
        id: "1",
        img: "./img/img3.webp",
        title: "Föredrag 22/10",
        date: "16 oktober 2025",
        content: "Niorna kommer och hälsar på och våra egna elever blir utan lektioner – då bjuder vi in föreläsare som kommer och tar hand om dem istället! Åk1 och HSF2 börjar dagen med ett evenemang i Folkets Hus Ånge men kommer sedan upp och avslutar dagen med övriga. Åk3 och YRK2 är i Aulan och får träffa representanter från polisen, Näringslivskontoret, Rocco Oil, Campus Ånge/Komvux, Ålsta folkhögskola, socialkontoret och Kriminalvården. Vi hoppas på en spännande dag!",
    },
    {
        id: "2",
        img: "./img/img.webp",
        title: "Åk 9 besöksdag",
        date: "5 oktober 2025",
        content:"Välkommen till Bobergsgymnasiet onsdag 22/10!Dagen börjar med att vi samlas i Posthuset där du får ditt schema och en påse med lite smått och gott. Du får sedan information från de tre program som du valt, och lunch. Under programpasset får du även träffa olika företag/arbetsgivare som är aktuella för just det programmet. De kan berätta precis vad de söker efter hos sina anställda, och hur det är att jobba där. Passa på att ställa massa frågor även till dem!Vi avslutar sedan dagen tillsammans med gott fika.Välkommen till en inspirerande dag om ditt gymnasieval! ",
    },
    {
        id:"3",
        img: "./img/img2.webp",
        title: "Föräldrarmöte åk 1 9/9",
        date: "2 september 2025",
        content:"Till vårdnadshavare för elever i årskurs 1Välkomna till föräldramöte!Ni är varmt välkomna till skolan för att träffa rektor, mentorer och en del annan personal. Vi vill gärna ha ett nära samarbete med er så att vi tillsammans kan hjälpa eleverna att lyckas med sin skolgång. Det är första terminen för era ungdomar i en ny skolform som ställer annorlunda krav och har andra förutsättningar än tidigare.Tid:Tisdag 9 september 2025, kl. 18.30.Plats:Aulan, Bobergsgymnasiet (mitt i huset, en trappa upp från huvudentrén).Vi kommer först ses i helgrupp för en del allmän information. Efter det går ni vidare med mentorerna för ytterligare information och samtal om just er klass. Under kvällen kommer vi att tala om våra regler och rutiner, informera om programmen i gymnasieskolan och hur arbetet med elevernas lärande går till på Bobergsgymnasiet. Naturligtvis bjuder vi även på fika. Välkomna! / Jennie Stadling Wilsson, rektor Bobergsgymnasiet.Vi ber er fylla i nedanstående talong som lämnas till mentor senast torsdag 4/9. Tack!",
    },
];
const events = [
    {
    day: 10,
    month: "DEC",
     title: "Nobelfirande", weekday: "Wednesday", statusColor: "yellow",
},
{
    day: 10,
    month: "DEC",
    title: "Uf-mässa-med-försäljning",
    weekday: "onsdag",
    statusColor: "orange",
},
{
    day: 2,
    month: "SEP",
    title: "Föräldrarmöte åk 1 9/9",
    weekday: "Monday",
    statusColor: "green",
},
{
    day: 2,
    month: "SEP",
    title: "Föräldrarmöte åk 1 9/9",
    weekday: "Monday",
    statusColor: "green",
},
{
    day: 2,
    month: "SEP",
    title: "Föräldrarmöte åk 1 9/9",
    weekday: "Monday",
    statusColor: "green",
},
{
    day: 2,
    month: "SEP",
    title: "Föräldrarmöte åk 1 9/9",
    weekday: "Monday",
    statusColor: "green",
},
];
    
 
const closeMenu = () => {
    mobileNav.classList.add("hidden");
    nav.classList.add("nav-closed");
    hamburgerBtn.classList.remove("hidden");
    xBtn.classList.add("hidden");
};
 
const openMenu = () => {
    hamburgerBtn.classList.add("hidden");
    nav.classList.remove("nav-closed");
    mobileNav.classList.remove("hidden");
    xBtn.classList.remove("hidden");
};    
 
const menuCloseBtn = document
.querySelector("#menu-close")
.addEventListener("click", closeMenu)
 
const menuOpenBtn = document
.querySelector("#menu-open")
.addEventListener("click", openMenu)
 
const renderNews = () => {
    const container = document.querySelector(".news-grid");
 
    news.forEach((news) => {
        const card = document.createElement("div");
        card.className = "news-card";
 
        card.innerHTML = `
            <img src="${news.img}" alt="${news.title}" class="news-image"/>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-date">${news.date}</p>
        `;

        card.addEventListener("click", () => {
            window.location.href = `news.html?id=${news.id}`;
        });   
 
        container.appendChild(card);
    });
};
 


const renderNewsDetail = () => {
    const container = document.querySelector(".news-content");
 if(!container) return;

 // Hämta ID från Url-parametern
 const urlParams = new URLSearchParams(window.location.search);
 const newsId = urlParams.get("id");

 // Hitta rätt artikel
 const newsItem = news.find((n) => n.id === newsId);
 
 
 
if (newsItem) {
    container.innerHTML = `
        <h1 class="news-title">${newsItem.title}</h1>
        <p class="news-date">${newsItem.date}</p>
        <img src="${newsItem.img}" alt="${newsItem.title}" class="news-detail-image"/>
        <p class="news-text">${newsItem.content}</p>
    `;
} else {
    container.innerHTML =  `
     <p>Nyheten kunde inte hittas.</p>
     `; 
}
};

if (document.querySelector(".news-grid")) renderNews();
if (document.querySelector(".news-content")) renderNewsDetail();
 
function toggleText() {
    const points = document.getElementById("points");
    const moreText = document.getElementById("moreText");
    const button = document.getElementById("textButton");
 
    const isHidden = moreText.style.display === "none";
 
    moreText.style.display = isHidden ? "inline" : "none";
    points.style.display = isHidden ? "none" : "inline";
    button.innerHTML = isHidden ? "Visa mindre" : "Visa fler";
 }
// const handelser = [{dag: "10", manad: "DEC", titel: "Nobeldag/UF-mässa", veckodag: "Onsdag", statusColor: "yellow" } {   dag: "19", manad: "DEC", titel: "Julavslutning", veckodag: "Fredag", statusColor: "red" }, {      dag: "20", manad: "DEC", titel: "Jullov", veckodag: "Lördag", statusColor: "green",      dag: "07", manad: "JAN" },  {      dag: "09", manad: "FEB", titel: "Studiedag", veckodag: "Måndag", statusColor: "green" }, {     dag: "02-08", manad: "MAR", titel: "Sportlov", veckodag: "Måndag", statusColor: "green" }, dag: "03-12", manad: "APR", titel: "Påsklov", veckodag: "Fredag", statusColor: "green" }, {dag: "30", manad: "APR", titel: "Lovdag", veckodag: "Torsdag", statusColor: "green" }, { dag: "15", manad: "MAJ", titel: "Studiedag", veckodag: "Fredag", statusColor: "green" },{ dag: "12", manad: "JUN", titel: "Avslutning/Student", veckodag: "Onsdag",statusColor: "red},
   //];
 const createDateElement = (event) => {
    // kolla om händelsen har ett slutdatum
    if (event.endday && event.endmonth) {
        // kolla om eventkon är inom samma kycklingko
        if (event.month === event.endmonth) {
    }
 }};