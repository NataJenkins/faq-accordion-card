// import { useState } from "react";
import "./App.scss";
import Accordion from "./accordion";
import Arrow from "./assets/icon-arrow-down.svg";

function App() {
    const accordionContent = [
        {
            title: "How many team members can I invite?",
            content: "You can invite as many members as you like!",
        },
        {
            title: "What is the maximum file upload size?",
            content:
                "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
            title: "How do I reset my password?",
            content:
                "Click on button 'Reset password' under the password input.",
        },
        {
            title: "Can I cancel my subscription?",
            content: "You can canel your subscription at any time.",
        },
        {
            title: "Do you provide additional support?",
            content:
                "For additional support you can contact us at mail@faq.com",
        },
    ];
    return (
        <main>
            <div className="container">
                <div className="card">
                    <div className="questions">
                        <h1>FAQ</h1>
                        <div className="acc">
                            {accordionContent.map((item, i) => (
                                <Accordion
                                    key={i}
                                    controllerElement={(isExpanded) => (
                                        <div
                                            className={`title ${
                                                isExpanded ? "hide" : "show"
                                            }`}
                                        >
                                            {item.title}
                                            <img src={Arrow} alt="" />
                                        </div>
                                    )}
                                >
                                    <p>{item.content}</p>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
