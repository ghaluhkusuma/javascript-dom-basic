         //Selector
         document.getElementById("box1").innerHTML = "Sekolah Koding";

        var boxes = document.getElementsByClassName("boxes") ;

         boxes[0].innerHTML = "Sekolah koding versi lama";
         boxes[1].innerHTML = "Sekolah koding versi terbaru lagi";
         boxes[2].innerHTML = "Sekolah koding versi terbaru sangat ";


         var list = document.getElementsByTagName('li');
         list[0].innerHTML = "Konten";
         list[1].innerHTML = "Konten-Konten";
         list[2].innerHTML = "Konten-BG";


                 // ------- EDIT HTML -------
             // Menambahkan Element
             var el = document.createElement('h2');
             var text = document.createTextNode('Belajar Programming Online');
             var box = document.getElementById('box1');
 
             el.appendChild(text);
             box.appendChild(el);
 
         // Menghapus
         // box.removeChild(el);
 
 
         // Mengedit
         var el2 = document.createElement('h3');
         var text2 = document.createTextNode('Belajar Programming Gratis Cuyy!!');
         el2.appendChild(text2);
         var p1 = document.getElementById('p1');
 
         box.replaceChild(el2, p1);


        //  --------BAB EVENT--------

        <img onclick="berubah()" src="./src/paus.png" width="250" alt="" id="gambar" class="ireng">
        <input onclick="berubah2()" type="text" value="nama" id="input">
        <input type="submit" value="Submit" id="submit">
        Namanya adalah : <span><p id="p1"></p></span>


         var img = document.getElementById('gambar');
         img.width = 200;
 
         // img.setAttribute('class','merah')
         img.className += ' merah';
 
 
         var input = document.getElementById('input');
         input.value = "Nama Lengkap ";
 
         input.style.border = '2px solid blue';
         input.style.backgroundColor = 'lightBlue'
 
 
         // -------- EVENT ------------
         function berubah(){
             img.style.backgroundColor = 'lightBlue'; 
         }
 
 
         input.onclick = berubah;
 
             function berubah(){
                 img.style.backgroundColor = 'lightBlue';
             }
 
             img.addEventListener('mouseenter', function(){
                 img.style.backgroundColor = 'lightBlue';
             });
             
             img.addEventListener('mouseleave', function(){
                 img.style.backgroundColor = 'cyan';
             });
 
 
         function berubah2(){
                 input.style.backgroundColor = 'cyan';
             }
         
             input.addEventListener('mouseenter', berubah2);
         
 
             input.addEventListener('mouseleave', function(){input.style.backgroundColor = 'lightBlue'
         });
 
         var submit = document.getElementById('submit');
         var span = document.getElementById('p1');
 
         submit.onclick = function(){
             var text =  input.value;
             span.innerHTML = text;
         }


         
//-------- Query Selector All Luar Biasa -----------------

<div id="box1"></div>

<div class="boxes"></div>
<div class="boxes"></div>
<div class="boxes"></div>

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <div></div>
</ul>

                 document.getElementById("box1").innerHTML = "Sekolah Koding";

var boxes = document.getElementsByClassName("boxes") ;

 boxes[0].innerHTML = "Sekolah koding versi lama";
 boxes[1].innerHTML = "Sekolah koding versi terbaru lagi";
 boxes[2].innerHTML = "Sekolah koding versi terbaru sangat ";


 var list = document.getElementsByTagName('li');
 list[0].innerHTML = "Konten";
 list[1].innerHTML = "Konten-Konten";
 list[2].innerHTML = "Konten-BG";

 document.querySelectorAll('#box1')[0].innerHTML = "Sekolah Koding akwoakow";
 document.querySelectorAll('.boxes')[0].innerHTML = "Sekolah Koding akwoakow";
 document.querySelectorAll('ul  div')[0].innerHTML = "Sekolah Koding akwoakow";
