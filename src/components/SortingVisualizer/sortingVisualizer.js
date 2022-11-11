import React, {Component} from "react";
import {mergeSortAnimation} from "../../algorithms/mergeSort";
import {bubbleSortAnimation} from "../../algorithms/bubleSort";
import { quickSortAnimation } from "../../algorithms/quickSort";
import { heapSortAnimation } from "../../algorithms/heapSort";
import './sortingVisualizer.css'   

const REGULAR_COLOR= '#2978e0'
const COMPARISION_COLOR= '#e86b44'
const TIME_DELAY_ANIMATION = 5  
const ARRAY_LENGTH = (window.innerWidth < 575) ? 50 : 100
const MIN_VALUE = 10
const MAX_VALUE = 1000
const MIN_BAR_HEIGHT= 0.8*(window.innerHeight)/MAX_VALUE
const BAR_WIDTH= 0.8*(window.innerWidth)/ARRAY_LENGTH

class SortingVisualizer extends Component{
    constructor (){
        super()
        this.state={
            array: [],
            width:window.innerWidth,
            arrayLength:100,
            barWidth:0.8 * this.width / this.arrayLength
        }       
    }

    componentDidMount(){
        this.setArray()
    }

    setArray(){
        let newArray = []
        for (let i = 0; i< ARRAY_LENGTH ; i++){
            newArray.push(this.generateRandomNumber(MIN_VALUE,MAX_VALUE))
        }
        this.setState({array:newArray})
    }

    generateRandomNumber(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    animationsExecuter(animations) {
        for(let i = 0; i < animations.length; i++ ){
            const barsArray = document.getElementsByClassName("bar")
            const colorChange = i % 3 !== 2 
            if(colorChange){
                const [bar1Index,bar2Index] = animations[i]
                let bar1Style = barsArray[bar1Index].style
                let bar2Style = barsArray[bar2Index].style
                const color = i %3 === 0 ? COMPARISION_COLOR : REGULAR_COLOR
                setTimeout(()=>{
                    bar1Style.backgroundColor = color
                    bar2Style.backgroundColor = color
                }, i* TIME_DELAY_ANIMATION)
            }
            else {
                if ( animations[i] !== "do nothing"){
                    setTimeout(() => {
                        const [bar1Data,bar2Data] =animations[i]
                        const [bar1Index,bar1Height] = bar1Data
                        const [bar2Index,bar2Height] = bar2Data
                        const bar1Style= barsArray[bar1Index].style
                        const bar2Style= barsArray[bar2Index].style
                        bar1Style.height= `${bar1Height*MIN_BAR_HEIGHT}px`
                        bar2Style.height= `${bar2Height*MIN_BAR_HEIGHT}px`
                    
                }, i* TIME_DELAY_ANIMATION);
                  

                }
            }
        }
    }
    
    mergeSort(){
        const animations = mergeSortAnimation(this.state.array)
        for (let i = 0; i < animations.length; i++ ){
            const barsArray = document.getElementsByClassName("bar")
            const colorChange = i % 3 !== 2  

            if (colorChange){
                const [bar1Index,bar2Index] = animations[i]
                let bar1style=barsArray[bar1Index].style
                let bar2Style=barsArray[bar2Index].style
                const color = i % 3 === 0 ? COMPARISION_COLOR : REGULAR_COLOR;
                setTimeout(()=> {
                    bar1style.backgroundColor = color
                    bar2Style.backgroundColor = color
                }, i* TIME_DELAY_ANIMATION)}
            else{
                setTimeout(() => {
                    const [barOneIndex, barOneHeight] = animations[i];
                    const barOneStyle = barsArray[barOneIndex].style;
                    barOneStyle.height = `${barOneHeight*MIN_BAR_HEIGHT}px`;  
                }, i* TIME_DELAY_ANIMATION);
            }
        } 
    } 

    bubbleSort(){
        this.animationsExecuter(bubbleSortAnimation(this.state.array))
    }
    quickSort(){
        this.animationsExecuter(quickSortAnimation(this.state.array))
    }
    heapSort(){
        this.animationsExecuter(heapSortAnimation(this.state.array))
    }

    render() {
        const array = this.state.array
        return (
            <div className="sorting-container">
                <div className="bars-container">
                    {array.map( (value,index) => <div className="bar" key={index} 
                    style={{
                        height: `${(value*MIN_BAR_HEIGHT)}px`,
                        backgroundColor:REGULAR_COLOR,
                        width: BAR_WIDTH
                        }}></div>)}
                </div>
                <div className="buttons-container">
                    <button onClick={()=> this.setArray()} style={{backgroundColor:"#442288"}}>New Array</button>
                    <button onClick={()=> this.mergeSort()} style={{backgroundColor:"#6ca2ea"}}>Merge Sort</button>
                    <button onClick={()=> this.bubbleSort()} style={{backgroundColor:"#b5d33d"}}>Bubble Sort</button>
                    <button onClick={()=> this.quickSort()} style={{backgroundColor:"#fed23f"}}>Quick Sort</button>
                    <button onClick={()=> this.heapSort()} style={{backgroundColor:"#eb7d5b"}}>Heap Sort</button>

                </div>
            </div>
        )
        
    }
}

export default SortingVisualizer