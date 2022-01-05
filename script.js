function showTrivias() {
    // muestra pantalla2 y oculta lo demás
    var pantalla1 = document.getElementById("pantalla1");
    var pantalla2 = document.getElementById("pantalla2")
    var trivia1 = document.getElementById("trivia1")
    var trivia2 = document.getElementById("trivia2")
  
  
    var nombre = document.getElementById("name").value;
  // ingresa la variable nombre en el parrafo con inner
    document.getElementById("name2").innerHTML = '¡Hola ' + nombre + '!, puedes comenzar con cualquier trivia...';
  
  
    pantalla1.style.display = "none";
  
    pantalla2.style.display = "block";
    trivia1.style.display = "none";
    trivia2.style.display = "none";
  }
  
  //Muestra trivia1 y oculta la otra pantalla
  function goToTrivia1() {
    var pantalla2 = document.getElementById("pantalla2")
    var trivia1 = document.getElementById("trivia1");
  
    pantalla2.style.display = "none";
    trivia1.style.display = "block";
  }
  
  //Muestra trivia2 y oculta la otra pantalla
  function goToTrivia2() {
    var pantalla2 = document.getElementById("pantalla2")
    var trivia2 = document.getElementById("trivia2");
  
    pantalla2.style.display = "none";
    trivia2.style.display = "block";
  }
  
  function startAgain() {
    //Sólo recarga la página
   location.reload();
  }
  
  
  function comprobacion1() {
    var score = 0;
    //obtención del elemento donde irá el mensaje
    const texto = document.getElementById('validation-text');
    //Si respuesta ea correcta suma uno
    if (document.getElementById('correct1-t1').checked) {
      score++;
    }
    if (document.getElementById('correct2-t1').checked) {
      score++;
    }
  
    
    //Si tuvo más de una respuesta bien, se muestra resultado, si no se manda otro mensaje
    if (score > 0) {
      texto.innerHTML = "Y tu resultado es... ¡" + score + " de 2!";
    }
    else {
      texto.innerHTML = "No tuviste ninguna respuesta bien. Sigue participando!";
    }
    texto.style.display = "block";
  }
  
  function comprobacion2() {
    console.log("Usuario ha respondido la trivia 2");
    var score = 0;
    const texto = document.getElementById('validation-text2');
  
    if (document.getElementById('correct4-t1').checked) {
      score++;
    }
    if (document.getElementById('correct3-t1').checked) {
      score++;
    }
  
    
    
    if (score > 0) {
      texto.innerHTML = "Y tu resultado es... ¡" + score + " de 2!";
    }
    else {
      texto.innerHTML = "No tuviste ninguna respuesta bien. Sigue participando!";
    }
    texto.style.display = "block";
  
  } 