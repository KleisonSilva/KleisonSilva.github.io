const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    "<p>HTML</p> <br> <p>It's a markup language used in the construction of web pages. HTML documents can be interpreted by browsers.</p> <br>",
                    "<p>CSS</p> <br> <p>It's a mechanism for adding style to a web document.</p> <br>",
                    "<p>JavaScript</p> <br> <p>It's a high-level programming language created at first to run in browsers and manipulate web page behaviors.</p> <br>",
                    "<p>Python</p> <br> <p>It's a high-level programming language, interpreted from script, imperative, object-oriented, functional, dynamic and strong typing.</p> <br>",
                    '<p>Sql </p> <br> <p>SQL is a standard language for working with relational databases.</p> <br>',
                    '<p>Powerbi</p> <br> <p>Power BI is a collection of business analytics services that mainly contributes to better end-user data gathering, synthesizing, and delivery..</p> <br>',
                    '<p>Git</p> <br> <p>It is a distributed version control system, mainly used in software development.</p> <br>',
                    '<p>Github</p> <br> <p>GitHub is a source hosting platform. With it, it is possible to develop projects collaboratively.</p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Hover over an skill to read the description */';
    } )
} );

