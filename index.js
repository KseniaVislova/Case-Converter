const text = document.querySelector('textarea');
const btnUpperCase = document.getElementById('upper-case');
const btnLowerCase = document.getElementById('lower-case');
const btnProperCase = document.getElementById('proper-case');
const btnSentenceCase = document.getElementById('sentence-case');
const btnSaveText = document.getElementById('save-text-file');

btnUpperCase.addEventListener('click', function () {
    text.value = text.value.toUpperCase().trim();
})

btnLowerCase.addEventListener('click', function () {
    text.value = text.value.toLowerCase().trim();
})

btnProperCase.addEventListener('click', function () {
    let words = text.value.toLowerCase().trim().split(' ');
    let transformWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    text.value = transformWords.join(' ');
})

btnSentenceCase.addEventListener('click', function () {
    let sentences = text.value.toLowerCase().split('.');
    console.log(sentences);
    let transformSentences = sentences.map(sentence => {
        sentence = sentence.trim();
        if (!sentence) return sentence;
        return sentence[0].toUpperCase() + sentence.slice(1);
    })
    text.value = transformSentences.join('. ');
})

btnSaveText.addEventListener("click", function () {
    let content = text.value;
    download('text.txt', content);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
