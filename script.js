num_like = 0
 
function curtir(){
    
    num_like = 1 + num_like;
    
    if (num_like == 1) {
        button_face.innerHTML = `${num_like} Like`;
    } else {
        button_face.innerHTML = `${num_like} Likes`;
    }
    

}