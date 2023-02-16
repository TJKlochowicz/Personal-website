document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

engine.registerFilters({
    group_by: (input, key) => {
        const result = groupBy(input, key);
        // map dictionary back to arry
        return Object.keys(result).map(key1=>{
            return {
                key: key1,
                items: result[key1]
            };
        });
    }
});

