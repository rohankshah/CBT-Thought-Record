import './emotion.css'
import './styles.css'

let emotionAnswer = [];

const emotionRaw = "Frustration  Affection  Condescension  Aggravation  Hatred  Lust  Excitement  Empathy  Embarrassment  Contentment  Attraction  Malice  Desire  Disdain  Caution  Gratitude  Horror  Panic  Doubt  Inspiration  Anguish  Disappointment  Hostility  Pity  Humiliation  Confidence  Delight  Admiration  Longing  Pride  Dismay  Enthusiasm  Fury  Loneliness  Scorn  Wonder  Satisfaction  Wrath  Relief  Jealousy  Acceptance  Alarm  Wariness  Apprehension  Bitterness  Bliss  Bewilderment  Exhilaration  Cheerfulness  Contempt  Dejection  Worry  Elation  Enthusiasm  Ecstasy  Melancholy  Defiance  Glee  Nervousness  Pleasure  Spite  Woe  Suspicion  Dread  Jubilation  Euphoria";
const emotionRawSplit = emotionRaw.split(" ");
const emotionList = emotionRawSplit.filter(ele => ele != "");

const emotionArea = document.getElementsByClassName("main")[0].children[1].children[1];

emotionList.forEach(ele => {
    let emotionBtn = document.createElement("button");
    emotionBtn.classList.add("emotionBtn");
    emotionBtn.innerHTML = ele;
    emotionArea.appendChild(emotionBtn);
});

const emotionBtnList = document.getElementsByClassName("emotionBtn");
const emotionBtnListArr = Array.from(emotionBtnList);

emotionBtnListArr.forEach(ele => {
    ele.addEventListener('click', addEmotion);
})

const submitButton = document.getElementsByClassName("main")[0].children[3];
submitButton.addEventListener('click', savePdf);

function addEmotion(ev) {
    ev.path[0].classList.toggle("emotionBtnClick");
    let emotionName = ev.path[0].innerHTML;
    if (emotionAnswer.includes(emotionName)) {
        let tempEmotionAnswer = emotionAnswer.filter(ele => ele != emotionName);
        emotionAnswer = tempEmotionAnswer;
    }
    else {
        emotionAnswer.push(emotionName);
    }
}

function savePdf() {
    let a1 = document.getElementsByClassName("a1")[0];
    let ans1 = a1.value;   
    let a2 = document.getElementsByClassName("a2")[0];
    let ans2 = a2.value;   
    let ea = emotionAnswer.join(", ");
    let q1 = document.getElementsByClassName("q1")[0].children[0].innerHTML;
    let q2 = document.getElementsByClassName("q2")[0].children[0].innerHTML;
    let q3 = document.getElementsByClassName("q3")[0].children[0].innerHTML;
    
    let finalAns = `${q1}
${ans1}
                    
${q2}
${ea}
                    
${q3}
${ans2}`;

    let today = new Date().toLocaleDateString();

    const doc = new jsPDF();
    doc.text(finalAns, 10, 10);
    doc.save(`${today}.pdf`);

    location.reload();
}



