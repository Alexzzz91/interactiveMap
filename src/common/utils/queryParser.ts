type QueryParamValue = string | null;

type QueryParams = Record<string, QueryParamValue | QueryParamValue[]>;

const enum QueryParamArrayFormats {
    Brackets = 'brackets',
    None = 'none',
}

const parseQuery = (
    queryString: string,
    options: {arrayFormat: QueryParamArrayFormats} = { arrayFormat: QueryParamArrayFormats.None },
): QueryParams => {
    if (!queryString) {
        return {};
    }

    if (queryString[0] === '?') {
        queryString = queryString.substring(1);
    }

    if (!queryString) {
        return {};
    }

    return queryString.split('&').reduce<QueryParams>((queryParams, param) => {
        let [name, value = null] = param.split('=');

        if (typeof value === 'string') {
            try {
                value = decodeURIComponent(value);
            } catch (e) {
                return queryParams;
            }
        }

        if (options.arrayFormat === QueryParamArrayFormats.Brackets && /.*\[\]$/.test(name)) {
            name = name.substring(0, name.length - 2);
        }

        const prevValue = queryParams[name];

        if (typeof prevValue === 'undefined') {
            // обнаружили новый параметр
            queryParams[name] = value;
        } else if (Array.isArray(prevValue)) {
            // этот параметр уже повторялся несколько раз, добавим новое значение в массив
            queryParams[name] = prevValue.concat(value);
        } else {
            // этот параметр уже встречался 1 раз, создадим массив
            queryParams[name] = [prevValue, value];
        }

        return queryParams;
    }, {});
}

export {
    parseQuery,
};