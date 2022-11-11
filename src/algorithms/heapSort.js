export function heapSortAnimation(array) {
    const animations = []
    let n = array.length
    for(let i = n/2 - 1; i >=0; i--){
      heapify(array,n,i,animations)
    }
    for(let i= n -1; i >= 0; i--){
      animations.push([0,i])
      animations.push([0,i])
      swap(array,0,i,animations)
      heapify(array,i,0,animations)
    }
    return animations
  }
  
  function heapify (array, length, i, animations){
    let largest = i 
    let left = (2*i) + 1;
    let right = (2*i) + 2; 
  
    if (left < length && array[left] > array[largest]){
      largest = left
    }
    
    if (right < length && array[right]> array[largest]){
      largest = right
    }
  
    animations.push([i,largest])
    animations.push([i,largest])
    
    if (largest !== i) {
      swap(array,largest,i,animations)
      heapify(array,length,largest,animations)
    }
    else{
      animations.push("do nothing")
    }
  }
  
  function swap(array,value1,value2,animations){
  
    let temp = array[value1]
    array[value1] = array[value2]
    array[value2] = temp
    animations.push([[value1,array[value1]],[value2,array[value2]]])
  }
  