// Реалізувати функцію генератор. Функція "Boo" повинна працювати так само , як "Foo"

// function* Foo() {
//     console.log('start')
//     yield 1
//     yield 2
//     yield 3
//     console.log('finish')
//   }
  
//   const iterator = Foo()
//   iterator.next().value // 1
//   iterator.next().done // false
  
//   // *******
  
//   function Boo() {
//     // писати код тут

//   }
  
//   const iterator = Boo()
//   iterator.next().value // 1
//   iterator.next().done // false


function Boo() {
    let count = 1;
    let done = false;
  
    return {
      next: function() {
        if (count <= 3) {
          return { value: count++, done: false };
        } else {
          done = true;
          return { done: true };
        }
      }
    };
  }
  
  const iterator = Boo();
  console.log(iterator.next().value); // 1
  console.log(iterator.next().done); // false