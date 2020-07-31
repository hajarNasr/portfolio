export const openSection = (section)=>{
    document.getElementById(section).classList.add('trans-none');
    document.body.classList.add('overflow-none');
}

export const closeSection = (section)=>{
    document.getElementById(section).classList.remove('trans-none');
    setTimeout(()=>{
        document.body.classList.remove('overflow-none');
    }, 1000) 
}