// function calculateVolumeAndArea(a) {
//   const Squre = a * a * 6;
//   const Volume = a * a * a;

//   if (typeof a == 'number' && a > 0 && Number.isInteger(a)) {
//     console.log(
//       `Объем куба равен: ${Volume}, площадь всей поверхности равна: ${Squre}`
//     );
//   } else {
//     console.log('При вычислении произошла ошибка');
//   }
// }
// calculateVolumeAndArea(15);

function getCoupeNumber(seatNumber) {
  if (
    typeof seatNumber !== 'number' ||
    seatNumber < 0 ||
    !Number.isInteger(seatNumber)
  ) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }

  if (seatNumber === 0 || seatNumber > 36) {
    return 'Таких мест в вагоне не существует';
  }

  for (let i = 4; i <= 36; i = i + 4) {
    if (seatNumber <= i) {
      return (a = Math.ceil(i / 4));
    }
  }
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(20);
console.log(a);


