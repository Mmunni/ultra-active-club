// use local storage to manage cart data
const addToDb = id =>{
    let totalTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('total-time');
    if(storedTime){
        totalTime = JSON.parse(storedTime);
    }

    // add quantity
    const quantity = totalTime[id];
    if(quantity){
        const newQuantity = quantity + 1;
        totalTime[id] = newQuantity;
    }
    else{
        totalTime[id] = 1;
    }
    localStorage.setItem('total-time', JSON.stringify(totalTime));
}

const getStoredTime = () => {
    let totalTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('total-time');
    if(storedTime){
        totalTime = JSON.parse(storedTime);
    }
    return totalTime;

}
const removeFromDb = id =>{
    const storedTime = localStorage.getItem('total-time');
    if(storedTime){
        const totalTime = JSON.parse(storedTime);
        if(id in totalTime){
            delete totalTime[id];
            localStorage.setItem('total-time', JSON.stringify(totalTime));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('total-time');
}

export {
    addToDb,
    getStoredTime, 
    removeFromDb,
    deleteShoppingCart
}