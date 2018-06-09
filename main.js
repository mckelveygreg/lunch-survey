
// function source: https://www.roytuts.com/limit-number-of-checkbox-selections-using-javascript/
function checkBoxLimit() {
    var checkBoxGroup = document.forms.surveyForm.favorite;
    var limit = 3;

    for (var i = 0; i < checkBoxGroup.length; i++) {
        checkBoxGroup[i].onclick = function() {
            var checkedcount = 0;
            for (var j = 0; j < checkBoxGroup.length; j++) {
                checkedcount += (checkBoxGroup[j].checked) ? 1 : 0;
            }
            if (checkedcount > limit) {
                alert("You can only choose a maximum of " + limit + " favorites!");
                this.checked = false;
            }
        }
    }
}
checkBoxLimit();