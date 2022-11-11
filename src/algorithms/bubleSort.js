export function bubbleSortAnimation (array){
    const animations = []
    if (array.length === 1){
      return array
    }
    bubbleSort(array,animations)
    return animations 
  }
  
  function bubbleSort(array,animations) {
    for (let i = 0; i < array.length; i ++){
      for(let j =0; j < array.length-1-i ; j++){
        animations.push([j,j+1])
        animations.push([j,j+1])
  
        if (array[j] > array[j+1]){
          let temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
          animations.push([[j,array[j]],[j+1,array[j+1]]])
        }
        
        else {
          animations.push("do nothing")
        }
     }
    }
  }