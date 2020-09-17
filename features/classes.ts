class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    console.log(this.color);
    this.drive();
    this.honk();
  }
}

const car = new Car(5, 'blue');
car.startDrivingProcess();

// Do NOT mark methods as private for security purposes: just restricts methods other developers can call
