import { useEffect, useState } from "react";

export function useDebounce(value, delay = 500) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearInterval(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}
