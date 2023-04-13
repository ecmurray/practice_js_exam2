var part1_check = document.querySelector("#part1Checkbox");
if (part1_check) {
    document.querySelector("#part1Checkbox").addEventListener("click", function() {
        document.querySelector("#part2").style.display = 'contents';
    });
}

//use '#message1' instead of 'label[id=message1]' to assign to textarea element instead of label element 
var copy_message_btn = document.querySelector('#message1');
if (copy_message_btn) {
    document.querySelector('#repeat').addEventListener('click', function() {
        document.querySelector('#message2').innerHTML = copy_message_btn.value;
    });
}

const brokenImg = document.querySelector('img[alt="Part Three Image (put mouse over me to see/use first image)"]');
const originalSrc = brokenImg.src;
brokenImg.addEventListener('mouseover', function() {
  const secondImg = document.querySelectorAll('img:not([alt="Part Three Image (put mouse over me to see/use first image)"])')[1];
  brokenImg.src = secondImg.src;
});
brokenImg.addEventListener('mouseout', function() {
    const secondImg = document.querySelectorAll('img:not([alt="Part Three Image (put mouse over me to see/use first image)"])')[1];
    brokenImg.src = originalSrc;
});