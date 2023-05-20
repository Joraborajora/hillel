/* Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree).
 */
 
function pow(num,degree) {
    if (degree === 0) {
      return 1; //оскільки будь яке число, піднесене до степені 0 дорівнює 1
    } else if (degree > 0){
      return num * pow(num, degree - 1 ); //рекурсивна функція
    } else {
      return 1 / pow(num, - degree); //рекурсивна функція, у випадку якщо степень більше 0
    }
    }
   
//скорочений вираз
//    function pow(num,degree) {
//    return degree === 0 ? 1 : ( degree > 0 ) ? (num * pow(num, degree - 1 )) : (1 / pow(num, - degree));
//    } 
    
   
   
   // Приклад виклику функції
   var result = pow(2, 3);
   console.log(result);  
   
   result = pow(5, -2);
   console.log(result); 
   
   
   