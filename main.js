const timeShower = () => {
    const date = new Date();

    document.querySelector(".hours").textContent = date.getHours();
    document.querySelector(".minutes").textContent = date.getMinutes();
    document.querySelector(".seconds").textContent = date.getSeconds();
};


timeShower();


setInterval(function() {
    timeShower();
}, 1000);

