/**
 * Calculate Personal Income Tax
 * 
 * Block 1: Input
 *  + inpHoTen
 *  + inpThuNhapNam
 *  + inpSoNguoiPT
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *      thunhapchiuthue = inpThuNhapNam - defaultP - (inpSoNguoiPT * defaultNPT)
 *       if (thunhapchiuthue>0 && thunhapchiuthue<=60)
 *           thuethunhap = thunhapchiuthue * pt1
 *       else if (thunhapchiuthue>60 && thunhapchiuthue<=120 )
 *           thuethunhap = thunhapchiuthue * pt2
 *       else if (thunhapchiuthue>120 && thunhapchiuthue<=210 )
 *           thuethunhap = thunhapchiuthue * pt3
 *       else if (thunhapchiuthue>210 && thunhapchiuthue<=384 )
 *           thuethunhap = thunhapchiuthue * pt4
 *       else if (thunhapchiuthue>384 && thunhapchiuthue<=624 )
 *           thuethunhap = thunhapchiuthue * pt5
 *       else if (thunhapchiuthue>624 && thunhapchiuthue<=960 )
 *           thuethunhap = thunhapchiuthue * pt6
 *       else if (thunhapchiuthue>960)
 *           thuethunhap = thunhapchiuthue * pt7
 *       else {
 *           thuethunhap = 0
 *       }
 *
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + txtTinhTienThue
 * 
 */
const defaultP = 4;
const defaultNPT = 1.6
const pt1 = 0.05;
const pt2 = 0.1;
const pt3 = 0.15;
const pt4 = 0.2;
const pt5 = 0.25;
const pt6 = 0.3;
const pt7 = 0.35;


function TinhTienThueTNCN(){
    //Declare Variable
        var thunhapchiuthue = 0;
        var thuethunhap = 0;
        var KetQua = ''
    //Get Form Value
        var inpHoTen = document.getElementById("inpHoTen1").value;
        var inpThuNhapNam = Number(document.getElementById("inpThuNhapNam").value);
        var inpSoNguoiPT = Number(document.getElementById("inpSoNguoiPT").value);
        // console.log('inpThuNhapNam',inpThuNhapNam)
    //Validate input
        if (inpHoTen == '')
            KetQua = 'Vui lòng nhập họ tên'
        else if (inpThuNhapNam <= 0)
            KetQua = 'Vui lòng nhập tổng thu nhập năm > 0'
    //Process
        thunhapchiuthue = inpThuNhapNam - defaultP - (inpSoNguoiPT * defaultNPT)
        // console.log('thunhapchiuthue: ',thunhapchiuthue)
        if (thunhapchiuthue>0 && thunhapchiuthue<=60)
            thuethunhap = thunhapchiuthue * pt1
        else if (thunhapchiuthue>60 && thunhapchiuthue<=120 )
            thuethunhap = thunhapchiuthue * pt2
        else if (thunhapchiuthue>120 && thunhapchiuthue<=210 )
            thuethunhap = thunhapchiuthue * pt3
        else if (thunhapchiuthue>210 && thunhapchiuthue<=384 )
            thuethunhap = thunhapchiuthue * pt4
        else if (thunhapchiuthue>384 && thunhapchiuthue<=624 )
            thuethunhap = thunhapchiuthue * pt5
        else if (thunhapchiuthue>624 && thunhapchiuthue<=960 )
            thuethunhap = thunhapchiuthue * pt6
        else if (thunhapchiuthue>960)
            thuethunhap = thunhapchiuthue * pt7
        else {
            thuethunhap = 0
        }
    //Result
        if (KetQua == '')
            KetQua = "Thuế TNCN của: "+inpHoTen
                + "<br>"+ thuethunhap.toFixed(2)+' (TR)'

    //Show Result to UI
        document.getElementById("txtTinhTienThue").innerHTML= KetQua
}       