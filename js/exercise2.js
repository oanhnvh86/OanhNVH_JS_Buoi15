/**
 * Electricity Bill
 * 
 * Block 1: Input
 *  + inpHoTen
 *  + inpKW
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *  if (inpKW<=50){
 *      t1 = inpKW * p1;
 *   }
 *   else if (inpKW>50 && inpKW<=100){
 *       t1 = 50 * p1;
 *       t2 = (inpKW-50) * p2;
 *   }
 *   else if (inpKW>100 && inpKW<=200){
 *       t1 = 50 * p1;
 *       t2 = 50 * p2;
 *       t3 = (inpKW-100) * p3;
 *   }
 *   else if (inpKW>200 && inpKW<=350){
 *       t1 = 50 * p1;
 *       t2 = 50 * p2;
 *       t3 = 100 * p3;
 *       t4 = (inpKW-200) * p4;
 *   }
 *   else if(inpKW>350)
 *   {
 *       t1 = 50 * p1;
 *       t2 = 50 * p2;
 *       t3 = 100 * p3;
 *       t4 = 150 * p4;
 *       t5 = (inpKW-350) * p5;
 *   }
 *   TongTien = t1 + t2 + t3 + t4 + t5;
 *
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + txtTinhTienDien
 * 
 */
const p1 = 500;
const p2 = 650;
const p3 = 850;
const p4 = 1100;
const p5 = 1300;

document.getElementById('btnTinhTienDien').onclick = function(){
    //Declare Variable
    var t1 = 0,
        t2 = 0,
        t3 = 0,
        t4 = 0,
        t5 = 0;
    var TongTien = 0;
    var KetQua = "";
    //Get Form Value
    var inpHoTen = document.getElementById("inpHoTen").value;
    var inpKW = Number(document.getElementById("inpKW").value);
    //Validate input
    if (inpHoTen == "")
        KetQua = 'Vui lòng nhập họ tên';
    if (inpKW <=0)
        KetQua = 'Vui lòng nhập số KW > 0';
    //Calculate
    if (inpKW<=50){
       t1 = inpKW * p1;
    }
    else if (inpKW>50 && inpKW<=100){
        t1 = 50 * p1;
        t2 = (inpKW-50) * p2;
    }
    else if (inpKW>100 && inpKW<=200){
        t1 = 50 * p1;
        t2 = 50 * p2;
        t3 = (inpKW-100) * p3;
    }
    else if (inpKW>200 && inpKW<=350){
        t1 = 50 * p1;
        t2 = 50 * p2;
        t3 = 100 * p3;
        t4 = (inpKW-200) * p4;
    }
    else if(inpKW>350)
    {
        t1 = 50 * p1;
        t2 = 50 * p2;
        t3 = 100 * p3;
        t4 = 150 * p4;
        t5 = (inpKW-350) * p5;
    }
    TongTien = t1 + t2 + t3 + t4 + t5;
    //Result
    if (KetQua == "")
        KetQua = "Họ tên KH: "+ inpHoTen
        + "<br> Tổng số kw sử dụng: "+inpKW.toLocaleString() +" (kw)"
        + "<br>--Chi tiết tiền điện--"
        + "<br> t1(50kw đầu): "+t1.toLocaleString('it-IT',{style:'currency',currency:'VND'})  //format number as currency
        + "<br> t2(50kw kế): "+ Intl.NumberFormat('it-IT',{style:'currency',currency:'VND'}).format(t2)  //format number as currency
        + "<br> t3(100kw kế): "+t3.toLocaleString('it-IT',{style:'currency',currency:'VND'})
        + "<br> t4(150kw kế): "+t4.toLocaleString('it-IT',{style:'currency',currency:'VND'})
        + "<br> t5(kw còn lại): "+t5.toLocaleString('it-IT',{style:'currency',currency:'VND'}) 
        + "<br>Tổng tiền: "+ TongTien.toLocaleString('it-IT',{style:'currency',currency:'VND'})
    //Show Result to UI
    document.getElementById("txtTinhTienDien").innerHTML=KetQua
}       