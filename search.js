const googleIcon = document.querySelector(".googleIcon");
const youtubeIcon = document.querySelector(".youtubeIcon");
const gmailIcon = document.querySelector(".gmailIcon");
const mapsIcon = document.querySelector(".mapsIcon");
const calendarIcon = document.querySelector(".calendarIcon");
const meetIcon = document.querySelector(".meetIcon");
const driveIcon = document.querySelector(".driveIcon");
const docsIcon = document.querySelector(".docsIcon");

const searchGoogle = document.querySelector(".searchGoogle");
const searchYoutube = document.querySelector(".searchYoutube");
const searchMaps = document.querySelector(".searchMaps");

const openGoogleSearch = () => {
  searchYoutube.style.display = "none";
  searchMaps.style.display = "none";
  searchGoogle.style.display = "unset";
};
const openGmail = () => {
  window.open(`https://mail.google.com/mail/u/0/?tab=rm#inbox`);
};
const openYoutubeSearch = () => {
  searchGoogle.style.display = "none";
  searchMaps.style.display = "none";
  searchYoutube.style.display = "unset";
};
const openMapsSearch = () => {
  searchGoogle.style.display = "none";
  searchYoutube.style.display = "none";
  searchMaps.style.display = "unset";
};
const openCalendar = () => {
  window.open(`https://calendar.google.com/calendar/`);
};
const openGoogleMeet = () => {
  window.open(`https://meet.google.com/`);
};
const openGoogleDrive = () => {
  window.open(`https://drive.google.com/`);
};
const openGoogleDocs = () => {
  window.open(`https://docs.google.com/`);
};

const searchOnGoogle = () => {
  window.open(`https://www.google.com/search?q=${searchGoogle.value}`);
  searchGoogle.value = "";
  searchGoogle.style.display = "none";
};
const searchOnYoutube = () => {
  window.open(
    `https://www.youtube.com/results?search_query=${searchYoutube.value}`
  );
  searchYoutube.value = "";
  searchYoutube.style.display = "none";
};
const searchOnMaps = () => {
  window.open(`https://www.google.co.in/maps/place/${searchMaps.value}`);
  searchMaps.value = "";
  searchMaps.style.display = "none";
};

googleIcon.addEventListener("click", openGoogleSearch);
youtubeIcon.addEventListener("click", openYoutubeSearch);
gmailIcon.addEventListener("click", openGmail);
mapsIcon.addEventListener("click", openMapsSearch);
calendarIcon.addEventListener("click", openCalendar);
meetIcon.addEventListener("click", openGoogleMeet);
driveIcon.addEventListener("click", openGoogleDrive);
docsIcon.addEventListener("click", openGoogleDocs);

searchGoogle.addEventListener("change", searchOnGoogle);
searchYoutube.addEventListener("change", searchOnYoutube);
searchMaps.addEventListener("change", searchOnMaps);
