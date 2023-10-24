import { useState } from "react";
const Faqs = ({ FaqsData }) => {
    const [open, setOpen] = useState(-1);
    return (
        <section>
            {FaqsData?.map((faq, index) => {
                // console.log(index);
                return (
                    <div className="faq-container" key={faq.id}>
                        <div className="question-div">
                            <h5 className="question">{faq?.question}</h5>
                            {open === index ? (<button onClick={() => setOpen(-1)}>
                            {console.log(open,"==open",index,"===index")}
                                -
                            </button>)
                                : (<button onClick={() => setOpen(index)}>
                                    +
                                </button>)}
                                {console.log(open,"setopen value")}
                        </div>
                        {open === index && (
                            <div className="answer-div">
                                <p className="answer">{faq?.answer}</p>
                            </div>
                        )}

                    </div>
                )

            })

            }
        </section>
    )
}

export default Faqs;