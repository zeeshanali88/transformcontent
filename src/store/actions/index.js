export const remove = 'remove';
export const rename = 'rename';
export const move = 'move';
export const setcontent = 'setcontent';

export const setContent = (content, transformation) => ({ type: setcontent, payload: {content: content, transformation: transformation} });

export const findContent = (content, id) => {
    return content.some(value => value.id == id);
}

export const onRemove = (content, id) => {
    if(findContent(content, id)) {
        content = content.filter(value => value.id != id);
        return content
    }
    else {
        return false
    }
}

export const onRename = (content, id, newid) => {
    if(findContent(content, newid) || !findContent(content, id)) {
        return false
    }
    else {
        let index = content.findIndex(value => value.id == id);
        if(index != -1) {
            content[index].id = newid;
        }
        return content
    }
}

export const onMove = (content, pos, distance) => {
    if(pos >= 0 && pos < content.length) {
        let posIndex = Number(pos) + Number(distance);
        if(posIndex && Math.abs(posIndex) >= content.length) {
            let ratio = Math.abs((posIndex/(content.length-1)));
            posIndex = ((Math.round((ratio - Math.floor(ratio))) * (content.length-1)));
            if(distance < 0) {
                posIndex = - posIndex + content.length;
            }
        }
        else if(posIndex < 0) {
            posIndex = posIndex + content.length;
        }
        let posValue = content[pos]
        return content.map((value, index, array) => {
            if(index === posIndex) {
                return posValue
            } else if(index >= pos && index <= posIndex){
                return array[index + 1]
            } else if(index <= pos && index >= posIndex) {
                return array[index - 1]
            } else {
                return value
            }
        });
    }
    else {
        return false
    }
}

export const onTransform = (content, transformations) => {
    let newtransformation = []
    transformations.forEach(transformation => {
        let newcontent;
        if(transformation.type == remove) {
            newcontent = onRemove(content, transformation.target.id)
            if(newcontent) {
                content = newcontent;
                newtransformation.push(true);
            }
            else {
                newtransformation.push(false);
            }
        }
        else if(transformation.type == rename) {
            newcontent = onRename(content, transformation.target.id, transformation.newid);
            if(newcontent) {
                content = newcontent;
                newtransformation.push(true);
            }
            else {
                newtransformation.push(false);
            }
        }
        else if(transformation.type == move) {
            newcontent = onMove(content, transformation.target.pos, transformation.distance);
            if(newcontent) {
                content = newcontent;
                newtransformation.push(true);
            }
            else {
                newtransformation.push(false);
            }
        }
    })

    return setContent(content, newtransformation);
}