class Car extends Component {
  static list = [];

  static init(cars) {
    // Mapping Js
    this.list = cars.map((i) => new this(i));
    console.log(this.list);
  }

  constructor(props) {
    super(props);
    let {id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt } = props;
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  // Inheritance Override
  render() {
    return `
    <div class="col-md-6 col-sm-12 p-3 mb-4 mx-2 border" style="width: 335px;border-radius: 5px; box-shadow: 0px 0px 4px 0px #00000026;
    ">
      <div class="card-cars">
        <img class="cars-img mb-3" style="width: 100%; height: 230px;" src="${this.image}" alt="">
        <div class="title-cars">
          <h5>${this.manufacture}/${this.model}</h5>
          <h4 class="my-2" style="font-weight: bold; font-size: 1.5rem;;">Rp ${this.rentPerDay} / hari</h4>
          <p>${this.description}</p>
        </div>
      </div>
      <div>
        <div class="my-2 d-flex justify-content-start">
          <img class="spec-img me-2" style="width: 20px; height: 20px;" src="./assets/fi_users.png" alt="">
          <p class="align-self-center mb-0">${this.capacity} orang</p>
        </div>
        <div class="my-2 d-flex justify-content-start">
          <img class="spec-img me-2" style="width: 20px; height: 20px;" src="./assets/fi_settings.png" alt="">
          <p class="align-self-center mb-0">${this.transmission}</p>
        </div>
        <div class="my-2 d-flex justify-content-start">
          <img class="spec-img me-2" style="width: 20px; height: 20px;" src="./assets/fi_calendar.png" alt="">
          <p class="align-self-center mb-0">${this.year}</p>
        </div>
      </div>
      <div class="choose-cars my-2 mt-3" style="width: 100%;">
        <button class="btn btn-choose-cars"                   style="
          background-color: #5cb85f;
          width: 100%;
          height: 48px;
          color: white;
          border-radius: 3px;
          font-weight: 600;
        ">
          Pilih Mobil
        </button>
      </div>
    </div>
    `;
  }
}
