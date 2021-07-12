const thumbSlider = document.querySelector('.thumb-slider__input'),
      output = document.querySelector('.thumb-slider__value'), 
      income = document.querySelector('.number-block__value_income'),
      gross = document.querySelector('.number-block__value_gross'),
      profit = document.querySelector('.number-block__value_profit'),
      prod = document.querySelector('.inform__price_prod'),
      rent = document.querySelector('.inform__price_rent'),
      repair = document.querySelector('.inform__price_repair'),
      invest = document.querySelector('.result__value_invest'),
      earn = document.querySelector('.result__value_earn'),
      incomeValue = [],
      grossValue = [],
      profitValue = [],
      prodValue = [],
      rentValue = [],
      repairValue = [],
      investValue = [],
      earnValue = [],
      sliderProps = {
        fill: "#2CD4D9 0%, rgba(20, 249, 255, 1)",
        background: "#D8C4B6",
      };

function fillArray(array, firstValue, secondValue) {
  const difference = secondValue - firstValue;
  array[0] = firstValue;
  for (let i = 1; i <= 30; i++) {
    array[i] = firstValue += difference;
  }
  return array;
}

function applyFill(thumbSlider) {
  const percentage = (100 * (thumbSlider.value - thumbSlider.min)) / (thumbSlider.max - thumbSlider.min);
  const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`;
      thumbSlider.style.background = bg;
}
thumbSlider.addEventListener("input", (event) => {
	applyFill(event.target);
  output.innerHTML = `${+thumbSlider.value + 20} м<sup>2</sup>`;
  income.innerHTML = `${fillArray(incomeValue, 345000, 362250)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;Р.`;
  gross.innerHTML = `${fillArray(grossValue, 172500, 181125)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;Р.`;
  profit.innerHTML = `${fillArray(profitValue, 87500, 94125)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;Р.`;
  prod.innerHTML = `${fillArray(prodValue, 300000, 315000)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;Р.`;
  rent.innerHTML = `${fillArray(rentValue, 40000, 42000)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;Р.`;
  repair.innerHTML = `${fillArray(repairValue, 240000, 252000)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;Р.`;
  invest.innerHTML = `${fillArray(investValue, 610000, 639000)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;Р.`;
  earn.innerHTML = `${fillArray(earnValue, 87500, 94125)[thumbSlider.value].toLocaleString('ru-RU', 'currency')}&nbsp;р./мес.`;
});