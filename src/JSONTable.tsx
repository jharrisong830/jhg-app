import { useState } from "react";
import { generateTableHTML } from "./api/jsonTable";

export default function JSONTable() {
    const [jsonInp, setJsonInp] = useState("");
    const [status, setStatus] = useState("waiting"); // waiting -> not submitted, submitted -> submitted

    const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJsonInp(event.target.value);
    };

    const formSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitted");
        const outputArea = document.getElementById("outputTable");
        try {
            const cleanedInputText = jsonInp
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/&/g, "&amp;");
            const asObject = JSON.parse(cleanedInputText);
            const asTableHTML = generateTableHTML(asObject);
            outputArea!.innerHTML = asTableHTML;
        } catch (e) {
            outputArea!.innerHTML = (e as Error).toString();
        }
        setStatus("waiting");
    };

    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-normal">JSON Table Renderer</h1>
                <p className="lead">
                    Insert JSON-formatted text to render it in a tabular format.
                </p>
            </div>

            <div className="container py-5">
                <form id="jsonInpForm" onSubmit={formSubmitEvent}>
                    <textarea
                        onChange={textAreaChange}
                        value={jsonInp}
                        rows={10}
                        className="form-control"
                        name="jsonInp"
                        id="jsonInp"
                    ></textarea>
                    <button
                        type="submit"
                        className="btn btn-light my-4"
                        disabled={status !== "waiting"}
                    >
                        Render
                    </button>
                </form>
            </div>

            <div className="container py-5" id="outputTable"></div>
        </main>
    );
}
