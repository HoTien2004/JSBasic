const obj = {
    name: 'Alice',
    cat2: {
        name: 'Dinah1',
        cat2: {
            name: 'Dinah2',
            cat3: {
                name: 'Dinah3',
            }
        }
    }
}

if (
    obj?.cat?.cat2?.cat3
) {
    console.log(obj.cat.cat2.cat3.name)
}