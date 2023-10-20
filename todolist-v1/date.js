
const getDate = ()=>{
    const today = new Date();
    //ini untuk menfirmat penulisan tanggal
    const options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return day = today.toLocaleDateString("en-US", options)
}

module.exports.getDate = getDate;//ini agar bisa dipanggil dimana saja dan ini untuk multiple function



const getDay= ()=>{
    const today = new Date();
    //ini untuk menfirmat penulisan tanggal
    const options ={
        weekday: "long"
    }

    return day = today.toLocaleDateString("en-US", options)
}

module.exports.getDay = getDay;

//ini untuk hari sabtu dan minggu
// if (currentDay === 6 || currentDay === 0){
//     day = "Weekend";
// }else{
//     day = "Weekday";
// }