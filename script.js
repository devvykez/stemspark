function openLesson(type){
    show('lessons'); // Switch to Lessons page first
    const content = {
        physics: "<h3>Physics</h3><p>Force = mass × acceleration</p>",
        math: "<h3>Math</h3><p>Algebra basics and equations</p>",
        coding: "<h3>Coding</h3><p>JavaScript fundamentals</p>",
        research: "<h3>Research</h3><p>Experimental methodology</p>"
    };
    document.getElementById('lessonContent').innerHTML = content[type];
}
