import { useEffect } from "react";

export default function useCustomScript(url: string) {
    useEffect(() => {
        const head = document.querySelector("head");
        const newScriptTag = document.createElement("script");
        newScriptTag.setAttribute("src", url);
        head?.appendChild(newScriptTag);

        return () => {
            head?.removeChild(newScriptTag);
        };
    }, [url]);
}
