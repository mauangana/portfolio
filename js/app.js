let textOver = document.querySelectorAll('.onclick .an');

for(let i= 0; i<textOver.length;  i++){
    textOver[i].onclick=function(){
        this.classList.toggle('show');
    }
}