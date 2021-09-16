
export const modifyClass = (isActive, classString, classToModify) => {
    const toChange = document.querySelector(classString);
    if (isActive){
        toChange ?.classList.add(classToModify);
    } else {
        toChange ?.classList.remove(classToModify);
    }
}