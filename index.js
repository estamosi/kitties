class Kitty {
    constructor(name, color, pattern) {
      this.name = name;
      this.color = color;
      this.pattern = pattern;
      this.isHappy = true;
      this.energyLevel = 100;
    }
  
    play() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} is playing!`);
        this.energyLevel -= 10;
      } else {
        console.log(`${this.name} is too tired to play.`);
      }
      this.checkHappiness();
    }
  
    sleep() {
      console.log(`${this.name} is sleeping.`);
      this.energyLevel = 100;
      this.checkHappiness();
    }
  
    checkHappiness() {
      if (this.energyLevel > 50) {
        this.isHappy = true;
        console.log(`${this.name} is happy!`);
      } else {
        this.isHappy = false;
        console.log(`${this.name} is not very happy.`);
      }
    }
  }
  
  // Example usage
  const kitty1 = new Kitty('Whiskers', 'Gray', 'Striped');
  const kitty2 = new Kitty('Mittens', 'White', 'Spotted');
  
  kitty1.play();
  kitty1.sleep();
  kitty2.play();
  