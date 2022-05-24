function chonLoaiXe (){
        var car = document.getElementById('car').checked;
            car.onclick=function chonLoaiXe(){
                
            }
        var xeMay = document.getElementById('xemay').checked;
        xeMay.onclick=function chonLoaiXe(){
        }
        var ketQua;
        if(car){
            ketQua = 'car';
        }else if(xeMay){
            ketQua = 'xeMay';
        }
        return ketQua;
    }



var thanhTien = document.getElementById('thanhTien');
  thanhTien.onclick = function() {
    var soKm = document.getElementById('soKm').value;
    soKm = parseFloat(soKm)
    var thoiGiancho = document.getElementById('thoiGiancho').value;
    thoiGiancho = parseFloat(thoiGiancho)
    var pTien = document.getElementById('tien');
    pTien.style.display = "block";

    
    var loaiXe = chonLoaiXe();
    // console.log(loaiXe);
    switch(loaiXe){
        case 'xeMay':
            if(soKm <= 1){
              var  tongTien = soKm * 8000 + thoiGiancho * 2000   
            }else if(soKm > 1 && soKm <= 20){
               var tongTien = soKm * 12000 + thoiGiancho * 2000
            }else if(soKm > 20){
              var  tongTien = soKm *10000 + thoiGiancho * 2000
            }
        break
        case 'car':
            if(soKm <= 1){
              var  tongTien = soKm * 10000 + thoiGiancho * 2000   
            }else if(soKm > 1 && soKm <= 20){
               var tongTien = soKm * 14000 + thoiGiancho * 2000
            }else if(soKm > 20){
              var  tongTien = soKm *12000 + thoiGiancho * 2000
            }
        break
    }
    var soTien = document.getElementById('soTien');
    soTien.innerHTML= tongTien;
    
}
