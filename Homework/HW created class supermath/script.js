class SuperMath {
    input() {
      const X = parseFloat(prompt("перше число X:"));
      const Y = parseFloat(prompt("друге число Y:"));
      const symb = prompt("обери дію ('+','-','*','/'):");
  
      const obj = { X, Y, symb };
  
      return obj;
    }
  
    check() {
      const obj = this.input();
      const { X, Y, symb } = obj;
  
      const userInput = confirm(`вичислити значення ${symb} з числами ${X} і ${Y}?`);
  
      if (userInput) {
        const actions = {
          "+": (x, y) => x + y,
          "-": (x, y) => x - y,
          "*": (x, y) => x * y,
          "/": (x, y) => x / y,
        };
  
        const action = actions[symb];
        if (action) {
          const result = action(X, Y);
          alert(`Результат: ${result}`);
          return result;
        } else {
          return alert("Помилка");
          
        }
      } else {
        return alert("Завершено!");
      }
    }
  }
  
  const superMath = new SuperMath();
  superMath.check();