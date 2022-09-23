import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import QuestionData from "../data/QuestionData";

const Quiz = () => {
    //console.log(QuestionData)
    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoice] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(() => {
        checkAns()
    },[selectChoice])
    
    const checkAns = () => {
        if(selectChoice !== "")
        if(selectChoice === QuestionData[current].answer){
            setScore(score+1)
            console.log("ถูกแน้ว")
            nextQuestion()
        }else{
            console.log("โดนหลอกแน้ว")
            nextQuestion()
        }
    }

    const nextQuestion = () => {
        setSelectChoice("")
        if(current === QuestionData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }
    }
    
    
    return(
        <div className="quiz">
            <h1>{QuestionData[current].question}</h1>
            <div className="choices">
                <button onClick={() => setSelectChoice("A")}>{QuestionData[current].A}</button>
                <button onClick={() => setSelectChoice("B")}>{QuestionData[current].B}</button>
                <button onClick={() => setSelectChoice("C")}>{QuestionData[current].C}</button>
                <button onClick={() => setSelectChoice("D")}>{QuestionData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionData.length}`}</p>
        </div>
    )
}
export default Quiz;