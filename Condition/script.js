const btn = document.querySelector('.delete-button');
let status = false;
let actionTwo = false;

const addClass = (obj) => {
    obj.classList.add('active');
}

const removeClass = (obj) => {
    obj.classList.remove('active');
}

btn.addEventListener('click', function(){
    const object = this;
    const empty = object.querySelector('.empty');
    const stepTwo = object.querySelector('#step-two');
    
    if(!status){
        status = true;
        console.log('%cIch will etwas Löschen','color:green');

        addClass(object);
        addClass(empty);

        let stepTwoTimeOut = setTimeout(() => {
            addClass(stepTwo);
            setTimeout(() => {
                actionTwo = true;
            }, 250);
        }, 2500);
    }

    if(status && actionTwo){
        console.log('%cElement wurde gelöscht','color:red');
        
        removeClass(object);
        removeClass(empty);
        removeClass(stepTwo);
        
        actionTwo = false;
        status = false;
        setTimeout(() => {
            
        }, 0);
    }

});

