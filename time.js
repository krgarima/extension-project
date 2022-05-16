const time = document.querySelector(".time");
const salutation = document.querySelector(".salutation");

const padWithZeros = (number) => (number < 10 ? "0" + number : number);

const getSalutation = (currentHour) => {
  switch (currentHour.toString()) {
    case "04":
    case "05":
    case "06":
    case "07":
    case "08":
    case "09":
    case "10":
    case "11":
      return "Good Morning, ";
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
      return "Good Afternoon, ";
    case "17":
    case "18":
    case "19":
    case "20":
    case "21":
      return "Good Evening, ";
    case "22":
    case "23":
    case "24":
    case "00":
    case "01":
    case "02":
    case "03":
      return "Good Night, ";
    default:
      return "Good Day, ";
  }
};

const getTime = () => {
  const date = new Date();

  const hours = padWithZeros(date.getHours());
  const minutes = padWithZeros(date.getMinutes());
  const seconds = padWithZeros(date.getSeconds());

  const currentTime = `${hours}:${minutes}:${seconds}`;
  time.innerText = currentTime;

  salutation.innerText = getSalutation(hours);
};

getTime();
setInterval(getTime, 1000);
