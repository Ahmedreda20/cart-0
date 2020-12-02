const entirybtn = document.querySelector(".btn-part a"),
    entirycon = document.querySelector(".part-amount-con"),
    entirycancel = entirycon.querySelector(".btn-form-btn-cancel");

entirybtn.onclick = () => {
    $(entirycon).slideDown();
}
    entirycancel.onclick =e => {
        e.preventDefault();
        $(entirycon).slideUp();
        if (window.innerWidth > 850) {
            $("HTML, BODY").animate({
                scrollTop: 0
            }, 1000);
        }
        
}
    
    $(document).ready(() => {
        //btn open photos

        $('.btn-photos').click(() => {
            imgp.src = images[0].getAttribute("data-src")
            imgp.setAttribute("data-type", 'image-prev-num-0');
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
                return $(ofc).show();
            } else {
                return $(ofc).hide();
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

    offers.forEach(ofe => {
        if (ofe.getAttribute("data-type") === "ofer-num-0") {
            $(ofe).show();
        } else {
            $(ofe).hide();
        }
    });

  oferbtns.forEach(ofen => {
        if (ofen.getAttribute("data-type") === "ofer-num-0") {
            ofen.classList.add("btn-active");
        } else {
            ofen.classList.remove("btn-active");
        }
    });
    return $(ofcon).show(),
           
        oferbtns[0].classList.add("btn-active"),
        $("body").css("overflow", "hidden");
}
ofbcan.onclick = () => {
    return $(ofcon).hide(),
        $("body").css("overflow", "auto");
}




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


const images = document.querySelectorAll(".item-image"),
    imgp = document.getElementById("img-prev");

images.forEach(im => {
    im.setAttribute("data-src", im.src);
    
    im.onclick = () => {
        return imgp.src = im.getAttribute("data-src"),
            imgp.setAttribute("data-type", `image-prev-num-${$(images).index(im)}`);
    }
});


$(".btn-change").click(() => {
    let chn = document.querySelector(".form");
    if (chn.getAttribute("data-type") === "change-closed") {
        return $(chn).show(),
            $(chn).attr("data-type", "change-opened");
    } else {
       return $(chn).hide(),
            $(chn).attr("data-type", "change-closed"); 
    }
});


//delete item open container if it goes here
const dbtn = document.querySelector(".btn-delete"),
    dcon = document.querySelector(".delete-item-con"),
    dcan = dcon.querySelector(".btn-canc");


dbtn.onclick = () => {
    $(dcon).show();
    $("body").css("overflow", "hidden");
}
dcan.onclick = e => {
    e.preventDefault();
    $(dcon).hide();
    $("body").css("overflow", "auto");
    }