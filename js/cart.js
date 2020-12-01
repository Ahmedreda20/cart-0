const entirybtn = document.querySelector(".btn-part"),
    entirycon = document.querySelector(".part-amount-con"),
    entirycancel = entirycon.querySelector(".btn-form-btn-cancel");

entirybtn.onclick = () => {
    $(entirycon).slideDown();
}
    entirycancel.onclick =e => {
        e.preventDefault();
        
    $(entirycon).slideUp();
}
    
    $(document).ready(() => {
        //btn open photos

        $('.btn-photos').click(() => {
            $(".image-slider").not('.slick-initialized').slick({
                prevArrow: '<button class="btn-arrow prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button class="btn-arrow next"><i class="fa fa-angle-right"></i></button>',
                arrow: true,
                rtl: true
            });
            $(".photos-container").show();
        });
        $('.photo-box .btn-cancel').click(() => {
            $(".photos-container").hide();
            return false;
        });
    });

const inputschecks = document.querySelectorAll("input[type='checkbox']"),
    shipments = document.querySelectorAll(".shipment-box input[type='checkbox']");

for (let i = 0; i < inputschecks.length; i++) {
    const el = inputschecks[i];
    el.setAttribute("data-index", i); 
}

   
    inputschecks[1].onclick = e => {
        let c = e.target.checked;
        inputschecks.forEach(en => {
             if (c === true) {
        return en.checked = true;
        } else {
            return en.checked = false;
        }
        })
}
CheckAllInputs = () => {
    if (shipments.length <= 1) {

    shipments[0].onclick = e => {
        let c = e.target.checked;
        inputschecks.forEach(en => {
             if (c === true) {
        return en.checked = true;
        } else {
            return en.checked = false;
        }
        })
        }

    } else {
        // run code here
    }
}
CheckAllInputs();


const offers = document.querySelectorAll(".offers-b table"),
    oferbtns = document.querySelectorAll(".btn-offer");

for (let oi = 0; oi < offers.length; oi++) {
    const ofer = offers[oi];
    ofer.setAttribute("data-type", `ofer-num-${oi}`);
}
for (let o = 0; o < oferbtns.length; o++) {
    const oferb = oferbtns[o];
    oferb.setAttribute("data-type", `ofer-num-${o}`);
    oferb.onclick = () => {
        oferbtns.forEach(n => {
            n.classList.remove("btn-active");
        })
        oferb.classList.add("btn-active");
        
        //open offers
        let dt = oferb.getAttribute("data-type");
        
        offers.forEach(ofc => {
        let odt = ofc.getAttribute("data-type");
            if (dt === odt) {
                return $(ofc).show(100);
            } else {
                return $(ofc).hide(100);
            
            }
        })
    }
}

const btns = document.querySelectorAll(".js-md-co"),
    ofbtn = document.querySelector(".btn-offers"),
    ofcon = document.querySelector(".offers-container"),
    ofbcan = ofcon.querySelector(".btn-cancel");
    
for (let b = 0; b < btns.length; b++) {
    const bn = btns[b];
    bn.onclick = () => {
        btns.forEach(bns => {
            bns.classList.remove("btn-active");
        })
            bn.classList.add("btn-active");

    }
     
}

ofbtn.onclick = () => {
    return $(ofcon).show(),
        $(offers[0]).show(),
        $("body").css("overflow", "hidden");
}
ofbcan.onclick = () => {
    return $(ofcon).hide(),
        $("body").css("overflow", "auto");
    
}

$(".btn-change").click(() => {
    let d = document.querySelector(".chn-co");
    if (d.className === "chn-co op") {
        return $(d).show(),
            $(d).attr("class", "chn-co cl");
    } else{
                return $(d).hide(),
            $(d).attr("class", "chn-co op");
    }

});

$(function () {
    $('#plus').on('click',function(){
        var $qty=$(this).closest('div').find('#test');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('#minus').on('click',function(){
        var $qty=$(this).closest('div').find('#test');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
});



$(document).ready(function () {
    var divs = $('.offers-box table');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $(".btn-next-el").click(function (e) {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $(".btn-prev-el").click(function (e) {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // or .css('display','block');
        //console.log(divs.length, now);
    });
});