class App {
  constructor() {
    this.typeDriver = document.querySelector("#typeDriver");
    this.date = document.querySelector("#date");
    this.time = document.querySelector("#time");
    this.passenger = document.querySelector("#passenger");
    this.btn = document.querySelector(".submit");
    this.carsContainer = document.querySelector(".insert-card-cars");
 }

  // btn search onclick
  async init() {
    if( this.btn !== null ) {
      this.btn.onclick = await this.click;
      
    }
  }

  async loadFilter(filter) {
    const cars = await Database.loadCarsFilter(filter);
    Car.init(cars)
  }

  //After onClick
  click = async () => {
    let typeDriver = this.typeDriver.value
    let passenger = this.passenger.value;
    let date = this.date.value;
    let time = this.time.value;
    await this.loadFilter({ typeDriver, passenger, date, time })
    this.cardRender();
  }

  cardRender() {
    let card = "";
    if( Car.list.length !== 0 ) {
      Car.list.forEach((car) => {
        card += car.render();
      })
      this.carsContainer.innerHTML = card;
    } else {
      card = `
      <div class="container d-flex justify-content-center align-items-center" style="width: 430px; height: 70px; border: 1px solid #dc3545;">
        <p class="my-0" style="font-size: 1.15rem; font-weight: 600; color: #dc3545;">Mobil Tidak Ditemukan!</p>
      </div>
      `

      this.carsContainer.innerHTML = card;
    }
  }

}
