// Task 1:    
const button = document.getElementById('hider');
const div = document.getElementById('text');
button.onclick = function() {
  div.hidden = true;
};

// Task 2:
<input type="button" id="hider">Нажмите, чтобы спрятать</input>

const button = document.getElementById('hider');

button.onclick = function() {
  this.hidden = true;
};

// Task 3: 
/* Выведется 1 и 2 (то есть оба обработчика сработают, так как первый обработчик не удалится через removeEventListener).
Для удаления нужно сначала сохранить обработчик в отдельной функции и перадавать эту функцию в removeEventListener */

// Task 4:
//CSS - добавляем позиционирование и плавный переход:
/*

#field {
  position: relative;
}

#ball {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  transition: all 1s;
}
*/

field.onclick = function(event) {

  const fieldCoordinates = this.getBoundingClientRect();

  let ballCoords = {
    top: event.clientY - fieldCoordinates.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCoordinates.left - field.clientLeft - ball.clientWidth / 2
  };

  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;

  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
};

// Task 5:
//CSS
/* <style>
    .menu .main {
      cursor: pointer;
    }

    .menu ul {
      display: none;
      list-style: none;
    }

    .menu .main::before {
      content: '▶ ';
    }

    .menu.expanded .main::before {
      content: '▼ ';
    }

    .menu.expanded ul {
      display: block;
    }

</style>

*/

<div class="menu"> 
  <span class="main">Сладости (нажми меня)!</span>
  <ul>
    <li>Пирожное</li>
    <li>Пончик</li>
    <li>Мёд</li>
  </ul>
</div>

const menu = document.querySelector('.menu');
const title = menu.querySelector('.main');

title.onclick = function() {
  menu.classList.toggle('expanded');
};

//Task 6:

//CSS - добавляем позиционирование
/*
.pane {
  position: relative;
}

.remove-button {
  position: absolute;
  top: 5px;
} 
*/

const textBlocks = document.querySelectorAll('.pane');
for (const block of textBlocks) {
  block.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');
  block.firstChild.onclick = () => block.remove();
}

// Task 7:
//CSS
/*/
.outer {
  background-color: rgb(233, 233, 233);
  border: 1px solid lightgray;
  border-radius: 15px;
  height: 160px;
  width: 500px;
  position: relative;
}

.container {
  height: 130px;
  width: 390px;
  position: relative;
  top: 50%;
  margin-top: -65px;
  left: 50%;
  margin-left: -195px;
  overflow: hidden;
}

.arrow {
  top: 50%;
  margin-top: -13px;
  position: absolute;
}

.first-arrow {
  left: 10px;
}

.second-arrow {
  left: 100%;
  margin-left: -36px;
}

.inner {
  position: relative;
  margin-left: 0;
  transition: 0.25s all;
}
*/

<div class="outer">
  <button class="arrow first-arrow">⇦</button>
    <div class="container">
      <div class="inner">
        <ul>
          <li><img src="https://ru.js.cx/carousel/1.png"></li>
          <li><img src="https://ru.js.cx/carousel/2.png"></li>
          <li><img src="https://ru.js.cx/carousel/3.png"></li>
          <li><img src="https://ru.js.cx/carousel/4.png"></li>
          <li><img src="https://ru.js.cx/carousel/5.png"></li>
          <li><img src="https://ru.js.cx/carousel/6.png"></li>
          <li><img src="https://ru.js.cx/carousel/7.png"></li>
          <li><img src="https://ru.js.cx/carousel/8.png"></li>
          <li><img src="https://ru.js.cx/carousel/9.png"></li>
          <li><img src="https://ru.js.cx/carousel/10.png"></li>
        </ul>
      </div>
    </div>
  <button class="arrow second-arrow">⇨</button>
</div>

const leftButton = document.querySelector('.first-arrow');
const rightButton = document.querySelector('.second-arrow');

const inner = document.querySelector('.inner');

rightButton.addEventListener('click', function() {
  let left = parseInt(getComputedStyle(inner).marginLeft) - 390;
  if (left < -130 * 7) {
    left = -130 * 7;
  }

  inner.style.marginLeft = left + 'px';
});

leftButton.addEventListener('click', function() {
  let left = parseInt(getComputedStyle(inner).marginLeft) + 390;
  if (left > 0) {
    left = 0;
  }

  inner.style.marginLeft = left + 'px';
});
