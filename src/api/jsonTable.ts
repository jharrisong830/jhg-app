export const generateTableHTML = (obj: any): string => {
    if (Array.isArray(obj)) {
        let tbl = `<table class="table table-light table-hover table-bordered"> <tr> <th>[ind]</th> <th>[elem]</th> </tr>`; // table header
        for (let i = 0; i < obj.length; i++) {
            tbl += `<tr> <td>${i}</td> <td>${generateTableHTML(obj[i])}</td> </tr>`;
        }
        tbl += "</table>";
        return tbl;
    } else if (typeof obj === "object") {
        const tbl = `<table class="table table-light table-hover table-bordered"> ${Object.keys(
            obj
        )
            .map(
                (k) =>
                    `<tr> <th>${k}</th> <td>${generateTableHTML(obj[k])}</td> </tr>`
            )
            .join("")} </table>`;
        return tbl;
    } else {
        return obj.toString();
    }
};
