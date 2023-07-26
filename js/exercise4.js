/**
 * Cab Charge
 * 
 * Block 1: Input
 *  + inpFullName1
 *  + inpThuNhapNam
 *  + inpSoNguoiPT
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *    
 *
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + txtTinhTienThue
 * 
 */
const phiHoaDon_ND = 4.5
const phiDichVu_ND = 20.5
const phiKenh_ND = 7.5

const phiHoaDon_DN = 15
const phiDichVu_DN = 75
const phiKenh_DN = 50

//Disable_Enable 
function DisEnableSoKetNoi(){
    // console.log('hello')
    var loaiKH = document.getElementById("loaiKH").value;
    if (loaiKH==2){
        document.getElementById("lbSoKetNoi").style.visibility = "visible";    //enable field
        document.getElementById("inpSoKetNoi").style.visibility = "visible";    //enable field
    }
    else{
        document.getElementById("lbSoKetNoi").style.visibility = "hidden";    //disable field
        document.getElementById("inpSoKetNoi").style.visibility = "hidden";    //disable field
    }
}

//Tinh tien cab
function TinhTienCab(){
    // alert("test")
    //Declare Variable
    var phiHoaDon = 0;
    var phiDichVu =0;
    var phiKenh=0;
    var tongTien = 0;
    var Result = '';
    //Get Form Value
    var loaiKH = document.getElementById("loaiKH").value;
    var maKH = document.getElementById("inpMaKH").value;
    var soKenhCaoCap = Number(document.getElementById("inpSoKenhCaoCap").value);
    var soKetNoi = Number(document.getElementById("inpSoKetNoi").value);
    //Validate input
    if(loaiKH == 0)
        Result = 'Vui lòng chọn loại khách hàng';
    else if (maKH == '')
        Result = 'Vui lòng nhập Mã khách hàng';
    else if(soKenhCaoCap<0 || soKetNoi<0)
        Result = 'Vui lòng nhập số >= 0';
    //Process for each customer type 
    if (loaiKH == 1){
        phiHoaDon = phiHoaDon_ND;
        phiKenh = soKenhCaoCap * phiKenh_ND;
        phiDichVu = phiDichVu_ND;
    }
    else if(loaiKH==2){
        // document.getElementById("inpSoKetNoi").removeAttribute("disabled");
        phiHoaDon = phiHoaDon_DN;
        phiKenh = soKenhCaoCap * phiKenh_DN;
        if(soKetNoi<=10)
            phiDichVu = phiDichVu_DN;
        else if (soKetNoi>10)
            phiDichVu = phiDichVu_DN + (soKetNoi-10) * 5;
        // else 
        //     phiDichVu = 0
    } 
    tongTien = phiHoaDon + phiDichVu + phiKenh;
    //Result
    if (Result == ''){
        Result = 'Khách hàng: '+maKH 
                +   '<br>----------------------'
                +   '<br>Tổng Tiền cab: '+tongTien.toLocaleString('en-US',{style:'currency',currency:'USD'})
                +   '<br>----------------------'
                +   '<br>Mức  giá tiền cáp chi tiết:'
                +   '<br> Phí hóa đơn: '+phiHoaDon.toLocaleString('en-US',{style:'currency',currency:'USD'})
                +   '<br> Phí dịch vụ (kết nối): '+phiDichVu.toLocaleString('en-US',{style:'currency',currency:'USD'})
                +   '<br> Phí kênh: '+phiKenh.toLocaleString('en-US',{style:'currency',currency:'USD'})
    }
    
    //Show Result to UI
    document.getElementById("txtTinhTienCab").innerHTML = Result
}
//Event Change Loai KH to disable or enable field
document.getElementById("loaiKH").onchange = DisEnableSoKetNoi;
//Event Click button to calculate 
document.getElementById("btnTinhTienCab").onclick = TinhTienCab;
