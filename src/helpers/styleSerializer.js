// styleList -> string: class names one whitespace between each other.
// styles -> need to be import of an scss as a module.
const styleSerializer = (styles, styleList) => {
    const styleArr = styleList.split(" ");
    let moduleStyles;
    styleArr.forEach(s => {
        moduleStyles = moduleStyles + " " + styles[s]
    });

    return moduleStyles;
}

export default styleSerializer;