export function quickSortAnimation (array){
  const animations=[]
  if (array.length === 1) {
    return array
  }
  sort(array,0,array.length-1,animations)
  return animations
}

function sort(array, left, right,animations){
  
  let pivot
  let pivotIndex
  if (left < right){
    pivot = right
    pivotIndex = partition(array,pivot, left,right,animations)
    sort(array, left, pivotIndex-1,animations); 
    sort(array, pivotIndex+1, right,animations)
    
  } 
  return array
}

function partition(array,pivot,left, right,animations){
  let max = pivot
  pivot = array[pivot]
  let orange = left
  for (let i = left; i< right; i++){
    animations.push([i,max])
    animations.push([i,max])
    if (array[i] < pivot){
      swap(array,orange,i,animations)
      orange++
    }
    else {
      animations.push("do nothing")
    }      
  }
  animations.push([orange,right])
  animations.push([orange,right])
  swap(array,orange,right,animations)
  return orange
}

function swap(array,first,second,animations){
  let temp = array[second]
  array[second]=array[first]
  array[first] = temp
  animations.push([[first,array[first]],[second,array[second]]])
}