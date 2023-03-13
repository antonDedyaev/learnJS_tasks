// Task 1:
<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>

const selectedOpt = Array.from(genres.options).filter(option => option.selected)[0];
alert(selectedOpt.value);
alert(selectedOpt.text);

const thirdOpt = new Option("Классика", "classic");
genres.append(thirdOpt);

thirdOpt.selected = true;