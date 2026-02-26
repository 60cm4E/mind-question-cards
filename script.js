const seriesData = {
    "자존감편": [
        "나를 가장 미소 짓게 만드는 소소한 행복은 무엇인가요?",
        "최근에 나 스스로가 가장 자랑스러웠던 순간은 언제인가요?",
        "내가 가진 가장 멋진 장점 세 가지를 꼽는다면 무엇인가요?",
        "지난 일주일 동안 나를 위해 한 가장 잘한 행동은 무엇인가요?",
        "나의 외모 중 가장 마음에 드는 매력 포인트는 어디인가요?",
        "친구들이 나를 칭찬할 때 가장 자주 하는 말은 무엇인가요?",
        "실패를 경험했을 때, 나를 다시 일어서게 한 원동력은 무엇이었나요?",
        "내가 겪었던 가장 큰 어려움과 그것을 이겨낸 방법은 무엇인가요?",
        "어릴 적 나의 꿈은 무엇이었고, 지금의 나는 그 모습과 얼마나 닮아 있나요?",
        "내가 생각하는 나의 가장 사랑스러운 점은 무엇인가요?",
        "내가 다른 사람들에게 긍정적인 영향을 준 기억이 있나요?",
        "누군가에게 들었던 말 중 내 가슴에 가장 깊이 남은 따뜻한 말은 무엇인가요?",
        "나를 위로하기 위해 나만의 특별한 스트레스 해소법이 있다면 무엇인가요?",
        "나 자신에게 '고마워'라고 말해주고 싶은 순간은 언제인가요?",
        "내가 생각하는 '나다운' 모습은 어떤 모습인가요?",
        "자신감이 떨어졌을 때, 나의 마음을 다잡기 위해 하는 생각은 무엇인가요?",
        "내가 앞으로 꼭 이루고 싶은 나의 멋진 미래 모습은 어떠한가요?",
        "완벽하지 않아도 괜찮다고 스스로를 다독여준 적이 있나요?",
        "내가 나를 가장 존중하고 아껴준다고 느꼈던 경험은 무엇인가요?",
        "나만의 고유한 매력, 다른 누구와도 비교할 수 없는 나만의 것은 무엇인가요?",
        "오늘 거울을 보며 나에게 해주고 싶은 기분 좋은 칭찬 한마디는?",
        "내가 좋아하는 일을 할 때의 내 표정은 어떤 모습일까요?",
        "나의 삶을 변화시킨 나만의 작은 습관은 무엇인가요?",
        "스스로 한 약속을 끝까지 지켜냈을 때의 기분은 어땠나요?",
        "남들의 시선을 신경 쓰지 않고 온전히 나를 피어내었던 순간은 언제인가요?",
        "나의 부족함을 인정하고, 그것마저 안아주기로 한 적이 있나요?",
        "내가 생각하는 진정한 '행복'과 '자존감'은 어떤 의미인가요?",
        "나의 강점 중 한 가지를 꼽아 누군가를 도와준 경험이 있다면?",
        "지금의 내가 과거의 나에게 해주고 싶은 가장 따뜻한 조언은 무엇인가요?",
        "나의 이름, 혹은 나를 부르는 호칭에 대해 나는 어떤 긍정적인 느낌을 가지고 있나요?",
        "무언가를 새롭게 배우고 성장하면서 느꼈던 벅찬 감정은 어땠나요?",
        "힘들었던 시기를 견뎌낸 나 자신에게 주고 싶은 특별한 상은 무엇인가요?",
        "내가 생각해도 정말 기발하고 멋졌던 나만의 아이디어는 무엇이었나요?",
        "타인과 나를 비교하지 않고, 나의 길잡이가 되어주는 가치관은 무엇인가요?",
        "오늘 하루, 나를 위해 꼭 허락해주고 싶은 여유나 작은 쉼은 무엇인가요?",
        "내가 가장 평온함을 느끼는 장소 혹은 공간은 어디인가요?",
        "스스로 생각했을 때, 나의 내면이 작년보다 더 단단해졌다고 느끼는 부분은 어디인가요?",
        "나를 언제나 믿어주고 응원해주는 소중한 사람(혹은 존재)은 누구인가요?",
        "내가 제일 좋아하는 음식으로 나를 대접하며 스스로를 아껴본 적 있나요?",
        "어떤 일이 있어도 변하지 않고 굳건하게 지키고 있는 나의 신념은 무엇인가요?",
        "남들에게는 사소해 보여도 나에게는 정말 특별하게 느껴지는 보물 1호는 무엇인가요?",
        "타인의 부정적인 말에 상처받지 않기 위해 내가 마음을 다루는 방법은 무엇인가요?",
        "처음으로 내 한계를 뛰어넘어 무언가를 이뤄냈던 생생한 기억은 무엇인가요?",
        "하루의 끝, 잠들기 전 스스로에게 꼭 해주고 싶은 따뜻한 인삿말은 무엇인가요?",
        "지금 내 곁에 있는 행복 중, 당연하게 생각했지만 사실 너무 감사한 것은 무엇인가요?",
        "내가 가진 수많은 감정 중 가장 아름답다고 생각하는 감정은 무엇인가요?",
        "스쳐 지나가는 일상 속에서 나를 예술가처럼 창의적으로 만들어주는 순간은 언제인가요?",
        "누가 뭐래도 절대 굽히지 않을 나만의 단단한 취향은 무엇인가요?",
        "과거에 저지른 실수에 얽매이지 않고, 나 스스로를 멋지게 용서한 경험이 있나요?",
        "나라는 사람을 한 권의 책으로 쓴다면, 지금 챕터의 제목은 무엇일까요?",
        "지금 바로 이 순간, 내가 느끼는 나에 대한 감정을 한 단어로 표현한다면?",
        "앞으로의 1년 동안 나 자신과 맺고 싶은 가장 소중한 약속은 무엇인가요?"
    ]
};

let deck = [];
let currentSeries = "";

// Elements
const homeScreen = document.getElementById('home-screen');
const playScreen = document.getElementById('play-screen');
const seriesCards = document.querySelectorAll('.series-card:not(.disabled)');
const btnHome = document.getElementById('btn-home');
const btnDraw = document.getElementById('btn-draw');
const cardDisplay = document.getElementById('card-display');
const cardText = document.getElementById('card-text');
const cardsRemaining = document.getElementById('cards-remaining');
const endOverlay = document.getElementById('end-overlay');
const btnRestart = document.getElementById('btn-restart');
const btnHomeEnd = document.getElementById('btn-home-end');

// Shuffle using Fisher-Yates
function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function startSeries(seriesName) {
    currentSeries = seriesName;
    if (seriesData[seriesName]) {
        deck = shuffleArray(seriesData[seriesName]);
    } else {
        deck = [];
    }

    // Reset UI
    endOverlay.classList.remove('active');
    btnDraw.disabled = false;
    cardText.textContent = "첫 질문 카드를 뽑아주세요";
    cardText.className = "placeholder-text";
    btnDraw.textContent = "첫 질문 뽑기";

    updateRemaining();

    // Screens
    homeScreen.classList.remove('active');
    playScreen.classList.add('active');

    cardDisplay.classList.remove('draw-anim', 'discard-anim');
}

function updateRemaining() {
    cardsRemaining.textContent = `남은 카드: ${deck.length}장`;
}

let isAnimating = false;

function drawNextCard() {
    if (isAnimating) return;

    if (deck.length === 0 && cardText.textContent !== "첫 질문 카드를 뽑아주세요") {
        showEndScreen();
        return;
    }

    isAnimating = true;

    if (cardText.textContent !== "첫 질문 카드를 뽑아주세요" && cardText.textContent !== "") {
        // Discard animation
        cardDisplay.classList.remove('draw-anim');
        cardDisplay.classList.add('discard-anim');

        setTimeout(() => {
            showNewCard();
        }, 300); // Trigger draw when discarding is halfway
    } else {
        showNewCard();
    }
}

function showNewCard() {
    if (deck.length === 0) {
        isAnimating = false;
        return;
    }

    const nextQuestion = deck.pop();
    updateRemaining();

    cardDisplay.classList.remove('discard-anim');

    cardText.textContent = nextQuestion;
    cardText.className = ""; // Remove placeholder style to show normal text styling

    // Restart animation
    void cardDisplay.offsetWidth; // reflow trick
    cardDisplay.classList.add('draw-anim');

    if (deck.length === 0) {
        btnDraw.textContent = "결과 보기";
    } else {
        btnDraw.textContent = "다음 카드 뽑기";
    }

    // Animation ends safely
    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

function showEndScreen() {
    endOverlay.classList.add('active');
}

function goHome() {
    playScreen.classList.remove('active');
    homeScreen.classList.add('active');
    setTimeout(() => {
        endOverlay.classList.remove('active');
    }, 400);
}

// Event Listeners
seriesCards.forEach(card => {
    card.addEventListener('click', () => {
        startSeries(card.dataset.series);
    });
});

btnHome.addEventListener('click', goHome);
btnHomeEnd.addEventListener('click', goHome);

btnRestart.addEventListener('click', () => {
    startSeries(currentSeries);
});

btnDraw.addEventListener('click', drawNextCard);
cardDisplay.addEventListener('click', drawNextCard);
