const myTemplateTagFunction = function() {

    console.log(arguments);

};

myTemplateTagFunction`
    3 + 3 = ${3 + 3}
    This boolean is ${true}
    5 * 5 = ${5 * 5}
`;
