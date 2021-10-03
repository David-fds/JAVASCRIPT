function getGrade(gradeEntry){
        var gradeLetter

    if (gradeEntry >= 97){
        gradeLetter = "A+";        
    }

    else if (gradeEntry >= 93){
        gradeLetter = "A";
    }

    else if (gradeEntry >= 90){
        gradeLetter = "A-";
    }

    else if (gradeEntry >= 87){
        gradeLetter = "B+";
    }
    else if (gradeEntry >= 83){
        gradeLetter = "B";
    }

    else if (gradeEntry >= 80){
        gradeLetter = "B-";
    }

    else if (gradeEntry >= 77){
        gradeLetter = "C+";
    }

    else if (gradeEntry >= 73){
        gradeLetter = "C";
    }

    else if (gradeEntry >= 70){
        gradeLetter = "C-";
    }

    else if (gradeEntry >= 67){
        gradeLetter = "D+";
    }

    else if (gradeEntry >= 63){
        gradeLetter = "D";
    }

    else if (gradeEntry >= 60){
        gradeLetter = "D-";
    }

    else {
        gradeLetter = "F";
    }

    return gradeLetter
}

console.log(getGrade(91));