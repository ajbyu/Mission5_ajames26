const GRADE_VALUES = {
    "asg": .5,
    "gp": .1,
    "qz": .1,
    "mt": .1,
    "fe": .1,
    "intex": .1
}


$("#btnCalc").click(function (e) {

    e.preventDefault();

    var asgGrade = ($("#asg").val() / 100);
    var gpGrade = ($("#gp").val() / 100);
    var qzGrade = ($("#qz").val() / 100);
    var mtGrade = ($("#mt").val() / 100);
    var feGrade = ($("#fe").val() / 100);
    var ixGrade = ($("#ix").val() / 100);

    var totalGrade = 0;

    totalGrade += asgGrade * GRADE_VALUES["asg"];
    totalGrade += gpGrade * GRADE_VALUES["gp"];
    totalGrade += qzGrade * GRADE_VALUES["qz"];
    totalGrade += mtGrade * GRADE_VALUES["mt"];
    totalGrade += feGrade * GRADE_VALUES["fe"];
    totalGrade += ixGrade * GRADE_VALUES["intex"];

    totalGrade = totalGrade * 100;
    totalGrade = totalGrade.toFixed(2);

    letterGrade = GetLetterGrade(totalGrade);

    gradeResult = `Your grade is a ${letterGrade} at ${totalGrade}%.`

    $("#gradeResult").html(gradeResult);

});

function GetLetterGrade(gradePercent)
{
    var letterGrade = "";

    //JS switch statements are not as nice as C#.
    switch (true) {
        case (gradePercent >= 94.0):
            letterGrade = "A";
            break;
        case gradePercent >= 90.0:
            letterGrade = "A-";
            break;
        case gradePercent >= 87.0:
            letterGrade = "B+";
            break;
        case gradePercent >= "84":
            letterGrade = "B";
            break;
        case gradePercent >= 80:
            letterGrade = "B-";
            break;
        case gradePercent >= 77:
            letterGrade = "C+";
            break;
        case gradePercent >= 74:
            letterGrade = "C-";
            break;
        case gradePercent >= 70:
            letterGrade = "D+";
            break;
        case gradePercent >= 67:
            letterGrade = "D";
            break;
        case gradePercent >= 64:
            letterGrade = "D-";
            break;
        case gradePercent >= 60:
            letterGrade = "E";
            break;
    }

    return letterGrade;
}