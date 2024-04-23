

function Go(){
  
    let name = document.getElementById('name').value;
    let lrn = document.getElementById('lrn').value;
     let track = document.getElementById('track').value;
     let strand = document.getElementById('strand').value;
   

    let cname = document.getElementById('cstud_name');
    let clrn = document.getElementById('clrn');
     let ctrack = document.getElementById('ctrack');
     let cstrand = document.getElementById('cstrand');


     cname.value = name;
     clrn.innerText = lrn;
     ctrack.value = track;
     cstrand.value = strand;
   // alert(lrn);
}

function printContent(el){
    var restorepage = $('body').html();
    var printcontent = $('#' + el).clone();
    $('body').html(printcontent);
    window.print();
     location.reload();
}