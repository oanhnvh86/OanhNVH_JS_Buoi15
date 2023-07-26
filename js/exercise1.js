/**
 * Admissions Manager
 * 
 * Block 1: Input
 *  + diemChuan
 *  + diem1, diem2, diem3
 *  + diemKV, diemDT
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *      diemTongKet = diem1 + diem2 + diem3 + diemKV + diemDT
 *      if(diemTongKet>=diemChuan && !isDiem0)
 *          pass
 *
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + txtKQTS
 * 
 */


function KetQuaTuyenSinh(){
    //Declare Variable
        var diemTongKet = 0
        var isDiem0 = false;
        var isPass = false;
        var txtKQTS = '';
    //Diem Chuan
        diemChuan = Number(document.getElementById("inpDiemChuan").value);
    //Diem 3 mon
        diem1 = Number(document.getElementById("inpDiem1").value);
        diem2 = Number(document.getElementById("inpDiem2").value);
        diem3 = Number(document.getElementById("inpDiem3").value);
    //Diem Uu Tien
        diemKV = Number(document.getElementById("dlKhuVuc").value);
        diemDT = Number(document.getElementById("dlDoiTuong").value);
    //DiemTongKet
        diemTongKet = diem1 + diem2 + diem3 + diemKV + diemDT;
        // console.log("DiemTongKet: ",diemTongKet);
    //Check co Diem 0
        if ((diem1 && diem2 && diem3) == false)
            isDiem0 = true
        // console.log("Co mon nao diem 0?: ",isDiem0);
    //Check Pass or Not
        //C1
            // if(diemTongKet>=diemChuan && !isDiem0)
            //     isPass = true;
        //C2
        isPass = (diemTongKet >= diemChuan && !isDiem0) ? true : false
    //Result
        if (isPass){
            txtKQTS = 'You passed!'    
        }
        else {
            txtKQTS = 'You failed!'    
        }
        txtKQTS = txtKQTS 
                +   "<br>--------------<br>"
                +   "Điểm 3 môn: " + (diem1 + diem2 + diem3).toString()
                +   "<br>"
                +   "Điểm ưu tiên: " + (diemKV + diemDT).toString()
                +   "<br>"
                +   "Tổng điểm: " + diemTongKet.toString()
                +   "<br>"
                +   "Có môn nào bị điểm 0 ko ? "+ isDiem0.toString();
    //Show Result to UI
        document.getElementById('txtKetQuaTuyenSinh').innerHTML = txtKQTS;
    
}

document.getElementById("btnKetQuaTuyenSinh").onclick= KetQuaTuyenSinh;


