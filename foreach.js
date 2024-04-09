const fruits = ['kiwi','apple','banana','pineapple','pomegranite','pear']
function appendIndex(fruit, index){
    console.log(`${index} - ${fruit}`)
}
fruits.forEach(appendIndex)