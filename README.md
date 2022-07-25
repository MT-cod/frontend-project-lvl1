## Учебный проект «Игры разума» в рамках курса Hexlet (Фронтенд-разработчик)
[![Actions Status](https://github.com/MT-cod/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/MT-cod/frontend-project-lvl1/actions)
<a href="https://codeclimate.com/github/MT-cod/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/7266cc749fe970148255/maintainability" /></a>

<h2>Цель</h2>

<p>Первый проект включает в себя интерактивную часть — взаимодействие пользователем с командной строкой. Для этого понадобилась дополнительная библиотека.</p>

<p>В процессе создания файлов, функций, констант и переменных нужно постоянно думать о правильном именовании. Несмотря на наличие большого числа статей и рекомендаций, именование остается одной из самых сложных частей для всех, кто проходит проекты (да и программирует тоже).</p>

<p>Архитектура первого проекта — корневая часть всей системы. Она опирается на основные принципы организации кода: изоляцию побочных эффектов, создание правильных барьеров абстракций (высокая модульность). Здесь возникает множество вопросов: «кто за что отвечает?», «кто взаимодействует с пользователем?» «как игра запускается?» и многое другое.</p>

<h2>Описание</h2>
<p>«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:</p>

<ul>
<li>Калькулятор. Арифметические выражения, которые необходимо вычислить.</li>
<li>Прогрессия. Поиск пропущенных чисел в последовательности чисел.</li>
<li>Определение четного числа.</li>
<li>Определение наибольшего общего делителя.</li>
<li>Определение простого числа.</li>
</ul>

<p>Пример игры:</p>
<pre class="hljs"><code class="sh"><span style="color: #008080">$ </span>brain-progression
Welcome to the Brain Game!
What number is missing <span style="color: #000000;font-weight: bold">in </span>this progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 <span style="color: #999988;font-style: italic"># Пользователь вводит ответ</span>
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 <span style="color: #999988;font-style: italic"># Пользователь вводит ответ</span>
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 <span style="color: #999988;font-style: italic"># Пользователь вводит ответ</span>
Correct!
Congratulations, Roman!
</code></pre>

<h3>Аскинемы с примерами игр:</h3>