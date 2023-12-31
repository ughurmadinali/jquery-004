1
// С помощью какого метода можно скрыть элемент?

//hide

2
// Создайте опработчик события для элемента ниже, который при клике будет скрывать его
//<div class="block"></div>

$('block').click(function(){
    $('.block').hide()
})

3
// С помощью какого метода можно показать элемент?

//show

4
// Создайте опработчик события для элемента ниже, который при клике будет показывать его
//<div class="block"></div>

$('block').click(function(){
    $('.block').show()
})

5
// Установите время анимации 4s

$(selector).show(function(){
    $('#block1').show(4000)
});

6
// Установите время анимации 5s

$(selector).hide(function(){
    $('#block2').hide(5000)
});


7
// Создайте опработчик события для элемента ниже, который при клике будет скрывать его, а после выводить в alert() сообщение "Скрыто"
//<div class="block"></div>

$('block').click(function(){
    $('.block').hide(2000)
    alert('Скрыто')
})

8
// Создайте опработчик события для элемента ниже, который при клике будет показывать его, а после выводить в alert() сообщение "Показано"
//<div class="block"></div>

$('block').click(function(){
    $('.block').show(2000)
    alert('Показано')
})

9
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeIn() затем письменно обьясните как он работает 
//<div class="block"></div>

$(selector).fadeIn(speed, callBack)

//используется для исчезновения скрываемого элемента

10
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeOut() затем письменно обьясните как он работает 
//<div class="block"></div>

$(selector).fadeOut(speed, callBack)

//используется для исчезновения видимого элемента

11
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeToggle() затем письменно обьясните как он работает 
//<div class="block"></div>

$(selector).fadeToggle(speed, callBack)

//переключает между методами fadeIn() и fadeOut()

12
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeTo() затем письменно обьясните как он работает 
//<div class="block"></div>

$(selector).fadeTo(speed, callBack)

//позволяет плавно переходить к заданной непрозрачности 

13
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeIn() затем задайте время анимации 3s
//<div class="block"></div>

14
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeOut() затем задайте время анимации 6s
//<div class="block"></div>

15
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeToggle() затем задайте время анимации 8s
//<div class="block"></div>

16
// Создайте опработчик события для элемента ниже и наложите на него эффект с помощью fadeTo() затем задайте время анимации 10s
//<div class="block"></div>