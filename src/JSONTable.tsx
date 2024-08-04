import React, { useState } from "react";

export function generateTableHTML(obj: any): string {
    if (Array.isArray(obj)) {
        let tbl = `<table class="table table-light table-hover table-bordered"> <tr> <th>[ind]</th> <th>[elem]</th> </tr>`; // table header
        for (let i = 0; i < obj.length; i++) {
            tbl += `<tr> <td>${i}</td> <td>${generateTableHTML(obj[i])}</td> </tr>`;
        }
        tbl += "</table>";
        return tbl;
    } else if (typeof obj === "object") {
        let tbl = `<table class="table table-light table-hover table-bordered"> ${Object.keys(obj).map((k) => `<tr> <th>${k}</th> <td>${generateTableHTML(obj[k])}</td> </tr>`).join('')} </table>`;
        tbl += `<tr> <td></td> ${Object.keys(obj).map((k) => `<td>${generateTableHTML(obj[k])}</td>`).join('')} </tr> </table>`;
        return tbl;
    } else {
        return obj.toString();
    }
};

export default function JSONTable() {
    const [jsonInp, setJsonInp] = useState("");
    const [status, setStatus] = useState("waiting"); // waiting -> not submitted, submitted -> submitted

    const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJsonInp(event.target.value);
    }

    const formSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitted");
        const outputArea = document.getElementById("outputTable");
        try {
            const cleanedInputText = jsonInp.replace("<", "&lt;").replace(">", "&gt;").replace("&", "&amp;");
            const asObject = JSON.parse(cleanedInputText);
            const asTableHTML = generateTableHTML(asObject);
            outputArea!.innerHTML = asTableHTML;
        } catch(e) {
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
                    <textarea onChange={textAreaChange} value={jsonInp} rows={10} className="form-control" name="jsonInp" id="jsonInp"></textarea>
                    <button type="submit" className="btn btn-light my-4" disabled={status !== "waiting"}>Render</button>
                </form>
            </div>

            <div className="container py-5" id="outputTable"></div>
        </main>
    );
}
