try{
    throw new ReferenceError();
} catch(err){
    console.log(err);
    console.log('There was an reference error')
}
console.log('My program doesn\'t stop')