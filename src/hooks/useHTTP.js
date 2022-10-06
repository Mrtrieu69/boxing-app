import { useCallback, useState } from 'react';

export const useHTTP = () => {
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }

        try {
            const data = await fetch(url, { method, body, headers });
            const res = data.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            setLoading(false);
            return res;
        } catch (e) {
            setLoading(false);
            throw e;
        }
    }, []);

    return { loading, request };
};
