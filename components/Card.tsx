type Question = {
    question: string;
    answer: string;
}

function Card(question: Question) {
    return(
        <div className="lg:mx-0 text-center content-center text-white ">
            <div className="text-3xl font-bold mx-4 py-5">
                {question.question}
            </div>

            <div className="font-light font-customFont text-xl mx-2 lg:mx-12 py-5">
                {question.answer}
            </div>
        </div>
    )
}

export default Card;