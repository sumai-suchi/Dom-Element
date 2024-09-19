console.log(document);

const makeBlue=document.getElementById('make-blue');
makeBlue.onclick=make_blue;

function make_blue()
{
    document.body.style.backgroundColor='blue';
}
// function make_red()
// {
//     document.body.style.backgroundColor='red';
// }

// option-4
const makeBackPink=document.getElementById('make-pink');
         makeBackPink.addEventListener('click',make_pink)

         function make_pink()
         {
            document.body.style.backgroundColor='pink';
         }


// option-4 another    
const makeBackGreen=document.getElementById('make-green');
makeBackGreen.addEventListener('click', function make_green()
 {
    document.body.style.backgroundColor='green';
 })

      
//  final one
document.getElementById('make-goldenrod').addEventListener('click',function(){

    document.body.style.backgroundColor='goldenrod';
   })