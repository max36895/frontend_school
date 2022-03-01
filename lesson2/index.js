const items = [
    {
        id: 4,
        text: 'b',
        tag: ['important', 'easy']
    }, {
        id: 6,
        text: 'c',
        tag: ['important']
    }, {
        id: 2,
        text: 'a',
        tag: []
    }
];

let counter = 10;

function getItemIndex(itemId) {
    const findIndexCallback = (item) => {
        return item.id === itemId;
    };
    return items.findIndex(findIndexCallback);
}

function createItem(text, tag = []) {
    const item = {
        id: counter,
        text,
        tag
    };
    items.push(item);
    ++counter;
}

function deleteItem(itemId) {
    const itemIndex = getItemIndex(itemId);
    items.splice(itemIndex, 1);
}

function filterByTag(tagName) {
    return items.filter((item) => item.tag.includes(tagName));
}

function changeValue(newValue, itemId, propertyName) {
    const itemIndex = getItemIndex(itemId);
    items[itemIndex][propertyName] = newValue;
}

function sortByText() {
    items.sort((a, b) => {
        if(a.text > b.text) {
            return 1;
        }
        if(a.text < b.text) {
            return -1;
        }
        return 0;
    });
}

const text = 'bla'
let test = text !== 'bla';

if (text === 'bla') {
    test = false;
} else {
    test = true;
}